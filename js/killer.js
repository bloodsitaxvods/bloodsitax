/* ============================================================
   BLOODSITAX — killer.js
   Randomizer de Killers + Perks (Dead by Daylight)
   ============================================================ */
'use strict';

/* ══════════════════════════════════════════════════
   DATA  — killers + perks con rutas de imagen reales
══════════════════════════════════════════════════ */
const PLACEHOLDER = 'interrogacion.png';

const PERK_FILES = [
  'agitation.png','alien-instinct.png','all-shaking-thunder.png','a-nurses-calling.png',
  'awakened-awareness.png','bamboozle.png','barbecue-chili.png','batteries-included.png',
  'beast-of-prey.png','bitter-murmur.png','blood-echo.png','bloodhound.png',
  'blood-warden.png','brutal-strength.png','call-of-brine.png','corrupt-intervention.png',
  'coulrophobia.png','coup-de-grace.png','cruel-limits.png','dark-arrogance.png',
  'dark-devotion.png','darkness-revealed.png','deadlock.png','dead-mans-switch.png',
  'deathbound.png','deerstalker.png','discordance.png','dissolution.png',
  'distressing.png','dominance.png','dragons-grip.png','dying-light.png',
  'enduring.png','eruption.png','fire-up.png','forced-hesitation.png',
  'forced-penance.png','forever-entwined.png','franklins-demise.png','friends-til-the-end.png',
  'furtive-chase.png','game-afoot.png','gearhead.png','genetic-limits.png',
  'grim-embrace.png','haywire.png','help-wanted.png','hex-blood-favor.png',
  'hex-crowd-control.png','hex-devour-hope.png','hex-face-the-darkness.png','hex-haunted-ground.png',
  'hex-hive-mind.png','hex-huntress-lullaby.png','hex-no-one-escapes-death.png','hex-nothing-but-misery.png',
  'hex-overture-of-doom.png','hex-pentimento.png','hex-plaything.png','hex-retribution.png',
  'hex-ruin.png','hex-the-third-seal.png','hex-thrill-of-the-hunt.png','hex-two-can-play.png',
  'hex-undying.png','hex-wretched-fate.png','hoarder.png','hubris.png',
  'human-greed.png','hysteria.png','im-all-ears.png','infectious-fright.png',
  'inner-focus.png','insidious.png','iron-grasp.png','iron-maiden.png',
  'knock-out.png','languid-touch.png','lethal-pursuer.png','leverage.png',
  'lightborn.png','machine-learning.png','mad-grit.png','make-your-choice.png',
  'merciless-storm.png','mindbreaker.png','monitor-abuse.png','nemesis.png',
  'none-are-free.png','no-quarter.png','no-way-out.png','nowhere-to-hide.png',
  'oppression.png','overcharge.png','overwhelming-presence.png','phantom-fear.png',
  'play-with-your-food.png','pop-goes-the-weasel.png','predator.png','rancor.png',
  'rapid-brutality.png','ravenous.png','remember-me.png','save-the-best-for-last.png',
  'scourge-hook-floods-of-rage.png','scourge-hook-gift-of-pain.png','scourge-hook-hangmans-trick.png',
  'scourge-hook-jagged-compass.png','scourge-hook-monstrous-shrine.png','scourge-hook-pain-resonance.png',
  'secret-project.png','septic-touch.png','shadowborn.png','shattered-hope.png',
  'sloppy-butcher.png','spies-from-the-shadows.png','spirit-fury.png','starstruck.png',
  'stridor.png','surge.png','surveillance.png','terminus.png',
  'territorial-imperative.png','thanatophobia.png','thrilling-tremors.png','thwack.png',
  'tinkerer.png','trail-of-torment.png','turn-back-the-clock.png','ultimate-weapon.png',
  'unbound.png','undone.png','unforeseen.png','unnerving-presence.png',
  'unrelenting.png','wandering-eye.png','weave-attunement.png','whispers.png',
  'zanshin-tactics.png'
];

/* Build perk objects — nombre auto-formateado desde el filename */
const killerPerks = PERK_FILES.map(f => ({
  name: f.replace('.png','').replace(/-/g,' ').replace(/\b\w/g, c => c.toUpperCase()),
  img : 'perks%20killer/' + f
}));

