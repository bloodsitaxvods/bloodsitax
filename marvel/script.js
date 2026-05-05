// ─── RUTA BASE DE IMÁGENES ───────────────────────────────────
// Ajusta esta ruta según donde pongas la carpeta img/marvel/
const IMG = "img/marvel"

// ─── ROLES ──────────────────────────────────────────────────
const roles = [
  { name: "Vanguard",   color: "#0aafff", img: `${IMG}/roles/vanguard.png`   },
  { name: "Strategist", color: "#a0ff50", img: `${IMG}/roles/strategist.png` },
  { name: "Duelist",    color: "#ff1a6e", img: `${IMG}/roles/duelist.png`    },
]

// ─── PERSONAJES ─────────────────────────────────────────────
// DUELIST (26)
const duelists = [
  { name: "Black Cat",       role: "Duelist", img: `${IMG}/duelist/black_cat.png`       },
  { name: "Black Panther",   role: "Duelist", img: `${IMG}/duelist/black_panther.png`   },
  { name: "Black Widow",     role: "Duelist", img: `${IMG}/duelist/black_widow.png`     },
  { name: "Blade",           role: "Duelist", img: `${IMG}/duelist/blade.png`           },
  { name: "Daredevil",       role: "Duelist", img: `${IMG}/duelist/daredevil.png`       },
  { name: "Deadpool",        role: "Duelist", img: `${IMG}/duelist/deadpool_daño.png`   },
  { name: "Elsa Bloodstone", role: "Duelist", img: `${IMG}/duelist/elsa_bloodstone.png` },
  { name: "Hawkeye",         role: "Duelist", img: `${IMG}/duelist/hawkeye.png`         },
  { name: "Hela",            role: "Duelist", img: `${IMG}/duelist/hela.png`            },
  { name: "Human Torch",     role: "Duelist", img: `${IMG}/duelist/human_torch.png`     },
  { name: "Iron Fist",       role: "Duelist", img: `${IMG}/duelist/iron_fist.png`       },
  { name: "Iron Man",        role: "Duelist", img: `${IMG}/duelist/iron_man.png`        },
  { name: "Jean Grey",       role: "Duelist", img: `${IMG}/duelist/jean_grey.png`       },
  { name: "Magik",           role: "Duelist", img: `${IMG}/duelist/magik.png`           },
  { name: "Mister Fantastic",role: "Duelist", img: `${IMG}/duelist/mister_fantastic.png`},
  { name: "Moon Knight",     role: "Duelist", img: `${IMG}/duelist/moon_knight.png`     },
  { name: "Namor",           role: "Duelist", img: `${IMG}/duelist/namor.png`           },
  { name: "Psylocke",        role: "Duelist", img: `${IMG}/duelist/psylocke.png`        },
  { name: "Scarlet Witch",   role: "Duelist", img: `${IMG}/duelist/scarlet_witch.png`   },
  { name: "Spider-Man",      role: "Duelist", img: `${IMG}/duelist/spider_man.png`      },
  { name: "Squirrel Girl",   role: "Duelist", img: `${IMG}/duelist/squirrel_girl.png`   },
  { name: "Star-Lord",       role: "Duelist", img: `${IMG}/duelist/star_lord.png`       },
  { name: "Storm",           role: "Duelist", img: `${IMG}/duelist/storm.png`           },
  { name: "The Punisher",    role: "Duelist", img: `${IMG}/duelist/the_punisher.png`    },
  { name: "Winter Soldier",  role: "Duelist", img: `${IMG}/duelist/winter_soldier.png`  },
  { name: "Wolverine",       role: "Duelist", img: `${IMG}/duelist/wolverine.png`       },
]

