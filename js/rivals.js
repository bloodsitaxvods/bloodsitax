/* ══════════════════════════════════════════════════════
   MARVEL RIVALS RANDOMIZER — js/rivals.js
══════════════════════════════════════════════════════ */

;(function() {

const IMG = "marvel/img/marvel"

// ── ROLES ─────────────────────────────────────────────
const mrRoles = [
  { name: "Vanguard",   color: "#0aafff", img: `${IMG}/roles/vanguard.png`   },
  { name: "Strategist", color: "#a0ff50", img: `${IMG}/roles/strategist.png` },
  { name: "Duelist",    color: "#ff1a6e", img: `${IMG}/roles/duelist.png`    },
]

// ── PERSONAJES ────────────────────────────────────────
const mrChars = [
  // DUELIST
  { name: "Black Cat",        role: "Duelist",    img: `${IMG}/duelist/black_cat.png`        },
  { name: "Black Panther",    role: "Duelist",    img: `${IMG}/duelist/black_panther.png`    },
  { name: "Black Widow",      role: "Duelist",    img: `${IMG}/duelist/black_widow.png`      },
  { name: "Blade",            role: "Duelist",    img: `${IMG}/duelist/blade.png`            },
  { name: "Daredevil",        role: "Duelist",    img: `${IMG}/duelist/daredevil.png`        },
  { name: "Deadpool",         role: "Duelist",    img: `${IMG}/duelist/deadpool_daño.png`    },
  { name: "Elsa Bloodstone",  role: "Duelist",    img: `${IMG}/duelist/elsa_bloodstone.png`  },
  { name: "Hawkeye",          role: "Duelist",    img: `${IMG}/duelist/hawkeye.png`          },
  { name: "Hela",             role: "Duelist",    img: `${IMG}/duelist/hela.png`             },
  { name: "Human Torch",      role: "Duelist",    img: `${IMG}/duelist/human_torch.png`      },
  { name: "Iron Fist",        role: "Duelist",    img: `${IMG}/duelist/iron_fist.png`        },
  { name: "Iron Man",         role: "Duelist",    img: `${IMG}/duelist/iron_man.png`         },
  { name: "Jean Grey",        role: "Duelist",    img: `${IMG}/duelist/jean_grey.png`        },
  { name: "Magik",            role: "Duelist",    img: `${IMG}/duelist/magik.png`            },
  { name: "Mister Fantastic", role: "Duelist",    img: `${IMG}/duelist/mister_fantastic.png` },
  { name: "Moon Knight",      role: "Duelist",    img: `${IMG}/duelist/moon_knight.png`      },
  { name: "Namor",            role: "Duelist",    img: `${IMG}/duelist/namor.png`            },
  { name: "Psylocke",         role: "Duelist",    img: `${IMG}/duelist/psylocke.png`         },
  { name: "Scarlet Witch",    role: "Duelist",    img: `${IMG}/duelist/scarlet_witch.png`    },
  { name: "Spider-Man",       role: "Duelist",    img: `${IMG}/duelist/spider_man.png`       },
  { name: "Squirrel Girl",    role: "Duelist",    img: `${IMG}/duelist/squirrel_girl.png`    },
  { name: "Star-Lord",        role: "Duelist",    img: `${IMG}/duelist/star_lord.png`        },
  { name: "Storm",            role: "Duelist",    img: `${IMG}/duelist/storm.png`            },
  { name: "The Punisher",     role: "Duelist",    img: `${IMG}/duelist/the_punisher.png`     },
  { name: "Winter Soldier",   role: "Duelist",    img: `${IMG}/duelist/winter_soldier.png`   },
  { name: "Wolverine",        role: "Duelist",    img: `${IMG}/duelist/wolverine.png`        },
  // STRATEGIST
  { name: "Adam Warlock",     role: "Strategist", img: `${IMG}/strategist/adam_warlock.png`    },
  { name: "Cloak & Dagger",   role: "Strategist", img: `${IMG}/strategist/cloak_&_dagger.png`  },
  { name: "Deadpool Soporte", role: "Strategist", img: `${IMG}/strategist/deadpool_soporte.png` },
  { name: "Gambit",           role: "Strategist", img: `${IMG}/strategist/gambit.png`           },
  { name: "Invisible Woman",  role: "Strategist", img: `${IMG}/strategist/invisible_woman.png`  },
  { name: "Jeff",             role: "Strategist", img: `${IMG}/strategist/jeff.png`             },
  { name: "Loki",             role: "Strategist", img: `${IMG}/strategist/loki.png`             },
  { name: "Luna Snow",        role: "Strategist", img: `${IMG}/strategist/luna_snow.png`        },
  { name: "Mantis",           role: "Strategist", img: `${IMG}/strategist/mantis.png`           },
  { name: "Rocket Raccoon",   role: "Strategist", img: `${IMG}/strategist/rocket_raccoon.png`   },
  { name: "Ultron",           role: "Strategist", img: `${IMG}/strategist/ultron.png`           },
  { name: "White Fox",        role: "Strategist", img: `${IMG}/strategist/white_fox.png`        },
  // VANGUARD
  { name: "Angela",           role: "Vanguard",   img: `${IMG}/vanguard/angela.png`          },
  { name: "Captain America",  role: "Vanguard",   img: `${IMG}/vanguard/captain_america.png` },
  { name: "Deadpool Tanque",  role: "Vanguard",   img: `${IMG}/vanguard/deadpool_tanque.png` },
  { name: "Doctor Strange",   role: "Vanguard",   img: `${IMG}/vanguard/doctor_strange.png`  },
  { name: "Emma Frost",       role: "Vanguard",   img: `${IMG}/vanguard/emma_frost.png`      },
  { name: "Groot",            role: "Vanguard",   img: `${IMG}/vanguard/groot.png`           },
  { name: "Hulk",             role: "Vanguard",   img: `${IMG}/vanguard/hulk.png`            },
  { name: "Magneto",          role: "Vanguard",   img: `${IMG}/vanguard/magneto.png`         },
  { name: "Peni Parker",      role: "Vanguard",   img: `${IMG}/vanguard/peni_parker.png`     },
  { name: "Rogue",            role: "Vanguard",   img: `${IMG}/vanguard/rogue.png`           },
  { name: "The Thing",        role: "Vanguard",   img: `${IMG}/vanguard/the_thing.png`       },
  { name: "Thor",             role: "Vanguard",   img: `${IMG}/vanguard/thor.png`            },
  { name: "Venom",            role: "Vanguard",   img: `${IMG}/vanguard/venom.png`           },
]

// ── DOM ───────────────────────────────────────────────
const mrSection   = document.getElementById("rivals")
const mrR1        = document.getElementById("mr-r1")
const mrR2        = document.getElementById("mr-r2")
const mrW1        = document.getElementById("mr-w1")
const mrW2        = document.getElementById("mr-w2")
const mrSec2      = document.getElementById("mr-sec2")
const mrLbl2      = document.getElementById("mr-lbl2")
const mrOverlay   = document.getElementById("mr-overlay")
const mrWinCard   = document.getElementById("mr-win-card")
const mrSpinBtn   = document.getElementById("mr-spin-btn")
const mrFlash     = document.getElementById("mr-flash")
const mrSparks    = document.getElementById("mr-sparks")
const mrCeleb     = document.getElementById("mr-celeb")

let mrSpinning = false
let mrBar1Items = []
let mrBar2Items = []
let mrCelebInt  = null

// ── Partículas ────────────────────────────────────────
const mrPCont = document.getElementById("mr-particles")
for (let i = 0; i < 35; i++) {
  const p = document.createElement("div")
  p.className = "mr-particle"
  p.style.cssText = `
    left:${Math.random()*100}%;top:${Math.random()*100}%;
    width:${2+Math.random()*3}px;height:${2+Math.random()*3}px;
    animation-delay:${Math.random()*8}s;animation-duration:${6+Math.random()*8}s;
  `
  mrPCont.appendChild(p)
}

// ── Helpers ───────────────────────────────────────────
function mrShuffle(arr) {
  const a = [...arr]
  for (let i = a.length-1; i > 0; i--) {
    const j = Math.floor(Math.random()*(i+1));
    [a[i],a[j]] = [a[j],a[i]]
  }
  return a
}
function mrColor(role) {
  return {Duelist:"#ff1a6e",Vanguard:"#0aafff",Strategist:"#a0ff50"}[role]||"#ff1a6e"
}
function mrDelay(ms) { return new Promise(r=>setTimeout(r,ms)) }

// ── Build roulette ────────────────────────────────────
function mrBuild(el, pool, type) {
  el.innerHTML = ""
  const shuffled = mrShuffle(pool)
  const reps = type==='role' ? 20 : 10
  let vis = []
  for (let i=0;i<reps;i++) vis=vis.concat(shuffled)

  vis.forEach(item => {
    const color = type==='role' ? item.color : mrColor(item.role)
    const card = document.createElement("div")
    card.className = `mr-card mr-card-${type}`
    card.style.setProperty("--item-color", color)

    if (type==='role') {
      card.innerHTML = `
        <div class="mr-card-img"><img src="${item.img}" alt="${item.name}" loading="lazy"></div>
        <div class="mr-card-info"><div class="mr-role-name" style="color:${color}">${item.name.toUpperCase()}</div></div>
      `
    } else {
      card.innerHTML = `
        <div class="mr-card-img"><img src="${item.img}" alt="${item.name}" loading="lazy"></div>
        <div class="mr-card-info">
          <div class="mr-char-name">${item.name}</div>
          <div class="mr-char-role" style="color:${color}">${item.role}</div>
        </div>
      `
    }
    el.appendChild(card)
  })
  return shuffled
}

// ── Spin engine ───────────────────────────────────────
function mrSpin(rouEl, wrapEl, pool, dur) {
  return new Promise(resolve => {
    rouEl.style.transition = "none"
    rouEl.style.transform  = "translateX(0)"
    rouEl.offsetHeight

    const card    = rouEl.querySelector(".mr-card")
    const cw      = card.offsetWidth + 10
    const center  = wrapEl.offsetWidth / 2
    const total   = pool.length
    const buf     = new Uint32Array(1)
    crypto.getRandomValues(buf)
    const idx     = buf[0] % total
    const offset  = (7*total+idx)*cw - center + cw/2

    rouEl.style.transition = `transform ${dur/1000}s cubic-bezier(.02,.85,.1,1)`
    rouEl.style.transform  = `translateX(-${offset}px)`

    setTimeout(() => { mrHighlight(rouEl, wrapEl); resolve(pool[idx]) }, dur+100)
  })
}

function mrHighlight(rouEl, wrapEl) {
  const cx    = wrapEl.offsetWidth/2
  const wrect = wrapEl.getBoundingClientRect()
  let best=null, minD=Infinity
  rouEl.querySelectorAll(".mr-card").forEach(c=>{
    const r=c.getBoundingClientRect()
    const d=Math.abs((r.left-wrect.left+r.width/2)-cx)
    if(d<minD){minD=d;best=c}
  })
  if(best){ best.classList.add("mr-active"); setTimeout(()=>best.classList.remove("mr-active"),5000) }
}

// ── Flash ─────────────────────────────────────────────
function mrDoFlash(color) {
  mrFlash.style.background = color
  mrFlash.classList.remove("mr-flash-active")
  void mrFlash.offsetWidth
  mrFlash.classList.add("mr-flash-active")

  mrSparks.innerHTML = ""
  for (let i=0;i<36;i++){
    const s=document.createElement("div")
    s.className="mr-sparkle"
    const angle=(360/36)*i+Math.random()*10-5
    const dist=60+Math.random()*200
    const size=4+Math.random()*9
    s.style.cssText=`
      --angle:${angle}deg;--dist:${dist}px;
      width:${size}px;height:${size}px;
      background:${color};box-shadow:0 0 ${size*2}px ${color};
      top:50%;left:50%;transform:translate(-50%,-50%);
    `
    mrSparks.appendChild(s)
    s.style.animation="mrSparkle 1.0s ease-out forwards"
  }
  setTimeout(()=>{ mrSparks.innerHTML="" },1200)
}

// ── Celebración ───────────────────────────────────────
function mrStartCeleb(color) {
  mrCeleb.innerHTML=""
  function batch(){
    for(let i=0;i<5;i++){
      const h=document.createElement("div")
      h.className="mr-heart"; h.textContent="♥"
      const sz=14+Math.random()*20, dur=1.6+Math.random()*1.4
      const drift=(Math.random()-0.5)*110
      h.style.cssText=`left:${10+Math.random()*80}%;bottom:0;font-size:${sz}px;color:${color};filter:drop-shadow(0 0 5px ${color});--drift:${drift}px;animation:mrHeartFloat ${dur}s ease-out forwards;animation-delay:${Math.random()*0.4}s;`
      mrCeleb.appendChild(h); setTimeout(()=>h.remove(),(dur+0.5)*1000)
    }
    for(let i=0;i<4;i++){
      const g=document.createElement("div")
      g.className="mr-glint"
      const sz=4+Math.random()*7, dur=0.8+Math.random()*0.8
      g.style.cssText=`left:${5+Math.random()*90}%;top:${10+Math.random()*80}%;width:${sz}px;height:${sz}px;background:${color};box-shadow:0 0 ${sz*3}px ${color};animation:mrGlint ${dur}s ease-out forwards;animation-delay:${Math.random()*0.3}s;`
      mrCeleb.appendChild(g); setTimeout(()=>g.remove(),(dur+0.4)*1000)
    }
  }
  batch(); mrCelebInt=setInterval(batch,600)
}

function mrStopCeleb(){
  clearInterval(mrCelebInt); mrCelebInt=null
  setTimeout(()=>{ mrCeleb.innerHTML="" },1500)
}

// ── Sequence ──────────────────────────────────────────
async function mrStartSequence() {
  if(mrSpinning) return
  mrSpinning=true; mrSpinBtn.disabled=true

  mrOverlay.classList.remove("mr-overlay-visible"); mrOverlay.classList.add("mr-overlay-hidden")
  mrStopCeleb()
  mrSec2.classList.add("mr-hidden"); mrSec2.classList.remove("mr-reveal")
  mrLbl2.textContent="PERSONAJE"; mrLbl2.style.color=""
  mrR1.style.transition="none"; mrR1.style.transform="translateX(0)"
  mrR2.style.transition="none"; mrR2.style.transform="translateX(0)"

  mrBar1Items = mrBuild(mrR1, mrRoles, 'role')
  const winRole = await mrSpin(mrR1, mrW1, mrBar1Items, 8000)

  mrDoFlash(winRole.color)
  await mrDelay(500)

  const filtered = mrChars.filter(c=>c.role===winRole.name)
  mrBar2Items = mrBuild(mrR2, filtered, 'character')
  mrLbl2.textContent=`PERSONAJE — ${winRole.name.toUpperCase()}`
  mrLbl2.style.color=winRole.color
  mrSec2.classList.remove("mr-hidden"); mrSec2.classList.add("mr-reveal")

  await mrDelay(500)
  const winChar = await mrSpin(mrR2, mrW2, mrBar2Items, 8400)
  mrShowWinner(winChar)

  mrSpinning=false; mrSpinBtn.disabled=false
}

function mrShowWinner(char) {
  const color=mrColor(char.role)
  mrWinCard.innerHTML=`
    <div class="mr-wc-glow" style="--role-color:${color}"></div>
    <div class="mr-wc-img"><img src="${char.img}" alt="${char.name}"></div>
    <div class="mr-wc-body">
      <div class="mr-wc-name">${char.name}</div>
      <div class="mr-wc-role" style="color:${color}">${char.role}</div>
    </div>
  `
  mrWinCard.style.borderColor=color
  mrWinCard.style.boxShadow=`0 0 36px ${color}55, 0 0 70px ${color}1a`
  mrOverlay.classList.remove("mr-overlay-hidden"); mrOverlay.classList.add("mr-overlay-visible")
  mrStartCeleb(color)
}

// ── Exponer botón ──────────────────────────────────────
mrSpinBtn.addEventListener("click", mrStartSequence)

// ── Init ───────────────────────────────────────────────
mrOverlay.classList.add("mr-overlay-hidden")
mrBuild(mrR1, mrRoles, 'role')

})();
