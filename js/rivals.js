/* ══════════════════════════════════════════════════════
   MARVEL RIVALS RANDOMIZER — js/rivals.js
══════════════════════════════════════════════════════ */
;(function() {

const IMG = "marvel/img/marvel"

const mrRoles = [
  { name: "Vanguard",   color: "#0aafff", img: `${IMG}/roles/vanguard.png`   },
  { name: "Strategist", color: "#a0ff50", img: `${IMG}/roles/strategist.png` },
  { name: "Duelist",    color: "#ff1a6e", img: `${IMG}/roles/duelist.png`    },
]

const mrChars = [
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
const mrR1       = document.getElementById("mr-r1")
const mrR2       = document.getElementById("mr-r2")
const mrW1       = document.getElementById("mr-w1")
const mrW2       = document.getElementById("mr-w2")
const mrSec2     = document.getElementById("mr-sec2")
const mrLbl2     = document.getElementById("mr-lbl2")
const mrOverlay  = document.getElementById("mr-overlay")
const mrWinCard  = document.getElementById("mr-win-card")
const mrSpinBtn  = document.getElementById("mr-spin-btn")
const mrFlash    = document.getElementById("mr-flash")
const mrSparks   = document.getElementById("mr-sparks")
const mrCeleb    = document.getElementById("mr-celeb")

let mrSpinning  = false
let mrBar1Items = []
let mrBar2Items = []
let mrCelebInt  = null
let mrCelebCount = 0

// ── Partículas (pocas, solo decorativas) ─────────────
const mrPCont = document.getElementById("mr-particles")
const frag = document.createDocumentFragment()
for (let i = 0; i < 20; i++) {   // ← reducidas de 35 a 20
  const p = document.createElement("div")
  p.className = "mr-particle"
  p.style.cssText = `left:${Math.random()*100}%;top:${Math.random()*100}%;width:${2+Math.random()*3}px;height:${2+Math.random()*3}px;animation-delay:${Math.random()*8}s;animation-duration:${6+Math.random()*8}s;`
  frag.appendChild(p)
}
mrPCont.appendChild(frag)

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

// ── Build roulette — DocumentFragment, mínimas cards ─
function mrBuild(el, pool, type) {
  el.innerHTML = ""
  const shuffled = mrShuffle(pool)

  // reps debe satisfacer: (reps - loops) * total > viewport_cards (~8)
  // Con loops=5: reps=5+3=8 garantiza mínimo 2*total cards después del ganador
  // Roles (3 items): 8×3=24 cards — suficiente
  // Chars (12-26 items): 8×N cards — suficiente para cualquier pool
  const reps = type === 'role' ? 8 : 8
  const frag = document.createDocumentFragment()

  for (let r = 0; r < reps; r++) {
    shuffled.forEach(item => {
      const color = type==='role' ? item.color : mrColor(item.role)
      const card  = document.createElement("div")
      card.className = `mr-card mr-card-${type}`
      card.style.setProperty("--item-color", color)
      // decoding=async evita bloqueo del hilo principal
      card.innerHTML = type==='role'
        ? `<div class="mr-card-img"><img src="${item.img}" alt="${item.name}" decoding="async"></div>
           <div class="mr-card-info"><div class="mr-role-name" style="color:${color}">${item.name.toUpperCase()}</div></div>`
        : `<div class="mr-card-img"><img src="${item.img}" alt="${item.name}" decoding="async"></div>
           <div class="mr-card-info">
             <div class="mr-char-name">${item.name}</div>
             <div class="mr-char-role" style="color:${color}">${item.role}</div>
           </div>`
      frag.appendChild(card)
    })
  }
  el.appendChild(frag)
  return shuffled
}

// ── Spin engine — sin getBoundingClientRect ───────────
function mrSpin(rouEl, wrapEl, pool, dur) {
  return new Promise(resolve => {
    rouEl.style.transition = "none"
    rouEl.style.transform  = "translateX(0)"
    rouEl.offsetHeight // único reflow necesario

    const card   = rouEl.querySelector(".mr-card")
    const cw     = card.offsetWidth + 10
    const center = wrapEl.offsetWidth / 2
    const total  = pool.length
    const loops  = 5

    // Rejection sampling — elimina sesgo de módulo
    const limit = Math.floor(0x100000000 / total) * total
    let raw
    do {
      const buf = new Uint32Array(1)
      crypto.getRandomValues(buf)
      raw = buf[0]
    } while (raw >= limit)
    const idx    = raw % total
    const offset = (loops * total + idx) * cw - center + cw / 2

    rouEl.style.transition = `transform ${dur/1000}s cubic-bezier(.02,.85,.1,1)`
    rouEl.style.transform  = `translateX(-${offset}px)`

    setTimeout(() => {
      // OPTIMIZACIÓN: sabemos exactamente el índice → no tocamos DOM para buscarlo
      mrHighlightByIndex(rouEl, loops, total, idx)
      resolve(pool[idx])
    }, dur + 100)
  })
}

// ── Highlight directo por índice, sin layout queries ──
function mrHighlightByIndex(rouEl, loops, total, idx) {
  const targetPos = loops * total + idx
  const cards = rouEl.querySelectorAll(".mr-card")
  const card  = cards[targetPos]
  if (!card) return
  card.classList.add("mr-active")
  setTimeout(() => card.classList.remove("mr-active"), 4000)
}

// ── Flash (reducido a 16 sparkles) ───────────────────
function mrDoFlash(color) {
  mrFlash.style.background = color
  mrFlash.classList.remove("mr-flash-active")
  void mrFlash.offsetWidth
  mrFlash.classList.add("mr-flash-active")

  const sf = document.createDocumentFragment()
  for (let i = 0; i < 16; i++) {   // ← reducido de 36 a 16
    const s = document.createElement("div")
    s.className = "mr-sparkle"
    const angle = (360/16)*i
    const dist  = 50 + Math.random()*160
    const size  = 4 + Math.random()*8
    s.style.cssText = `--angle:${angle}deg;--dist:${dist}px;width:${size}px;height:${size}px;background:${color};box-shadow:0 0 ${size*2}px ${color};top:50%;left:50%;transform:translate(-50%,-50%);animation:mrSparkle 0.9s ease-out forwards;`
    sf.appendChild(s)
  }
  mrSparks.appendChild(sf)
  setTimeout(() => { mrSparks.innerHTML = "" }, 1000)
}

// ── Celebración — limitada, no infinita ──────────────
function mrStartCeleb(color) {
  mrCeleb.innerHTML = ""
  mrCelebCount = 0
  const MAX_BATCHES = 6  // ← máximo 6 batches, no infinito

  function batch() {
    if (mrCelebCount >= MAX_BATCHES) { clearInterval(mrCelebInt); return }
    mrCelebCount++
    const sf = document.createDocumentFragment()
    // Solo 3 corazones por batch (antes eran 5+4=9 elementos)
    for (let i = 0; i < 3; i++) {
      const h = document.createElement("div")
      h.className = "mr-heart"; h.textContent = "♥"
      const sz   = 14 + Math.random()*18
      const dur  = 1.8 + Math.random()*1.2
      const drift = (Math.random()-0.5)*100
      h.style.cssText = `left:${10+Math.random()*80}%;bottom:0;font-size:${sz}px;color:${color};--drift:${drift}px;animation:mrHeartFloat ${dur}s ease-out forwards;animation-delay:${Math.random()*0.3}s;`
      sf.appendChild(h)
      setTimeout(() => h.remove(), (dur+0.4)*1000)
    }
    mrCeleb.appendChild(sf)
  }

  batch()
  mrCelebInt = setInterval(batch, 800)  // ← cada 800ms (antes 600ms)
}

function mrStopCeleb() {
  clearInterval(mrCelebInt); mrCelebInt = null; mrCelebCount = 0
  mrCeleb.innerHTML = ""
}

// ── Secuencia ─────────────────────────────────────────
async function mrStartSequence() {
  if (mrSpinning) return
  mrSpinning = true; mrSpinBtn.disabled = true

  mrOverlay.classList.remove("mr-overlay-visible")
  mrOverlay.classList.add("mr-overlay-hidden")
  mrStopCeleb()
  mrSec2.classList.add("mr-hidden"); mrSec2.classList.remove("mr-reveal")
  mrLbl2.textContent = "PERSONAJE"; mrLbl2.style.color = ""
  mrR1.style.transition = "none"; mrR1.style.transform = "translateX(0)"
  mrR2.style.transition = "none"; mrR2.style.transform = "translateX(0)"

  mrBar1Items = mrBuild(mrR1, mrRoles, 'role')
  const winRole = await mrSpin(mrR1, mrW1, mrBar1Items, 8000)

  mrDoFlash(winRole.color)
  await mrDelay(500)

  const filtered = mrChars.filter(c => c.role === winRole.name)
  mrBar2Items = mrBuild(mrR2, filtered, 'character')
  mrLbl2.textContent = `PERSONAJE — ${winRole.name.toUpperCase()}`
  mrLbl2.style.color  = winRole.color
  mrSec2.classList.remove("mr-hidden"); mrSec2.classList.add("mr-reveal")

  await mrDelay(500)
  const winChar = await mrSpin(mrR2, mrW2, mrBar2Items, 8400)
  mrShowWinner(winChar)

  mrSpinning = false; mrSpinBtn.disabled = false
}

// ── Ganador ───────────────────────────────────────────
function mrShowWinner(char) {
  const color = mrColor(char.role)
  mrWinCard.innerHTML = `
    <div class="mr-wc-glow" style="--role-color:${color}"></div>
    <div class="mr-wc-img"><img src="${char.img}" alt="${char.name}" decoding="async"></div>
    <div class="mr-wc-body">
      <div class="mr-wc-name">${char.name}</div>
      <div class="mr-wc-role" style="color:${color}">${char.role}</div>
    </div>
  `
  mrWinCard.style.borderColor = color
  mrWinCard.style.boxShadow   = `0 0 25px ${color}55, 0 0 50px ${color}1a`
  mrOverlay.classList.remove("mr-overlay-hidden")
  mrOverlay.classList.add("mr-overlay-visible")
  mrStartCeleb(color)
}

// ── Init ───────────────────────────────────────────────
mrOverlay.classList.add("mr-overlay-hidden")
mrSpinBtn.addEventListener("click", mrStartSequence)
mrBuild(mrR1, mrRoles, 'role')

})();
