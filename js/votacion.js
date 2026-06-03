/* ============================================================
   BLOODSITAX — votacion.js
   Votación Killer: 4 killers al azar (sin repetir) + el chat
   de Twitch vota con A/B/C/D. Conexión IRC anónima a #bloodsitax.

   Todo va dentro de una IIFE para NO chocar con las variables
   globales de killer.js / survivor.js / etc.
   ============================================================ */
(function () {
'use strict';

/* ───────────────── CONFIG ───────────────── */
const CHANNEL      = 'bloodsitax';   // canal de Twitch a escuchar
const VOTE_SECONDS = 20;             // duración de la votación
const REVEAL_GAP   = 1000;           // 1 s entre tarjeta y tarjeta
const SPIN_MS      = 750;            // duración del giro de cada mini-ruleta
const VK_TEST      = false;          // ⚠️ true = permite simular votos con la tecla T (solo para probar)

/* ───── lista REAL de killers (idéntica a killer.js) ───── */
const KILLERS = [
  {name:'Arponero',        img:'imagenes_killers/Arponero.png'},
  {name:'Bruja',           img:'imagenes_killers/Bruja.png'},
  {name:'Bubba',           img:'imagenes_killers/Bubba.png'},
  {name:'Caballero',       img:'imagenes_killers/Caballero.png'},
  {name:'Cazadora',        img:'imagenes_killers/Cazadora.png'},
  {name:'Cenobite',        img:'imagenes_killers/Cenobite.png'},
  {name:'Cerda',           img:'imagenes_killers/Cerda.png'},
  {name:'Chucky',          img:'imagenes_killers/Chucky.png'},
  {name:'Comerciante',     img:'imagenes_killers/Comerciante.png'},
  {name:'Demogorgon',      img:'imagenes_killers/Demogorgon.png'},
  {name:'Deterioro',       img:'imagenes_killers/Deterioro.png'},
  {name:'Doctor',          img:'imagenes_killers/Doctor.png'},
  {name:'Dracula',         img:'imagenes_killers/Dracula.png'},
  {name:'Dredge',          img:'imagenes_killers/Dredge.png'},
  {name:'Espiritu',        img:'imagenes_killers/Espiritu.png'},
  {name:'Freddy',          img:'imagenes_killers/Freddy.png'},
  {name:'Gemelos',         img:'imagenes_killers/Gemelos.png'},
  {name:'Ghost Face',      img:'imagenes_killers/Ghost%20Face.png'},
  {name:'Kaneki',          img:'imagenes_killers/Kaneki.png'},
  {name:'Krasue',          img:'imagenes_killers/Krasue.png'},
  {name:'Legion',          img:'imagenes_killers/Legion.png'},
  {name:'Myers',           img:'imagenes_killers/Myers.png'},
  {name:'Nemesis',         img:'imagenes_killers/Nemesis.png'},
  {name:'Oni',             img:'imagenes_killers/Oni.png'},
  {name:'Payaso',          img:'imagenes_killers/Payaso.png'},
  {name:'Plaga',           img:'imagenes_killers/Plaga.png'},
  {name:'Pyramid Head',    img:'imagenes_killers/Pyramid%20Head.png'},
  {name:'Sadako',          img:'imagenes_killers/Sadako.png'},
  {name:'Singularidad',    img:'imagenes_killers/Singularidad.png'},
  {name:'Springtrap',      img:'imagenes_killers/Springtrap.png'},
  {name:'The Artist',      img:'imagenes_killers/The%20Artist.png'},
  {name:'The First',       img:'imagenes_killers/The%20First.png'},
  {name:'The Hillbilly',   img:'imagenes_killers/The%20Hillbilly.png'},
  {name:'The Houndmaster', img:'imagenes_killers/The%20Houndmaster.png'},
  {name:'The Nurse',       img:'imagenes_killers/The%20Nurse.png'},
  {name:'The Trapper',     img:'imagenes_killers/The%20Trapper.png'},
  {name:'The Wraith',      img:'imagenes_killers/The%20Wraith.png'},
  {name:'Trickster',       img:'imagenes_killers/Trickster.png'},
  {name:'Unknown',         img:'imagenes_killers/Unknown.png'},
  {name:'Vecna',           img:'imagenes_killers/Vecna.png'},
  {name:'Wesker',          img:'imagenes_killers/Wesker.png'},
  {name:'Xenomorph',       img:'imagenes_killers/Xenomorph.png'},
];

const LETTERS = ['A','B','C','D'];

/* ───────────────── ESTADO ───────────────── */
const S = {
  options: [],            // [{letter,name,img}]
  rolled: false,
  voting: false,
  votes: {},              // { userId : 'A' }  → 1 voto por persona (solo el primero válido)
  counts: {A:0,B:0,C:0,D:0},
  total: 0,
  timerId: null, left: 0,
  testId: null,
  socket: null, connected: false
};

/* ───────────────── DOM ───────────────── */
const $ = id => document.getElementById(id);
const cardsEl = $('vkCards');
const rollBtn = $('vkRollBtn');
const voteBtn = $('vkVoteBtn');
const timerWrap = $('vkTimerWrap');
const timerEl = $('vkTimer');
const resultEl = $('vkResult');
const chatBox = $('vkChatBox');
const voteCountEl = $('vkVoteCount');
const dotEl = $('vkDot');

const setImg = (el, src) => { el.style.backgroundImage = 'url("' + src + '")'; };

/* ───────────────── construir 4 tarjetas ───────────────── */
function buildCards(){
  cardsEl.innerHTML = '';
  LETTERS.forEach(L => {
    const c = document.createElement('div');
    c.className = 'vk-card';
    c.dataset.letter = L;
    c.innerHTML =
      '<div class="vk-crown">👑</div>' +
      '<div class="vk-pct" data-letter="'+L+'">0%</div>' +
      '<div class="vk-letter">'+L+'</div>' +
      '<div class="vk-frame"><div class="vk-portrait"></div></div>' +
      '<div class="vk-name">— — —</div>' +
      '<div class="vk-bar"><i></i></div>';
    cardsEl.appendChild(c);
  });
}
const cardOf = L => cardsEl.querySelector('.vk-card[data-letter="'+L+'"]');

/* ───────────────── randomizador sin repetición ───────────────── */
function pickFour(){
  const pool = KILLERS.slice();
  for (let i = pool.length - 1; i > 0; i--){
    const r = new Uint32Array(1); crypto.getRandomValues(r);
    const j = r[0] % (i + 1);
    [pool[i], pool[j]] = [pool[j], pool[i]];
  }
  return pool.slice(0, 4);
}

/* ───────────────── precarga de imágenes (optimización) ───────────────── */
const imgCache = [];
function preload(){
  KILLERS.forEach(k => { const im = new Image(); im.src = k.img; imgCache.push(im); });
}

/* ───────────────── mini-ruleta de una tarjeta ───────────────── */
function spinCard(card, finalKiller, done){
  const portrait = card.querySelector('.vk-portrait');
  portrait.classList.add('spinning');
  const start = performance.now();
  (function tick(now){
    if (now - start < SPIN_MS){
      setImg(portrait, KILLERS[Math.floor(Math.random()*KILLERS.length)].img);
      setTimeout(() => requestAnimationFrame(tick), 70);
    } else {
      setImg(portrait, finalKiller.img);
      portrait.classList.remove('spinning');
      card.querySelector('.vk-name').textContent = finalKiller.name;
      done && done();
    }
  })(performance.now());
}

/* ───────────────── ROLL (revelado secuencial) ───────────────── */
function roll(){
  if (S.voting) return;
  rollBtn.disabled = true;
  voteBtn.disabled = true;
  resetResults();

  S.rolled = false; S.options = [];
  S.votes = {}; S.counts = {A:0,B:0,C:0,D:0}; S.total = 0;

  const cards = [...cardsEl.children];
  cards.forEach(c => {
    c.className = 'vk-card';
    c.querySelector('.vk-name').textContent = '— — —';
    c.querySelector('.vk-pct').textContent = '0%';
    c.querySelector('.vk-bar i').style.width = '0%';
  });

  const chosen = pickFour();   // 4 únicos garantizados
  chosen.forEach((k,i) => S.options.push({letter:LETTERS[i], name:k.name, img:k.img}));

  let revealed = 0;
  chosen.forEach((k,i) => {
    setTimeout(() => {
      const card = cards[i];
      card.classList.add('show');
      spinCard(card, k, () => {
        if (++revealed === 4){
          S.rolled = true;
          rollBtn.disabled = false;
          voteBtn.disabled = false;
        }
      });
    }, i * REVEAL_GAP);
  });
}

/* ───────────────── VOTACIÓN ───────────────── */
function startVoting(){
  if (!S.rolled || S.voting) return;
  S.voting = true;
  S.votes = {}; S.counts = {A:0,B:0,C:0,D:0}; S.total = 0;
  resetResults();

  voteBtn.disabled = true;
  rollBtn.disabled = true;
  dotEl.classList.add('live');
  [...cardsEl.children].forEach(c => c.classList.add('voting'));
  updatePercents();

  S.left = VOTE_SECONDS;
  timerWrap.classList.add('on');
  timerEl.textContent = S.left;
  timerEl.classList.remove('low');

  S.timerId = setInterval(() => {
    S.left--;
    timerEl.textContent = Math.max(0, S.left);
    if (S.left <= 5) timerEl.classList.add('low');
    if (S.left <= 0) endVoting();
  }, 1000);
}

/* voto válido = el mensaje, sin espacios, es EXACTAMENTE una letra A/B/C/D */
function parseVote(text){
  const t = (text || '').trim().toUpperCase();
  return (t.length === 1 && LETTERS.indexOf(t) !== -1) ? t : null;
}

/* registra respetando: votar solo durante la votación, 1 voto por usuario, solo el PRIMERO válido */
function registerVote(userId, text){
  if (!S.voting) return null;
  const v = parseVote(text);
  if (!v) return null;
  if (Object.prototype.hasOwnProperty.call(S.votes, userId)) return null; // ya votó
  S.votes[userId] = v;
  S.counts[v]++; S.total++;
  updatePercents();
  return v;
}

function updatePercents(){
  LETTERS.forEach(L => {
    const pct = S.total ? Math.round(S.counts[L] / S.total * 100) : 0;
    const card = cardOf(L);
    card.querySelector('.vk-pct').textContent = pct + '%';
    card.querySelector('.vk-bar i').style.width = pct + '%';
  });
  voteCountEl.textContent = S.total ? (S.total + ' voto' + (S.total !== 1 ? 's' : '')) : '';
}

function endVoting(){
  clearInterval(S.timerId); S.timerId = null;
  if (S.testId){ clearInterval(S.testId); S.testId = null; }
  S.voting = false;
  timerWrap.classList.remove('on');
  dotEl.classList.remove('live');
  [...cardsEl.children].forEach(c => { c.classList.remove('voting'); c.classList.add('results'); });

  const max = Math.max(...LETTERS.map(L => S.counts[L]));
  const winners = LETTERS.filter(L => S.counts[L] === max);

  if (S.total === 0){
    resultEl.innerHTML = 'Sin votos 😶';
  } else if (winners.length > 1){
    winners.forEach(L => cardOf(L).classList.add('winner'));
    LETTERS.filter(L => winners.indexOf(L) === -1).forEach(L => cardOf(L).classList.add('dim'));
    resultEl.innerHTML = '¡EMPATE! → ' + winners.join(' / ');
  } else {
    const L = winners[0];
    const opt = S.options.find(o => o.letter === L);
    cardOf(L).classList.add('winner');
    LETTERS.filter(x => x !== L).forEach(x => cardOf(x).classList.add('dim'));
    resultEl.innerHTML = 'GANADOR: <span class="g">' + L + ') ' + (opt ? opt.name : '') + '</span> 🩸';
  }
  resultEl.classList.add('on');
  rollBtn.disabled = false;
}

function resetResults(){
  resultEl.classList.remove('on'); resultEl.innerHTML = '';
  [...cardsEl.children].forEach(c => c.classList.remove('winner','dim','results','voting'));
  voteCountEl.textContent = '';
}

/* ───────────────── chat panel ───────────────── */
function esc(s){ return (s||'').replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c])); }
function renderChat(name, color, text, counted){
  const m = document.createElement('div');
  m.className = 'vk-msg' + (counted ? ' vote' : '');
  m.innerHTML = '<b style="color:' + (color || '#FF2D9A') + '">' + esc(name) + '</b> ' + esc(text) +
                (counted ? '<span class="vk-badge">✓ ' + counted + '</span>' : '');
  chatBox.appendChild(m);
  while (chatBox.children.length > 40) chatBox.removeChild(chatBox.firstChild);
  chatBox.scrollTop = chatBox.scrollHeight;
}

