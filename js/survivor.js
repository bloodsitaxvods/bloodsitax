/* ============================================================
   BLOODSITAX — survivor.js
   Randomizer de Survivors + Perks (Dead by Daylight)
   ============================================================ */
(function () {
'use strict';

const PLACEHOLDER = 'interrogacion.png';

const PERK_FILES = [
  'a-place-for-us.png','ace-in-the-hole.png','adrenaline.png','aftercare.png',
  'alert.png','any-means-necessary.png','apocalyptic-ingenuity.png','appraisal.png',
  'autodidact.png','babysitter.png','background-player.png','bada-bada-boom.png',
  'balanced-landing.png','bardic-inspiration.png','better-than-new.png','better-together.png',
  'bite-the-bullet.png','blast-mine.png','blood-pact.png','blood-rush.png',
  'boil-over.png','bond.png','boon-circle-of-healing.png','boon-dark-theory.png',
  'boon-exponential.png','boon-illumination.png','boon-shadow-step.png','borrowed-time.png',
  'botany-knowledge.png','breakdown.png','breakout.png','buckle-up.png',
  'built-to-last.png','calm-spirit.png','camaraderie.png','champion-of-light.png',
  'change-of-plan.png','chemical-trap.png','clairvoyance.png','clean-break.png',
  'come-and-get-me.png','conviction.png','corrective-action.png','counterforce.png',
  'cut-loose.png','dance-with-me.png','dark-sense.png','dead-hard.png',
  'deadline.png','deception.png','decisive-strike.png','deja-vu.png',
  'deliverance.png','desperate-measures.png','detectives-hunch.png','distortion.png',
  'diversion.png','do-no-harm.png','dramaturgy.png','duty-of-care.png',
  'empathic-connection.png','empathy.png','extrasensory-perception.png','exultation.png',
  'eyes-of-belmont.png','fast-track.png','finesse.png','five-moves-ahead.png',
  'fixated.png','flashbang.png','flip-flop.png','flow-state.png',
  'fogwise.png','for-the-people.png','friendly-competition.png','ghost-notes.png',
  'hardened.png','head-on.png','hope.png','hyperfocus.png',
  'inner-strength.png','invocation-treacherous-crows.png','invocation-weaving-spiders.png','iron-will.png',
  'kindred.png','last-stand.png','leader.png','left-behind.png',
  'light-footed.png','lightweight.png','lithe.png','low-profile.png',
  'lucky-break.png','lucky-star.png','made-for-this.png','mettle-of-man.png',
  'mirrored-illusion.png','moment-of-glory.png','no-mither.png','no-one-left-behind.png',
  'object-of-obsession.png','off-the-record.png','one-two-three-four.png','open-handed.png',
  'overcome.png','overzealous.png','parental-guidance.png','pharmacy.png',
  'plot-twist.png','plunderers-instinct.png','poised.png','potential-energy.png',
  'power-struggle.png','premonition.png','prove-thyself.png','quick-gambit.png',
  'quick-quiet.png','rapid-response.png','reactive-healing.png','reassurance.png',
  'red-herring.png','repressed-alliance.png','residual-manifest.png','resilience.png',
  'resurgence.png','road-life.png','rookie-spirit.png','saboteur.png',
  'scavenger.png','scene-partner.png','second-wind.png','self-care.png',
  'self-preservation.png','shoulder-the-burden.png','slippery-meat.png','small-game.png',
  'smash-hit.png','sole-survivor.png','solidarity.png','soul-guard.png',
  'specialist.png','spine-chill.png','sprint-burst.png','stake-out.png',
  'still-sight.png','streetwise.png','strength-in-shadows.png','superior-anatomy.png',
  'teamwork-collective-stealth.png','teamwork-full-circuit.png','teamwork-power-of-two.png','teamwork-soft-spoken.png',
  'teamwork-throw-down.png','teamwork-toughen-up.png','technician.png','tenacity.png',
  'this-is-not-happening.png','troubleshooter.png','unbreakable.png','up-the-ante.png',
  'urban-evasion.png','vigil.png','visionary.png','wake-up.png',
  'we-see-you.png','well-make-it.png','were-gonna-live-forever.png','wicked.png',
  'windows-of-opportunity.png','wiretap.png'
];

const perks = PERK_FILES.map(f => ({
  name: f.replace('.png','').replace(/-/g,' '),
  img : 'perks%20survis/' + f
}));

const survivors = [
  {name:'Ace Visconti',       img:'imagenes_survis/AceVisconti.png'},
  {name:'Adam Francis',       img:'imagenes_survis/AdamFrancis.png'},
  {name:'Ada Wong',           img:'imagenes_survis/AdaWong.png'},
  {name:'Alan Wake',          img:'imagenes_survis/AlanWake.png'},
  {name:'Ash Williams',       img:'imagenes_survis/AshWilliams.png'},
  {name:'Bill Overbeck',      img:'imagenes_survis/BillOverbeck.png'},
  {name:'Cheryl Mason',       img:'imagenes_survis/CherylMason.png'},
  {name:'Claudette Morel',    img:'imagenes_survis/ClaudetteMorel.png'},
  {name:'David King',         img:'imagenes_survis/DavidKing.png'},
  {name:'David Tapp',         img:'imagenes_survis/DavidTapp.png'},
  {name:'Dustin Henderson',   img:'imagenes_survis/DustinHenderson.png'},
  {name:'Dwight Fairfield',   img:'imagenes_survis/DwightFairfield.png'},
  {name:'Eleven',             img:'imagenes_survis/Eleven.png'},
  {name:'Ellen Ripley',       img:'imagenes_survis/EllenRipley.png'},
  {name:'Elodie Rakoto',      img:'imagenes_survis/ElodieRakoto.png'},
  {name:'Felix Richter',      img:'imagenes_survis/FelixRichter.png'},
  {name:'Feng Min',           img:'imagenes_survis/FengMin.png'},
  {name:'Gabriel Soma',       img:'imagenes_survis/GabrielSoma.png'},
  {name:'Haddie Kaur',        img:'imagenes_survis/HaddieKaur.png'},
  {name:'Jake Park',          img:'imagenes_survis/JakePark.png'},
  {name:'Jane Romero',        img:'imagenes_survis/JaneRomero.png'},
  {name:'Jeff Johansen',      img:'imagenes_survis/JeffJohansen.png'},
  {name:'Jill Valentine',     img:'imagenes_survis/JillValentine.png'},
  {name:'Jonah Vasquez',      img:'imagenes_survis/JonahVasquez.png'},
  {name:'Kate Denson',        img:'imagenes_survis/KateDenson.png'},
  {name:"Kwon Tae-young",     img:'imagenes_survis/KwonTae-young.png'},
  {name:'Lara Croft',         img:'imagenes_survis/LaraCroft.png'},
  {name:'Laurie Strode',      img:'imagenes_survis/LaurieStrode.png'},
  {name:'Leon Scott Kennedy', img:'imagenes_survis/LeonScottKennedy.png'},
  {name:'Meg Thomas',         img:'imagenes_survis/MegThomas.png'},
  {name:'Michonne Grimes',    img:'imagenes_survis/MichonneGrimes.png'},
  {name:'Mikaela Reid',       img:'imagenes_survis/MikaelaReid.png'},
  {name:'Nancy Wheeler',      img:'imagenes_survis/NancyWheeler.png'},
  {name:'Nea Karlsson',       img:'imagenes_survis/NeaKarlsson.png'},
  {name:'Nicolas Cage',       img:'imagenes_survis/NicolasCage.png'},
  {name:'Orela Rose',         img:'imagenes_survis/OrelaRose.png'},
  {name:'Quentin Smith',      img:'imagenes_survis/QuentinSmith.png'},
  {name:'Rebecca Chambers',   img:'imagenes_survis/RebeccaChambers.png'},
  {name:'Renato Lyra',        img:'imagenes_survis/RenatoLyra.png'},
  {name:'Rick Grimes',        img:'imagenes_survis/RickGrimes.png'},
  {name:'Lee Yun-jin',        img:'imagenes_survis/LeeYun-jin.png'},
  {name:'Sable Ward',         img:'imagenes_survis/SableWard.png'},
  {name:'Steve Harrington',   img:'imagenes_survis/SteveHarrington.png'},
  {name:'Taurie Cain',        img:'imagenes_survis/TaurieCain.png'},
  {name:'Thalita Lyra',       img:'imagenes_survis/ThalitaLyra.png'},
  {name:'The Troupe',         img:'imagenes_survis/TheTroupe.png'},
  {name:'Trevor Belmont',     img:'imagenes_survis/TrevorBelmont.png'},
  {name:'Vee Boonyasak',      img:'imagenes_survis/VeeBoonyasak.png'},
  {name:'Vittorio Toscano',   img:'imagenes_survis/VittorioToscano.png'},
  {name:'Yoichi Asakawa',     img:'imagenes_survis/YoichiAsakawa.png'},
  {name:'Yui Kimura',         img:'imagenes_survis/YuiKimura.png'},
  {name:'Zarina Kassir',      img:'imagenes_survis/ZarinaKassir.png'},
];

/* DOM refs */
const $s = id => document.getElementById(id);
const perkImgEls     = [$s('sPerk1'),$s('sPerk2'),$s('sPerk3'),$s('sPerk4')];
const perkListEls    = [$s('sName1'),$s('sName2'),$s('sName3'),$s('sName4')];
const survivorImgEl  = $s('survivorImg');
const survivorNameEl = $s('survivorName');
const burstEl        = $s('survBurst');
const spinBtn        = $s('survSpinBtn');
const loadWrap       = $s('survLoadWrap');
const loadFill       = $s('survLoadFill');

/* Timing */
const PERK_STOPS   = [3000,4000,5000,6000];
const SURV_STOP    = 6600;
const SLOWDOWN_WIN = 1400;
const BASE_PERK_MS = 50;
const BASE_SURV_MS = 65;
const MAX_MS       = 320;

/* State */
const mkSlot = () => ({lastSwap:0, locked:false, final:null});
let state = {
  spinning:false, rafId:null, startTs:null,
  perkSlots:[mkSlot(),mkSlot(),mkSlot(),mkSlot()],
  survivorSlot:mkSlot(), lockedPerks:[],
};

/* Helpers */
const rand   = arr => arr[Math.floor(Math.random()*arr.length)];
const setImg = (el, src) => { el.style.backgroundImage = `url(${src})`; };

function cycleInterval(elapsed, stopTime, baseMs) {
  const rem = stopTime - elapsed;
  if (rem <= 0)           return Infinity;
  if (rem > SLOWDOWN_WIN) return baseMs;
  const t = 1 - rem / SLOWDOWN_WIN;
  return baseMs + (MAX_MS - baseMs) * t * t;
}

function lockPerk(i) {
  const used  = state.lockedPerks.map(p => p.img);
  const avail = perks.filter(p => !used.includes(p.img));
  const final = rand(avail);
  state.perkSlots[i].locked = true;
  state.perkSlots[i].final  = final;
  state.lockedPerks.push(final);
  setImg(perkImgEls[i], final.img);
  perkListEls[i].textContent = final.name;
  const slot = perkImgEls[i].closest('.perk-slot');
  slot.classList.add('perk-locked');
  setTimeout(() => slot.classList.remove('perk-locked'), 700);
}

function lockSurvivor() {
  const final = rand(survivors);
  state.survivorSlot.locked = true;
  state.survivorSlot.final  = final;
  setImg(survivorImgEl, final.img);
  survivorImgEl.classList.remove('rolling');
  survivorImgEl.classList.add('landed');
  survivorNameEl.textContent = final.name;
  setTimeout(() => survivorImgEl.classList.remove('landed'), 650);
}

function loop(ts) {
  if (!state.startTs) state.startTs = ts;
  const elapsed = ts - state.startTs;
  for (let i = 0; i < 4; i++) {
    const slot = state.perkSlots[i];
    if (slot.locked) continue;
    if (elapsed >= PERK_STOPS[i]) { lockPerk(i); continue; }
    const interval = cycleInterval(elapsed, PERK_STOPS[i], BASE_PERK_MS);
    if (ts - slot.lastSwap >= interval) { setImg(perkImgEls[i], rand(perks).img); slot.lastSwap = ts; }
  }
  const sSlot = state.survivorSlot;
  if (!sSlot.locked) {
    if (elapsed >= SURV_STOP) { lockSurvivor(); }
    else {
      const interval = cycleInterval(elapsed, SURV_STOP, BASE_SURV_MS);
      if (ts - sSlot.lastSwap >= interval) { setImg(survivorImgEl, rand(survivors).img); sSlot.lastSwap = ts; }
    }
  }
  const allDone = state.perkSlots.every(s => s.locked) && state.survivorSlot.locked;
  if (allDone) finishSpin();
  else state.rafId = requestAnimationFrame(loop);
}

function finishSpin() {
  launchBurst();
  state.spinning = false;
  spinBtn.disabled = false;
  spinBtn.classList.remove('btn--spinning');
  spinBtn.textContent = 'RANDOM PERKS & SURVIVOR';
}

function spin() {
  if (state.spinning) return;
  state.spinning = true;
  spinBtn.disabled = true;
  spinBtn.classList.add('btn--spinning');
  spinBtn.textContent = 'GIRANDO...';
  survivorNameEl.textContent = '???';
  survivorImgEl.classList.remove('landed');
  survivorImgEl.classList.add('rolling');
  for (let i = 0; i < 4; i++) {
    perkListEls[i].textContent = '—';
    perkImgEls[i].closest('.perk-slot').classList.remove('perk-locked');
  }
  state.startTs      = null;
  state.lockedPerks  = [];
  state.perkSlots    = [mkSlot(),mkSlot(),mkSlot(),mkSlot()];
  state.survivorSlot = mkSlot();
  if (state.rafId) cancelAnimationFrame(state.rafId);
  state.rafId = requestAnimationFrame(loop);
}

/* Burst */
const BURST_SYM  = ['♥','★','✦','✧','♡','✶'];
const BURST_COLS = ['#FF2D9A','#FF007F','#ffffff','#FFC1E1','#FF69B4','#D4006A'];
function launchBurst() {
  burstEl.innerHTML = '';
  const frag = document.createDocumentFragment();
  for (let i = 0; i < 80; i++) {
    const p = document.createElement('span');
    const angle = Math.random()*Math.PI*2;
    const dist  = 130+Math.random()*370;
    p.className = 'surv-burst-particle';
    p.textContent = BURST_SYM[Math.floor(Math.random()*BURST_SYM.length)];
    p.style.cssText =
      `color:${BURST_COLS[Math.floor(Math.random()*BURST_COLS.length)]};`+
      `font-size:${10+Math.random()*20}px;`+
      `--tx:${Math.cos(angle)*dist}px;--ty:${Math.sin(angle)*dist}px;`+
      `--rot:${(Math.random()-.5)*720}deg;`+
      `--dur:${.85+Math.random()*.85}s;`+
      `--sf:${.3+Math.random()*.5};`+
      `--del:${Math.random()*.45}s;`;
    frag.appendChild(p);
  }
  burstEl.appendChild(frag);
  setTimeout(() => { burstEl.innerHTML=''; }, 2600);
}

/* Preload */
function preloadBatch(srcs, onProgress) {
  let done = 0;
  return Promise.allSettled(srcs.map(src => new Promise(resolve => {
    const img = new Image();
    img.onload = img.onerror = () => { onProgress(++done/srcs.length); resolve(); };
    img.src = src;
  })));
}

(async function init() {
  loadWrap.style.display = 'block';
  await preloadBatch(
    [PLACEHOLDER, ...survivors.map(s => s.img)],
    pct => { loadFill.style.width = (pct*65)+'%'; }
  );
  perkImgEls.forEach(el => setImg(el, PLACEHOLDER));
  setImg(survivorImgEl, PLACEHOLDER);
  spinBtn.disabled = false;
  spinBtn.textContent = 'RANDOM PERKS & SURVIVOR';
  spinBtn.addEventListener('click', spin, {passive:true});
  preloadBatch(
    perks.map(p => p.img),
    pct => { loadFill.style.width = (65+pct*35)+'%'; }
  ).then(() => { loadWrap.style.display = 'none'; });
}());

})();
