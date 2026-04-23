/* ============================================================
   BLOODSITAX — main.js
   Tab switching + Sakura petals + Logo flicker
   ============================================================ */

// ===== TAB SWITCHING =====
const tabs     = document.querySelectorAll('.tab');
const sections = document.querySelectorAll('.section');
const bigBtns  = document.querySelectorAll('.big-btn');

function showTab(name) {
  tabs.forEach(t => t.classList.toggle('active', t.dataset.tab === name));
  sections.forEach(s => s.classList.toggle('active', s.id === name));
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

tabs.forEach(tab => tab.addEventListener('click', () => showTab(tab.dataset.tab)));
bigBtns.forEach(btn => btn.addEventListener('click', () => showTab(btn.dataset.goto)));

// ===== SAKURA PETAL ANIMATION =====
const canvas = document.getElementById('sakura-canvas');
const ctx    = canvas.getContext('2d');

function resize() {
  canvas.width  = window.innerWidth;
  canvas.height = window.innerHeight;
}
resize();
window.addEventListener('resize', resize);

class Petal {
  constructor(init) { this.reset(init); }

  reset(init) {
    this.x        = Math.random() * canvas.width;
    this.y        = init ? Math.random() * canvas.height : -30 - Math.random() * 120;
    this.size     = Math.random() * 7 + 4;
    this.speedY   = Math.random() * 1.2 + 0.4;
    this.speedX   = (Math.random() - 0.5) * 0.6;
    this.rotation = Math.random() * Math.PI * 2;
    this.rotSpeed = (Math.random() - 0.5) * 0.025;
    this.opacity  = Math.random() * 0.55 + 0.35;
    this.sway     = Math.random() * 1.8 + 0.4;
    this.swayOffset = Math.random() * Math.PI * 2;
    const palette = ['#FF2D9A', '#FF69B4', '#FFC1E1', '#FF1A8C'];
    this.color = palette[Math.floor(Math.random() * palette.length)];
  }

  update() {
    this.y += this.speedY;
    this.x += this.speedX + Math.sin((this.y + this.swayOffset) * 0.01) * this.sway * 0.25;
    this.rotation += this.rotSpeed;
    if (this.y > canvas.height + 30) this.reset(false);
  }

  draw() {
    ctx.save();
    ctx.translate(this.x, this.y);
    ctx.rotate(this.rotation);
    ctx.globalAlpha  = this.opacity;
    ctx.fillStyle    = this.color;
    ctx.shadowColor  = this.color;
    ctx.shadowBlur   = 12;

    ctx.beginPath();
    ctx.moveTo(0, -this.size);
    ctx.bezierCurveTo(
       this.size * 0.85, -this.size * 0.4,
       this.size * 0.5,   this.size * 0.9,
       0,                 this.size
    );
    ctx.bezierCurveTo(
      -this.size * 0.5,   this.size * 0.9,
      -this.size * 0.85, -this.size * 0.4,
       0,                -this.size
    );
    ctx.fill();
    ctx.restore();
  }
}

const petalCount = window.innerWidth < 768 ? 35 : 65;
const petals = Array.from({ length: petalCount }, () => new Petal(true));

function animate() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  petals.forEach(p => { p.update(); p.draw(); });
  requestAnimationFrame(animate);
}
animate();

// ===== NEON LETTER FLICKER =====
const neonLetters = document.querySelectorAll('#logo span');

neonLetters.forEach(l => {
  l.style.animationDelay = (-Math.random() * 3).toFixed(2) + 's';
});

let offCount = 0;
const MAX_OFF = 2;
const wait = ms => new Promise(r => setTimeout(r, ms));

async function failLetter(el) {
  if (el.dataset.failing === '1' || offCount >= MAX_OFF) return;
  el.dataset.failing = '1';
  offCount++;

  el.classList.add('off');
  await wait(70 + Math.random() * 50);
  el.classList.remove('off');
  await wait(40 + Math.random() * 50);
  el.classList.add('off');
  await wait(110 + Math.random() * 90);
  el.classList.remove('off');
  await wait(30 + Math.random() * 50);
  el.classList.add('off');

  await wait(500 + Math.random() * 1800);

  el.classList.remove('off');
  await wait(40 + Math.random() * 50);
  el.classList.add('off');
  await wait(60 + Math.random() * 70);
  el.classList.remove('off');
  await wait(25 + Math.random() * 40);
  el.classList.add('off');
  await wait(50 + Math.random() * 60);
  el.classList.remove('off');

  offCount--;
  el.dataset.failing = '0';
}

(function scheduleFlicker() {
  const delay = 500 + Math.random() * 2800;
  setTimeout(() => {
    if (offCount < MAX_OFF) {
      const candidates = [...neonLetters].filter(l => l.dataset.failing !== '1');
      if (candidates.length > 0) {
        failLetter(candidates[Math.floor(Math.random() * candidates.length)]);
      }
    }
    scheduleFlicker();
  }, delay);
})();