/* entrada unificada de chat */
function onChat(d){
  const counted = registerVote(d.userId, d.text);
  renderChat(d.name, d.color, d.text, counted);
}

/* ───────────────── Twitch IRC anónimo (#bloodsitax) ───────────────── */
function parseIRC(line){
  let tags = {}, i = 0;
  if (line[0] === '@'){
    const end = line.indexOf(' ');
    line.slice(1, end).split(';').forEach(p => { const eq = p.indexOf('='); if (eq >= 0) tags[p.slice(0,eq)] = p.slice(eq+1); });
    i = end + 1;
  }
  const rest = line.slice(i);
  let nick = '';
  if (rest[0] === ':'){ const ex = rest.indexOf('!'); nick = ex > 0 ? rest.slice(1, ex) : ''; }
  const pm = rest.indexOf('PRIVMSG');
  if (pm < 0) return null;
  const colon = rest.indexOf(':', pm);
  return { tags, nick, text: colon >= 0 ? rest.slice(colon + 1) : '' };
}

function connectTwitch(){
  if (S.connected || S.socket) return;
  let ws;
  try { ws = new WebSocket('wss://irc-ws.chat.twitch.tv:443'); }
  catch(e){ return; }
  S.socket = ws;

  ws.onopen = () => {
    ws.send('CAP REQ :twitch.tv/tags twitch.tv/commands');
    ws.send('PASS SCHMOOPIIE');
    ws.send('NICK justinfan' + Math.floor(Math.random() * 99999));
    ws.send('JOIN #' + CHANNEL);
    S.connected = true;
    dotEl.classList.add('ready');
  };
  ws.onmessage = (ev) => {
    ev.data.split('\r\n').forEach(line => {
      if (!line) return;
      if (line.indexOf('PING') === 0){ ws.send('PONG :tmi.twitch.tv'); return; }
      if (line.indexOf('PRIVMSG') !== -1){
        const p = parseIRC(line);
        if (!p) return;
        onChat({
          userId: p.tags['user-id'] || p.nick,
          name:   p.tags['display-name'] || p.nick || '?',
          color:  p.tags['color'] || null,
          text:   p.text
        });
      }
    });
  };
  ws.onclose = () => { S.connected = false; S.socket = null; dotEl.classList.remove('ready'); setTimeout(connectTwitch, 3000); };
  ws.onerror = () => { try { ws.close(); } catch(e){} };
}