// STRATEGIST (12)
const strategists = [
  { name: "Adam Warlock",    role: "Strategist", img: `${IMG}/strategist/adam_warlock.png`    },
  { name: "Cloak & Dagger",  role: "Strategist", img: `${IMG}/strategist/cloak_&_dagger.png`  },
  { name: "Deadpool Soporte",role: "Strategist", img: `${IMG}/strategist/deadpool_soporte.png` },
  { name: "Gambit",          role: "Strategist", img: `${IMG}/strategist/gambit.png`           },
  { name: "Invisible Woman", role: "Strategist", img: `${IMG}/strategist/invisible_woman.png`  },
  { name: "Jeff",            role: "Strategist", img: `${IMG}/strategist/jeff.png`             },
  { name: "Loki",            role: "Strategist", img: `${IMG}/strategist/loki.png`             },
  { name: "Luna Snow",       role: "Strategist", img: `${IMG}/strategist/luna_snow.png`        },
  { name: "Mantis",          role: "Strategist", img: `${IMG}/strategist/mantis.png`           },
  { name: "Rocket Raccoon",  role: "Strategist", img: `${IMG}/strategist/rocket_raccoon.png`   },
  { name: "Ultron",          role: "Strategist", img: `${IMG}/strategist/ultron.png`           },
  { name: "White Fox",       role: "Strategist", img: `${IMG}/strategist/white_fox.png`        },
]

// VANGUARD (13)
const vanguards = [
  { name: "Angela",          role: "Vanguard", img: `${IMG}/vanguard/angela.png`          },
  { name: "Captain America", role: "Vanguard", img: `${IMG}/vanguard/captain_america.png` },
  { name: "Deadpool Tanque", role: "Vanguard", img: `${IMG}/vanguard/deadpool_tanque.png` },
  { name: "Doctor Strange",  role: "Vanguard", img: `${IMG}/vanguard/doctor_strange.png`  },
  { name: "Emma Frost",      role: "Vanguard", img: `${IMG}/vanguard/emma_frost.png`      },
  { name: "Groot",           role: "Vanguard", img: `${IMG}/vanguard/groot.png`           },
  { name: "Hulk",            role: "Vanguard", img: `${IMG}/vanguard/hulk.png`            },
  { name: "Magneto",         role: "Vanguard", img: `${IMG}/vanguard/magneto.png`         },
  { name: "Peni Parker",     role: "Vanguard", img: `${IMG}/vanguard/peni_parker.png`     },
  { name: "Rogue",           role: "Vanguard", img: `${IMG}/vanguard/rogue.png`           },
  { name: "The Thing",       role: "Vanguard", img: `${IMG}/vanguard/the_thing.png`       },
  { name: "Thor",            role: "Vanguard", img: `${IMG}/vanguard/thor.png`            },
  { name: "Venom",           role: "Vanguard", img: `${IMG}/vanguard/venom.png`           },
]

// Unificado
const characters = [...duelists, ...strategists, ...vanguards]

// ─── DOM REFS ────────────────────────────────────────────────
const roulette1        = document.getElementById("roulette1")
const roulette2        = document.getElementById("roulette2")
const wrapper1         = document.getElementById("wrapper1")
const wrapper2         = document.getElementById("wrapper2")
const section2         = document.getElementById("section2")
const bar2Label        = document.getElementById("bar2Label")
const winnerOverlay    = document.getElementById("winnerOverlay")
const winnerCard       = document.getElementById("winnerCard")
const spinBtn          = document.getElementById("spinBtn")
const flashOverlay     = document.getElementById("flashOverlay")
const sparklesCont     = document.getElementById("sparklesContainer")
const celebrationCont  = document.getElementById("celebrationContainer")

let spinning  = false
let bar1Items = []
let bar2Items = []
let celebInterval = null

// ─── PARTICLES ───────────────────────────────────────────────
;(function spawnParticles() {
  const container = document.getElementById("particles")
  for (let i = 0; i < 40; i++) {
    const p = document.createElement("div")
    p.className = "particle"
    p.style.cssText = `
      left:${Math.random()*100}%;
      top:${Math.random()*100}%;
      width:${2 + Math.random()*3}px;
      height:${2 + Math.random()*3}px;
      animation-delay:${Math.random()*8}s;
      animation-duration:${6 + Math.random()*8}s;
    `
    container.appendChild(p)
  }
})()

// ─── HELPERS ─────────────────────────────────────────────────
function shuffle(arr) {
  const a = [...arr]
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]]
  }
  return a
}
function getRoleColor(role) {
  return { Duelist: "#ff1a6e", Vanguard: "#0aafff", Strategist: "#a0ff50" }[role] || "#ff1a6e"
}
function delay(ms) { return new Promise(r => setTimeout(r, ms)) }