const killers = [
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

/* ══════════════════════════════════════════════════
   DOM REFS
══════════════════════════════════════════════════ */
const $k = id => document.getElementById(id);
const perkImgEls  = [$k('killerPerk1'),$k('killerPerk2'),$k('killerPerk3'),$k('killerPerk4')];
const perkMiniEls = [$k('killerPerkName1'),$k('killerPerkName2'),$k('killerPerkName3'),$k('killerPerkName4')];
const perkListEls = [$k('perkListName1'),$k('perkListName2'),$k('perkListName3'),$k('perkListName4')];
const killerImgEl  = $k('killerImg');
const killerNameEl = $k('killerName');
const burstEl      = $k('killerBurst');
const spinBtn      = $k('killerSpinBtn');
const banner       = $k('resultBanner');
const loadWrap     = $k('loadWrap');
const loadFill     = $k('loadFill');

/* ══════════════════════════════════════════════════
   TIMING CONFIG (milisegundos)
══════════════════════════════════════════════════ */
const PERK_STOPS   = [3000, 4000, 5000, 6000];
const KILLER_STOP  = 6600;
const SLOWDOWN_WIN = 1400;
const BASE_PERK_MS = 55;
const BASE_KILL_MS = 68;
const MAX_MS       = 320;

/* ══════════════════════════════════════════════════
   SPIN STATE
══════════════════════════════════════════════════ */
const mkSlot = () => ({lastSwap:0, locked:false, final:null});
let state = {
  spinning: false, rafId: null, startTs: null,
  perkSlots: [mkSlot(), mkSlot(), mkSlot(), mkSlot()],
  killerSlot: mkSlot(), usedPerks: [],
};

/* ══════════════════════════════════════════════════
   HELPERS
══════════════════════════════════════════════════ */
const rnd    = arr => arr[Math.floor(Math.random() * arr.length)];
const setImg = (el, src) => { el.style.backgroundImage = `url(${src})`; };

function swapInterval(elapsed, stopTime, baseMs) {
  const rem = stopTime - elapsed;
  if (rem <= 0) return Infinity;
  if (rem > SLOWDOWN_WIN) return baseMs;
  const t = 1 - rem / SLOWDOWN_WIN;
  return baseMs + (MAX_MS - baseMs) * t * t;
}

/* ══════════════════════════════════════════════════
   LOCK PERK
══════════════════════════════════════════════════ */
function lockPerk(i) {
  const usedImgs = state.usedPerks.map(p => p.img);
  const pool     = killerPerks.filter(p => !usedImgs.includes(p.img));
  const final    = rnd(pool);

  state.perkSlots[i].locked = true;
  state.perkSlots[i].final  = final;
  state.usedPerks.push(final);

  setImg(perkImgEls[i], final.img);
  perkMiniEls[i].textContent = final.name;
  perkListEls[i].textContent = final.name;
  perkListEls[i].classList.add('lit');

  const wrap = perkImgEls[i].closest('.killer-perk');
  wrap.classList.add('killer-perk-locked');
  setTimeout(() => wrap.classList.remove('killer-perk-locked'), 700);
}

/* ══════════════════════════════════════════════════
   LOCK KILLER
══════════════════════════════════════════════════ */
function lockKiller() {
  const final = rnd(killers);
  state.killerSlot.locked = true;
  state.killerSlot.final  = final;

  setImg(killerImgEl, final.img);
  killerImgEl.classList.remove('killer-rolling');
  killerImgEl.classList.add('killer-landed');
  killerNameEl.textContent = final.name;
  setTimeout(() => killerImgEl.classList.remove('killer-landed'), 650);
}

/* ══════════════════════════════════════════════════
   RAF SPIN LOOP
══════════════════════════════════════════════════ */
function loop(ts) {
  if (!state.startTs) state.startTs = ts;
  const elapsed = ts - state.startTs;

  for (let i = 0; i < 4; i++) {
    const s = state.perkSlots[i];
    if (s.locked) continue;
    if (elapsed >= PERK_STOPS[i]) { lockPerk(i); continue; }
    const ms = swapInterval(elapsed, PERK_STOPS[i], BASE_PERK_MS);
    if (ts - s.lastSwap >= ms) { setImg(perkImgEls[i], rnd(killerPerks).img); s.lastSwap = ts; }
  }

  const ks = state.killerSlot;
  if (!ks.locked) {
    if (elapsed >= KILLER_STOP) { lockKiller(); }
    else {
      const ms = swapInterval(elapsed, KILLER_STOP, BASE_KILL_MS);
      if (ts - ks.lastSwap >= ms) { setImg(killerImgEl, rnd(killers).img); ks.lastSwap = ts; }
    }
  }

  if (state.perkSlots.every(s => s.locked) && state.killerSlot.locked) finish();
  else state.rafId = requestAnimationFrame(loop);
}

/* ══════════════════════════════════════════════════
   FINISH
══════════════════════════════════════════════════ */
function finish() {
  launchBurst();
  state.spinning = false;
  spinBtn.disabled = false;
  spinBtn.textContent = '🔪  KILLER Y PERKS RANDOMS  🔪';
  setTimeout(() => banner.classList.add('vis'), 450);
}

/* ══════════════════════════════════════════════════
   SPIN ENTRY POINT
══════════════════════════════════════════════════ */
function killerSpin() {
  if (state.spinning) return;
  state.spinning = true;
  banner.classList.remove('vis');

  spinBtn.disabled = true;
  spinBtn.textContent = '⚡  GIRANDO...  ⚡';

  killerNameEl.textContent = '???';
  killerImgEl.classList.remove('killer-landed');
  killerImgEl.classList.add('killer-rolling');
  setImg(killerImgEl, PLACEHOLDER);

  for (let i = 0; i < 4; i++) {
    perkMiniEls[i].textContent = '';
    perkListEls[i].textContent = '—';
    perkListEls[i].classList.remove('lit');
    perkImgEls[i].closest('.killer-perk').classList.remove('killer-perk-locked');
    setImg(perkImgEls[i], PLACEHOLDER);
  }

  state.startTs    = null;
  state.usedPerks  = [];
  state.perkSlots  = [mkSlot(), mkSlot(), mkSlot(), mkSlot()];
  state.killerSlot = mkSlot();

  if (state.rafId) cancelAnimationFrame(state.rafId);
  state.rafId = requestAnimationFrame(loop);
}

/* ══════════════════════════════════════════════════
   CELEBRATION BURST
══════════════════════════════════════════════════ */
const BURST_SYM  = ['💀','🩸','✦','★','✧','✶'];
const BURST_COLS = ['#ff3c3c','#ff6b6b','#ffffff','#ff9999','#FF2D9A','#ffe0e0'];

function launchBurst() {
  burstEl.innerHTML = '';
  const frag = document.createDocumentFragment();
  for (let i = 0; i < 80; i++) {
    const p     = document.createElement('span');
    const angle = Math.random() * Math.PI * 2;
    const dist  = 130 + Math.random() * 370;
    p.className = 'killer-burst-particle';
    p.textContent = BURST_SYM[Math.floor(Math.random() * BURST_SYM.length)];
    p.style.cssText =
      `color:${BURST_COLS[Math.floor(Math.random()*BURST_COLS.length)]};` +
      `font-size:${10+Math.random()*20}px;` +
      `--tx:${Math.cos(angle)*dist}px;--ty:${Math.sin(angle)*dist}px;` +
      `--rot:${(Math.random()-.5)*720}deg;` +
      `--dur:${.85+Math.random()*.85}s;` +
      `--sf:${.3+Math.random()*.5};` +
      `animation-delay:${Math.random()*.45}s;`;
    frag.appendChild(p);
  }
  burstEl.appendChild(frag);
  setTimeout(() => { burstEl.innerHTML = ''; }, 2600);
}

/* ══════════════════════════════════════════════════
   PRELOAD
   Fase 1: killers (crítico, habilita el botón)
   Fase 2: perks (en background, no bloquea)
══════════════════════════════════════════════════ */
function preloadBatch(srcs, onProgress) {
  let done = 0;
  return Promise.allSettled(srcs.map(src => new Promise(resolve => {
    const img = new Image();
    img.onload = img.onerror = () => { onProgress(++done / srcs.length); resolve(); };
    img.src = src;
  })));
}

(async function init() {
  loadWrap.style.display = 'block';

  await preloadBatch(
    [PLACEHOLDER, ...killers.map(k => k.img)],
    pct => { loadFill.style.width = (pct * 65) + '%'; }
  );

  perkImgEls.forEach(el => setImg(el, PLACEHOLDER));
  setImg(killerImgEl, PLACEHOLDER);

  spinBtn.disabled = false;
  spinBtn.classList.remove('loading');
  spinBtn.textContent = 'KILLER Y PERKS RANDOMS';
  spinBtn.addEventListener('click', killerSpin, {passive: true});

  preloadBatch(
    killerPerks.map(p => p.img),
    pct => { loadFill.style.width = (65 + pct * 35) + '%'; }
  ).then(() => { loadWrap.style.display = 'none'; });
}());