/* ───────────────── activación perezosa (al abrir la pestaña) ───────────────── */
function activate(){
  preload();        // imágenes en background
  connectTwitch();  // conectar el chat la primera vez
}
let activated = false;
function maybeActivate(){ if (!activated){ activated = true; activate(); } }

document.querySelectorAll('[data-tab="votacion"],[data-goto="votacion"]').forEach(el =>
  el.addEventListener('click', maybeActivate)
);

/* ───────────────── controles ───────────────── */
buildCards();
rollBtn.addEventListener('click', roll);
voteBtn.addEventListener('click', startVoting);

/* atajos de teclado (solo si la pestaña Votación está activa y no estás escribiendo) */
window.addEventListener('keydown', e => {
  const sec = document.getElementById('votacion');
  if (!sec || !sec.classList.contains('active')) return;
  const tag = (document.activeElement && document.activeElement.tagName) || '';
  if (tag === 'INPUT' || tag === 'TEXTAREA') return;
  if (e.key === 'r' || e.key === 'R') roll();
  if (e.key === 'v' || e.key === 'V') startVoting();
  if (VK_TEST && (e.key === 't' || e.key === 'T')) toggleSim();
});

/* ───────────────── simulador (solo pruebas; VK_TEST=true) ───────────────── */
let fake = 0;
const fakeNames = ['Mika_x3','DarkPetal','sakura_gg','NeoVortex','gabo123','luz_neon','hookMain','gen_rusher'];
const fakeCols  = ['#ff7bd5','#9b8cff','#7be0ff','#ffd24a','#ff5b8a','#8affc1'];
function toggleSim(){
  if (!S.voting) return;
  if (S.testId){ clearInterval(S.testId); S.testId = null; return; }
  S.testId = setInterval(() => {
    const pool = ['A','B','C','D','A','B','hola','C','xd','D'];
    onChat({
      userId: 'fake_' + (fake++),
      name: fakeNames[Math.floor(Math.random()*fakeNames.length)] + (Math.random()<.4?Math.floor(Math.random()*99):''),
      color: fakeCols[Math.floor(Math.random()*fakeCols.length)],
      text: pool[Math.floor(Math.random()*pool.length)]
    });
  }, 180);
}

})();