// ─── BUILD ROULETTE ──────────────────────────────────────────
function buildRoulette(rouletteEl, pool, type) {
  rouletteEl.innerHTML = ""
  const shuffled = shuffle(pool)
  const reps = type === 'role' ? 20 : 10
  let visual = []
  for (let i = 0; i < reps; i++) visual = visual.concat(shuffled)

  visual.forEach(item => {
    const color = type === 'role' ? item.color : getRoleColor(item.role)
    const card = document.createElement("div")
    card.className = `card card-${type}`
    card.style.setProperty("--item-color", color)

    if (type === 'role') {
      card.innerHTML = `
        <div class="card-img-wrap"><img src="${item.img}" alt="${item.name}" loading="lazy"></div>
        <div class="card-info"><div class="card-role-name" style="color:var(--item-color)">${item.name.toUpperCase()}</div></div>
      `
    } else {
      card.innerHTML = `
        <div class="card-img-wrap"><img src="${item.img}" alt="${item.name}" loading="lazy"></div>
        <div class="card-info">
          <div class="card-name">${item.name}</div>
          <div class="card-role-badge" style="color:var(--item-color)">${item.role}</div>
        </div>
      `
    }
    rouletteEl.appendChild(card)
  })
  return shuffled
}

// ─── SPIN ENGINE ─────────────────────────────────────────────
function spinBar(rouletteEl, wrapperEl, pool, duration = 6000) {
  return new Promise(resolve => {
    rouletteEl.style.transition = "none"
    rouletteEl.style.transform  = "translateX(0px)"
    rouletteEl.offsetHeight

    const card      = rouletteEl.querySelector(".card")
    const cardWidth = card.offsetWidth + 10
    const center    = wrapperEl.offsetWidth / 2
    const total     = pool.length
    const loops     = 7
    const randBuf   = new Uint32Array(1)
    crypto.getRandomValues(randBuf)
    const winnerIdx = randBuf[0] % total
    const stopIndex = loops * total + winnerIdx
    const offset    = stopIndex * cardWidth - center + cardWidth / 2

    rouletteEl.style.transition = `transform ${duration/1000}s cubic-bezier(.02,.85,.1,1)`
    rouletteEl.style.transform  = `translateX(-${offset}px)`

    setTimeout(() => {
      highlightCenter(rouletteEl, wrapperEl)
      resolve(pool[winnerIdx])
    }, duration + 100)
  })
}

function highlightCenter(rouletteEl, wrapperEl) {
  const centerX = wrapperEl.offsetWidth / 2
  const wRect   = wrapperEl.getBoundingClientRect()
  const cards   = rouletteEl.querySelectorAll(".card")
  let closest = null, minDist = Infinity

  cards.forEach(c => {
    const r = c.getBoundingClientRect()
    const dist = Math.abs((r.left - wRect.left + r.width / 2) - centerX)
    if (dist < minDist) { minDist = dist; closest = c }
  })

  if (closest) {
    closest.classList.add("active")
    setTimeout(() => closest.classList.remove("active"), 5000)
  }
}

// ─── FLASH ───────────────────────────────────────────────────
function flashScreen(color) {
  flashOverlay.style.background = color
  flashOverlay.classList.remove("flash-active")
  void flashOverlay.offsetWidth
  flashOverlay.classList.add("flash-active")

  sparklesCont.innerHTML = ""
  for (let i = 0; i < 36; i++) {
    const s = document.createElement("div")
    s.className = "sparkle"
    const angle = (360 / 36) * i + Math.random() * 10 - 5
    const dist  = 60 + Math.random() * 220
    const size  = 4 + Math.random() * 10
    s.style.cssText = `
      --angle: ${angle}deg; --dist: ${dist}px;
      width: ${size}px; height: ${size}px;
      background: ${color}; box-shadow: 0 0 ${size*2}px ${color};
      top: 50%; left: 50%; transform: translate(-50%,-50%);
    `
    sparklesCont.appendChild(s)
    s.style.animation = "sparkle-burst 1.0s ease-out forwards"
  }
  setTimeout(() => { sparklesCont.innerHTML = "" }, 1200)
}

