/* ============================================================
   BLOODSITAX — ruleta.js
   Ruleta de Sorteos para Stream
   ============================================================ */
(function () {

const wCanvas = document.getElementById('wheelCanvas');
const ctx     = wCanvas.getContext('2d');
const CX = wCanvas.width / 2;
const CY = wCanvas.height / 2;
const R  = CX - 14;
const CR = 68;

let names     = [];
let rotation  = 0;
let spinning  = false;
let centerImg = null;

const SEG_COLORS = [
  '#FF007F','#C0006A','#FF2D9A','#8A003F',
  '#D4006A','#48001F','#FF1A8C','#B0005A',
  '#6E002B','#330018','#FF69B4','#3A0016',
];

/* Parse textarea */
document.getElementById('namesInput').addEventListener('input', () => {
  const raw = document.getElementById('namesInput').value;
  names = raw.split('\n').map(s => s.trim()).filter(s => s);
  buildList();
  drawWheel();
});

function buildList() {
  const el = document.getElementById('namesList');
  if (!names.length) { el.innerHTML = '<div class="empty-state">Sin participantes</div>'; return; }
  const counts = new Map();
  const order  = [];
  names.forEach(n => {
    if (!counts.has(n)) { counts.set(n,0); order.push(n); }
    counts.set(n, counts.get(n)+1);
  });
  el.innerHTML = order.map((n,i) => {
    const c = SEG_COLORS[i % SEG_COLORS.length];
    const count = counts.get(n);
    return `<div class="name-item" style="border-color:${c}">
      <div class="name-dot" style="background:${c};box-shadow:0 0 6px ${c}88"></div>
      <span>${esc(n)}</span>
      <span class="name-num">${count>1?`<span style="color:var(--rosa-neon);opacity:.85;font-size:.75rem;font-weight:700">×${count}</span>`:'×1'}</span>
    </div>`;
  }).join('');
}

const esc = s => { const d=document.createElement('div'); d.appendChild(document.createTextNode(s)); return d.innerHTML; };

/* Draw */
function drawWheel() {
  ctx.clearRect(0, 0, wCanvas.width, wCanvas.height);
  if (!names.length) { drawEmpty(); drawCenter(); return; }
  const n   = names.length;
  const seg = (Math.PI * 2) / n;
  const rr  = rotation * Math.PI / 180;
  ctx.save(); ctx.translate(CX, CY); ctx.rotate(rr);
  for (let i = 0; i < n; i++) {
    const sa  = -Math.PI/2 + i*seg;
    const ea  = sa + seg;
    const mid = sa + seg/2;
    const col = SEG_COLORS[i % SEG_COLORS.length];
    const gx  = Math.cos(mid)*R*0.45;
    const gy  = Math.sin(mid)*R*0.45;
    const grd = ctx.createRadialGradient(gx*.3,gy*.3,0,gx*.3,gy*.3,R);
    grd.addColorStop(0, lighten(col,45)); grd.addColorStop(.5,col); grd.addColorStop(1,darken(col,25));
    ctx.beginPath(); ctx.moveTo(0,0); ctx.arc(0,0,R,sa,ea); ctx.closePath();
    ctx.fillStyle=grd; ctx.fill();
    ctx.strokeStyle='rgba(0,0,0,0.6)'; ctx.lineWidth=1.5; ctx.stroke();
    if (n<=65) {
      ctx.save(); ctx.rotate(mid);
      const fs = Math.max(7, Math.min(14, Math.floor(170/n)+3));
      ctx.font=`700 ${fs}px "Rajdhani",sans-serif`; ctx.textAlign='right'; ctx.textBaseline='middle';
      const maxW=R*0.66; let label=names[i];
      while(ctx.measureText(label).width>maxW&&label.length>1) label=label.slice(0,-1);
      if(label!==names[i]) label+='…';
      ctx.shadowColor='rgba(0,0,0,0.95)'; ctx.shadowBlur=6; ctx.fillStyle='#fff';
      ctx.fillText(label,R-20,0); ctx.restore();
    }
  }
  ctx.restore();
  ctx.beginPath(); ctx.arc(CX,CY,R,0,Math.PI*2);
  ctx.strokeStyle='rgba(255,0,127,0.45)'; ctx.lineWidth=1.5; ctx.stroke();
  drawCenter();
}

function drawEmpty() {
  const g=ctx.createRadialGradient(CX,CY,0,CX,CY,R);
  g.addColorStop(0,'rgba(22,0,14,0.9)'); g.addColorStop(1,'rgba(0,0,0,0.95)');
  ctx.beginPath(); ctx.arc(CX,CY,R,0,Math.PI*2); ctx.fillStyle=g; ctx.fill();
  ctx.strokeStyle='rgba(255,0,127,0.2)'; ctx.lineWidth=1.5; ctx.stroke();
  ctx.fillStyle='rgba(255,105,180,0.22)';
  ctx.font='600 14px "Rajdhani",sans-serif'; ctx.textAlign='center'; ctx.textBaseline='middle';
  ctx.fillText('Agrega participantes',CX,CY);
}

function drawCenter() {
  ctx.beginPath(); ctx.arc(CX,CY,CR+6,0,Math.PI*2); ctx.fillStyle='rgba(0,0,0,0.7)'; ctx.fill();
  const bg=ctx.createRadialGradient(CX-8,CY-8,0,CX,CY,CR);
  bg.addColorStop(0,'#1A0010'); bg.addColorStop(1,'#000');
  ctx.beginPath(); ctx.arc(CX,CY,CR,0,Math.PI*2); ctx.fillStyle=bg; ctx.fill();
  ctx.beginPath(); ctx.arc(CX,CY,CR,0,Math.PI*2);
  ctx.strokeStyle='#FF007F'; ctx.lineWidth=2.5; ctx.shadowColor='#FF007F'; ctx.shadowBlur=22;
  ctx.stroke(); ctx.shadowBlur=0;
  if (centerImg) {
    ctx.save(); ctx.beginPath(); ctx.arc(CX,CY,CR-2.5,0,Math.PI*2); ctx.clip();
    const s=(CR-2.5)*2; ctx.drawImage(centerImg,CX-CR+2.5,CY-CR+2.5,s,s); ctx.restore();
  } else {
    ctx.font='bold 20px "Orbitron",sans-serif'; ctx.textAlign='center'; ctx.textBaseline='middle';
    ctx.fillStyle='#FF2D9A'; ctx.shadowColor='#FF007F'; ctx.shadowBlur=16;
    ctx.fillText('BS',CX,CY+1); ctx.shadowBlur=0;
  }
}

function hexRgb(h){ const n=parseInt(h.replace('#',''),16); return [(n>>16)&255,(n>>8)&255,n&255]; }
function lighten(h,a){ const [r,g,b]=hexRgb(h); return `rgb(${Math.min(255,r+a)},${Math.min(255,g+a)},${Math.min(255,b+a)})`; }
function darken (h,a){ const [r,g,b]=hexRgb(h); return `rgb(${Math.max(0,r-a)},${Math.max(0,g-a)},${Math.max(0,b-a)})`; }

/* Shuffle */
function shuffleNames() {
  if (spinning||!names.length) return;
  for (let i=names.length-1;i>0;i--) {
    const j=Math.floor(Math.random()*(i+1));
    [names[i],names[j]]=[names[j],names[i]];
  }
  buildList();
  const from=rotation, add=180+Math.random()*360, dur=700, t0=performance.now();
  (function tick(now){
    const t=Math.min((now-t0)/dur,1);
    rotation=from+add*(1-Math.pow(1-t,3)); drawWheel();
    if(t<1) requestAnimationFrame(tick);
  })(performance.now());
  showStatus('MEZCLADO');
}

/* Spin */
function startSpin() {
  if (spinning) return;
  if (names.length < 2) {
    showStatus('MÍNIMO 2 PARTICIPANTES');
    const ta = document.getElementById('namesInput');
    ta.style.borderColor='rgba(255,0,127,0.6)'; ta.style.boxShadow='0 0 0 3px rgba(255,0,127,0.12)';
    setTimeout(()=>{ ta.style.borderColor=''; ta.style.boxShadow=''; },1400);
    return;
  }
  spinning=true; setCtrl(true);
  document.getElementById('ruleGlowRing').classList.add('active');
  const n=names.length, segA=360/n, winIdx=Math.floor(Math.random()*n), winner=names[winIdx];
  const winOff=(winIdx+0.5)*segA, tgtMod=((-winOff)%360+360)%360, curMod=((rotation%360)+360)%360;
  let diff=(tgtMod-curMod+360)%360;
  if(diff<5) diff+=360;
  const extra=12+Math.floor(Math.random()*6), total=diff+extra*360, startR=rotation;
  const FAST_MS=3000, SLOW_MS=3500, TOTAL_MS=FAST_MS+SLOW_MS, FF=0.75;
  function ease(t){ const split=FAST_MS/TOTAL_MS; if(t<=split) return (t/split)*FF; const t2=(t-split)/(1-split); return FF+(1-FF)*(1-Math.pow(1-t2,4)); }
  let t0=null;
  function frame(ts){
    if(!t0) t0=ts;
    const t=Math.min((ts-t0)/TOTAL_MS,1); rotation=startR+total*ease(t); drawWheel();
    if(t<1){ requestAnimationFrame(frame); return; }
    rotation=startR+total; drawWheel(); spinning=false; setCtrl(false);
    document.getElementById('ruleGlowRing').classList.remove('active');
    setTimeout(()=>showWinner(winner),550);
  }
  requestAnimationFrame(frame);
}

function setCtrl(off){
  document.getElementById('ruleSpinBtn').disabled=off;
  document.getElementById('ruleMixBtn').disabled=off;
}

function showWinner(name){
  document.getElementById('ruleWinnerName').textContent=name;
  document.getElementById('ruleWinnerOverlay').classList.add('active');
  startConfetti(); setTimeout(fadeConfetti,3500);
}
function closeModal(){
  document.getElementById('ruleWinnerOverlay').classList.remove('active');
  stopConfetti();
}

/* Confetti */
const cc=document.getElementById('confettiCanvas'), cctx=cc.getContext('2d');
let pieces=[], confAF=null;
const CCOLS=['#FF2D9A','#FF007F','#FFC1E1','#FF69B4','#D4006A','#ffffff','#FF1A8C','#FFB3D9'];
function startConfetti(){
  cc.width=window.innerWidth; cc.height=window.innerHeight;
  cc.style.transition='opacity 0.5s ease'; cc.style.opacity='1';
  pieces=[];
  for(let i=0;i<200;i++){
    pieces.push({x:Math.random()*cc.width,y:-20-Math.random()*280,w:4+Math.random()*8,h:7+Math.random()*10,
      c:CCOLS[Math.floor(Math.random()*CCOLS.length)],vx:(Math.random()-.5)*3.5,vy:2+Math.random()*4,
      r:Math.random()*360,rv:(Math.random()-.5)*8,op:1,shape:Math.random()>.45?'rect':'circle'});
  }
  if(confAF) cancelAnimationFrame(confAF);
  animateConf();
}
function animateConf(){
  cctx.clearRect(0,0,cc.width,cc.height);
  pieces.forEach(p=>{
    p.x+=p.vx; p.y+=p.vy; p.vy+=0.07; p.r+=p.rv;
    cctx.save(); cctx.globalAlpha=Math.max(0,p.op); cctx.translate(p.x,p.y); cctx.rotate(p.r*Math.PI/180);
    cctx.fillStyle=p.c; cctx.shadowColor=p.c; cctx.shadowBlur=5;
    if(p.shape==='circle'){cctx.beginPath();cctx.arc(0,0,p.w/2,0,Math.PI*2);cctx.fill();}
    else{cctx.fillRect(-p.w/2,-p.h/2,p.w,p.h);}
    cctx.restore();
  });
  pieces=pieces.filter(p=>p.op>0&&p.y<cc.height+30);
  if(pieces.length>0) confAF=requestAnimationFrame(animateConf);
  else cctx.clearRect(0,0,cc.width,cc.height);
}
function fadeConfetti(){
  cc.style.transition='opacity 1.2s ease'; cc.style.opacity='0';
  setTimeout(()=>{ pieces=[]; if(confAF){cancelAnimationFrame(confAF);confAF=null;} cctx.clearRect(0,0,cc.width,cc.height); },1300);
}
function stopConfetti(){
  cc.style.transition='opacity 0.3s ease'; cc.style.opacity='0';
  pieces=[]; if(confAF){cancelAnimationFrame(confAF);confAF=null;} cctx.clearRect(0,0,cc.width,cc.height);
}

/* Image upload */
document.getElementById('centerImageInput').addEventListener('change', e=>{
  const f=e.target.files[0]; if(!f) return;
  const rd=new FileReader();
  rd.onload=ev=>{ const img=new Image(); img.onload=()=>{ centerImg=img; drawWheel(); }; img.src=ev.target.result; };
  rd.readAsDataURL(f);
});

/* Status */
let stTimer=null;
function showStatus(msg){
  const el=document.getElementById('statusLine');
  el.textContent=msg; el.classList.add('show');
  clearTimeout(stTimer); stTimer=setTimeout(()=>el.classList.remove('show'),2500);
}

/* Ripple */
document.querySelectorAll('.r-btn').forEach(b=>{
  b.addEventListener('click', e=>{
    if(b.disabled) return;
    const r=document.createElement('span'); r.className='ripple';
    const rect=b.getBoundingClientRect(), sz=Math.max(rect.width,rect.height)*2;
    r.style.cssText=`width:${sz}px;height:${sz}px;left:${e.clientX-rect.left-sz/2}px;top:${e.clientY-rect.top-sz/2}px;`;
    b.appendChild(r); setTimeout(()=>r.remove(),600);
  });
});

/* Event listeners for buttons */
document.getElementById('ruleSpinBtn').addEventListener('click', startSpin);
document.getElementById('ruleMixBtn').addEventListener('click', shuffleNames);
document.getElementById('ruleCloseModal').addEventListener('click', closeModal);

/* Init */
drawWheel();
window.addEventListener('resize',()=>{
  if(parseFloat(cc.style.opacity)>0){ cc.width=window.innerWidth; cc.height=window.innerHeight; }
});

})();