// ─── CELEBRACIÓN ─────────────────────────────────────────────
function startCelebration(color) {
  celebrationCont.innerHTML = ""

  function spawnBatch() {
    for (let i = 0; i < 5; i++) {
      const h = document.createElement("div")
      h.className = "celeb-heart"
      h.textContent = "♥"
      const size  = 14 + Math.random() * 22
      const dur   = 1.6 + Math.random() * 1.4
      const drift = (Math.random() - 0.5) * 120
      h.style.cssText = `
        left: ${10 + Math.random()*80}%; bottom: 0;
        font-size: ${size}px; color: ${color};
        filter: drop-shadow(0 0 6px ${color});
        --drift: ${drift}px;
        animation: heartFloat ${dur}s ease-out forwards;
        animation-delay: ${Math.random()*0.4}s;
      `
      celebrationCont.appendChild(h)
      setTimeout(() => h.remove(), (dur + 0.5) * 1000)
    }
    for (let i = 0; i < 4; i++) {
      const g = document.createElement("div")
      g.className = "celeb-glint"
      const size = 4 + Math.random() * 7
      const dur  = 0.8 + Math.random() * 0.8
      g.style.cssText = `
        left: ${5 + Math.random()*90}%; top: ${10 + Math.random()*80}%;
        width: ${size}px; height: ${size}px;
        background: ${color}; box-shadow: 0 0 ${size*3}px ${color};
        animation: glintPop ${dur}s ease-out forwards;
        animation-delay: ${Math.random()*0.3}s;
      `
      celebrationCont.appendChild(g)
      setTimeout(() => g.remove(), (dur + 0.4) * 1000)
    }
  }

  spawnBatch()
  celebInterval = setInterval(spawnBatch, 600)
}

function stopCelebration() {
  clearInterval(celebInterval)
  celebInterval = null
  setTimeout(() => { celebrationCont.innerHTML = "" }, 1500)
}

// ─── SECUENCIA PRINCIPAL ─────────────────────────────────────
async function startSequence() {
  if (spinning) return
  spinning = true
  spinBtn.disabled = true

  hideWinnerOverlay()
  stopCelebration()
  section2.classList.add("bar2-hidden")
  section2.classList.remove("bar2-reveal")
  bar2Label.textContent = "PERSONAJE"
  bar2Label.style.color = ""
  roulette1.style.transition = "none"
  roulette1.style.transform  = "translateX(0)"
  roulette2.style.transition = "none"
  roulette2.style.transform  = "translateX(0)"

  bar1Items = buildRoulette(roulette1, roles, 'role')
  const winnerRole = await spinBar(roulette1, wrapper1, bar1Items, 8000)

  flashScreen(winnerRole.color)
  await delay(500)

  const filtered = characters.filter(c => c.role === winnerRole.name)
  bar2Items = buildRoulette(roulette2, filtered, 'character')
  bar2Label.textContent = `PERSONAJE — ${winnerRole.name.toUpperCase()}`
  bar2Label.style.color  = winnerRole.color
  section2.classList.remove("bar2-hidden")
  section2.classList.add("bar2-reveal")

  await delay(500)

  const winnerChar = await spinBar(roulette2, wrapper2, bar2Items, 8400)
  showFinalWinner(winnerChar)

  spinning = false
  spinBtn.disabled = false
}

// ─── GANADOR ─────────────────────────────────────────────────
function showFinalWinner(char) {
  const color = getRoleColor(char.role)
  winnerCard.innerHTML = `
    <div class="wc-glow" style="--role-color:${color}"></div>
    <div class="wc-img"><img src="${char.img}" alt="${char.name}"></div>
    <div class="wc-body">
      <div class="wc-name">${char.name}</div>
      <div class="wc-role" style="color:${color}">${char.role}</div>
    </div>
  `
  winnerCard.style.borderColor = color
  winnerCard.style.boxShadow   = `0 0 40px ${color}55, 0 0 80px ${color}22`

  winnerOverlay.classList.remove("overlay-hidden")
  winnerOverlay.classList.add("overlay-visible")
  startCelebration(color)
}

function hideWinnerOverlay() {
  winnerOverlay.classList.remove("overlay-visible")
  winnerOverlay.classList.add("overlay-hidden")
}

function resetAll() {
  stopCelebration()
  hideWinnerOverlay()
  setTimeout(() => startSequence(), 350)
}

// ─── INIT ─────────────────────────────────────────────────────
winnerOverlay.classList.add("overlay-hidden")
buildRoulette(roulette1, roles, 'role')
