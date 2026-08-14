/* ==========================================================================
   PORTFOLIO — Ana Elisa Sprenger
   ========================================================================== */

const CONFIG = {
  name: "Ana Elisa Sprenger",
  birthDate: "2009-02-09T00:00:00",
  githubUser: "anasprenger",
  resume: { type: "pdf", url: "assets/pdf/anaelisasprenger.pdf" },
  social: {
    github: "https://github.com/anasprenger",
    linkedin: "https://linkedin.com/in/anasprenger",
    email: "mailto:contato@exemplo.com",
    instagram: "https://instagram.com/anasprenger",
  },
};

/* ---------- SKILLS agrupadas ---------- */
const SKILL_GROUPS = [
  { icon: "FE", title: "Front-end",    items: ["HTML5", "CSS3", "JavaScript", "TypeScript", "React", "React Native"] },
  { icon: "BE", title: "Back-end",     items: ["Node.js", "Express", "Python", "Django", "Java", "APIs REST"] },
  { icon: "DB", title: "Dados",        items: ["PostgreSQL", "MySQL", "Firebase"] },
  { icon: "DO", title: "DevOps & Ferramentas", items: ["Git", "GitHub", "Docker", "VS Code"] },
  { icon: "UI", title: "Design",       items: ["Figma", "UX / UI"] },
];

/* ---------- PROJETOS ---------- */
const PROJECTS = [
  { id:"portfolio", title:"Portfólio Pessoal", category:"htmlcss", desc:"Site pessoal com design minimalista, animações e múltiplos temas.", tech:["HTML","CSS","JavaScript"], site:"#", repo:"https://github.com/anasprenger", goal:"Criar uma vitrine profissional que demonstre domínio de front-end puro.", problems:"Consistência de temas, performance de animações e responsividade.", learnings:"Design system em CSS variables, glassmorphism, animações otimizadas." },
  { id:"task-app", title:"Task Manager", category:"javascript", desc:"Aplicação de tarefas com filtros, persistência local e atalhos de teclado.", tech:["JavaScript","LocalStorage","CSS"], site:"#", repo:"https://github.com/anasprenger", goal:"Praticar arquitetura de estado sem framework.", problems:"Sincronização entre views e persistência sem lib.", learnings:"Reatividade simples com Proxy e padrão pub/sub." },
  { id:"landing-ux", title:"Landing UX Study", category:"uxui", desc:"Landing page com foco em hierarquia visual e microinterações.", tech:["Figma","HTML","CSS"], site:"#", repo:"https://github.com/anasprenger", goal:"Estudo aprofundado de tipografia e ritmo visual.", problems:"Equilíbrio entre densidade e respiro.", learnings:"Sistema modular de spacing e escala tipográfica." },
  { id:"java-sistema", title:"Sistema de Estoque", category:"java", desc:"CRUD completo com POO, camadas separadas e persistência.", tech:["Java","MySQL"], site:"#", repo:"https://github.com/anasprenger", goal:"Aplicar boas práticas de orientação a objetos.", problems:"Modelagem de entidades e relacionamentos.", learnings:"Separação de camadas e princípios SOLID." },
  { id:"analise-dados", title:"Análise Exploratória", category:"python", desc:"Notebook Python para exploração e visualização de dados públicos.", tech:["Python","Pandas","Matplotlib"], site:"#", repo:"https://github.com/anasprenger", goal:"Extrair insights de um dataset real.", problems:"Limpeza e tratamento de dados ausentes.", learnings:"Pipelines reprodutíveis e visualização eficaz." },
  { id:"erp-mini", title:"Mini ERP", category:"sistemas", desc:"Sistema web modular para pequenas empresas.", tech:["JavaScript","Firebase","HTML","CSS"], site:"#", repo:"https://github.com/anasprenger", goal:"Integrar back-end serverless com front-end responsivo.", problems:"Regras de segurança e autenticação.", learnings:"Firestore, Auth e regras declarativas." },
  { id:"db-modelagem", title:"Modelagem Relacional", category:"db", desc:"Projeto de banco de dados normalizado com views e stored procedures.", tech:["SQL","MySQL"], site:"#", repo:"https://github.com/anasprenger", goal:"Praticar normalização e otimização de queries.", problems:"Trade-offs entre normalização e performance.", learnings:"Índices, planos de execução e views materializadas." },
  { id:"experimentos", title:"Experimentos Criativos", category:"outros", desc:"Pequenos experimentos com Canvas, animações e áudio.", tech:["Canvas","Web Audio","JavaScript"], site:"#", repo:"https://github.com/anasprenger", goal:"Explorar APIs modernas do navegador.", problems:"Performance de renderização em canvas.", learnings:"Loops de animação e otimização de draws." },
];

/* ==========================================================================
   BÁSICOS
   ========================================================================== */
document.getElementById("year").textContent = new Date().getFullYear();

/* Age counter */
(function initAge() {
  const el = document.getElementById("ageCounter");
  const birth = new Date(CONFIG.birthDate);
  function calc() {
    const now = new Date();
    let years = now.getFullYear() - birth.getFullYear();
    let months = now.getMonth() - birth.getMonth();
    let days = now.getDate() - birth.getDate();
    let hours = now.getHours() - birth.getHours();
    let minutes = now.getMinutes() - birth.getMinutes();
    if (minutes < 0) { minutes += 60; hours--; }
    if (hours < 0) { hours += 24; days--; }
    if (days < 0) { const prev = new Date(now.getFullYear(), now.getMonth(), 0); days += prev.getDate(); months--; }
    if (months < 0) { months += 12; years--; }
    el.textContent = `${years} anos • ${months} meses • ${days} dias • ${hours}h ${minutes}m`;
  }
  calc(); setInterval(calc, 60_000);
})();

/* Navbar */
const navbar = document.getElementById("navbar");
window.addEventListener("scroll", () => navbar.classList.toggle("scrolled", window.scrollY > 20), { passive: true });

const menuToggle = document.getElementById("menuToggle");
const navLinks = document.querySelector(".nav-links");
menuToggle.addEventListener("click", () => {
  const open = navLinks.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded", String(open));
});
navLinks.querySelectorAll("a").forEach(a => a.addEventListener("click", () => navLinks.classList.remove("open")));

/* Themes */
const themeToggle = document.getElementById("themeToggle");
const themeMenu = document.getElementById("themeMenu");
const savedTheme = localStorage.getItem("theme") || "rose";
document.documentElement.setAttribute("data-theme", savedTheme);
document.body.setAttribute("data-theme", savedTheme);
themeToggle.addEventListener("click", (e) => {
  e.stopPropagation();
  const open = themeMenu.classList.toggle("open");
  themeToggle.setAttribute("aria-expanded", String(open));
});
document.addEventListener("click", () => themeMenu.classList.remove("open"));
themeMenu.querySelectorAll("[data-theme-value]").forEach(btn => {
  btn.addEventListener("click", () => {
    const value = btn.dataset.themeValue;
    document.documentElement.setAttribute("data-theme", value);
    document.body.setAttribute("data-theme", value);
    localStorage.setItem("theme", value);
    themeMenu.classList.remove("open");
  });
});

/* Currículo btn */
const btnCurriculo = document.getElementById("btnCurriculo");
if (btnCurriculo) {
  btnCurriculo.href = CONFIG.resume.url;
  btnCurriculo.setAttribute("target", CONFIG.resume.type === "pdf" ? "_blank" : "_self");
}

/* Ripple + magnetic */
document.querySelectorAll("[data-ripple]").forEach(el => {
  el.addEventListener("click", (e) => {
    const rect = el.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height);
    const ripple = document.createElement("span");
    ripple.className = "ripple";
    ripple.style.width = ripple.style.height = size + "px";
    ripple.style.left = (e.clientX - rect.left - size / 2) + "px";
    ripple.style.top = (e.clientY - rect.top - size / 2) + "px";
    el.appendChild(ripple);
    setTimeout(() => ripple.remove(), 600);
  });
});
document.querySelectorAll(".magnetic").forEach(el => {
  el.addEventListener("mousemove", (e) => {
    const r = el.getBoundingClientRect();
    const x = e.clientX - r.left - r.width / 2;
    const y = e.clientY - r.top - r.height / 2;
    el.style.transform = `translate(${x * 0.12}px, ${y * 0.18}px)`;
  });
  el.addEventListener("mouseleave", () => { el.style.transform = ""; });
});

/* ==========================================================================
   SKILLS render
   ========================================================================== */
(function renderSkills() {
  const el = document.getElementById("skillsGroups");
  if (!el) return;
  el.innerHTML = SKILL_GROUPS.map((g, i) => `
    <article class="skill-group glass-card reveal" style="animation-delay:${i * 80}ms">
      <div class="skill-group-head">
        <div class="skill-group-icon">${g.icon}</div>
        <h3>${g.title}</h3>
      </div>
      <div class="skill-list">
        ${g.items.map(s => `<span class="skill-chip"><span class="dot"></span>${s}</span>`).join("")}
      </div>
    </article>
  `).join("");
})();

/* ==========================================================================
   PROJETOS
   ========================================================================== */
const grid = document.getElementById("projectsGrid");
const categoriesEls = document.querySelectorAll(".category");

function renderProjects(category = "all") {
  const list = category === "all" ? PROJECTS : PROJECTS.filter(p => p.category === category);
  grid.innerHTML = list.map((p, i) => `
    <article class="project-card" data-id="${p.id}" style="animation-delay:${i * 60}ms">
      <div class="project-thumb">
        <img src="assets/img/${p.id}.jpg" alt="Preview do projeto ${p.title}" loading="lazy" onerror="this.style.display='none'" />
      </div>
      <div class="project-body">
        <h3 class="project-title">${p.title}</h3>
        <p class="project-desc">${p.desc}</p>
        <ul class="project-tech badges" aria-label="Tecnologias">
          ${p.tech.map(t => `<li class="badge">${t}</li>`).join("")}
        </ul>
        <div class="project-actions">
          <button class="btn btn-primary" data-open="${p.id}">Ver Projeto</button>
          <a class="btn btn-ghost" href="${p.repo}" target="_blank" rel="noopener">GitHub</a>
        </div>
      </div>
    </article>
  `).join("") || `<p style="color:var(--text-soft)">Nenhum projeto nesta categoria ainda.</p>`;

  grid.querySelectorAll("[data-open]").forEach(btn => btn.addEventListener("click", () => openModal(btn.dataset.open)));
}
categoriesEls.forEach(c => {
  c.addEventListener("click", () => {
    categoriesEls.forEach(x => x.classList.remove("active"));
    c.classList.add("active");
    renderProjects(c.dataset.category);
  });
});
renderProjects();

/* Modal */
const modal = document.getElementById("projectModal");
function openModal(id) {
  const p = PROJECTS.find(x => x.id === id);
  if (!p) return;
  modal.hidden = false;
  document.body.style.overflow = "hidden";
  document.getElementById("modalImg").src = `assets/img/${p.id}.jpg`;
  document.getElementById("modalImg").alt = p.title;
  document.getElementById("modalCat").textContent = p.category.toUpperCase();
  document.getElementById("modalTitle").textContent = p.title;
  document.getElementById("modalDesc").textContent = p.desc;
  document.getElementById("modalGoal").textContent = p.goal;
  document.getElementById("modalProblems").textContent = p.problems;
  document.getElementById("modalLearnings").textContent = p.learnings;
  document.getElementById("modalTech").innerHTML = p.tech.map(t => `<li class="badge">${t}</li>`).join("");
  document.getElementById("modalSite").href = p.site;
  document.getElementById("modalRepo").href = p.repo;
}
modal.addEventListener("click", (e) => { if (e.target.dataset.close !== undefined) closeModal(); });
document.addEventListener("keydown", (e) => { if (e.key === "Escape") closeModal(); });
function closeModal() { modal.hidden = true; document.body.style.overflow = ""; }

/* ==========================================================================
   REVEAL animado
   ========================================================================== */
const io = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
      io.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });
document.querySelectorAll(".reveal").forEach(el => io.observe(el));
// Observa apenas containers que recebem conteúdo dinâmico (perf)
const dynamicHosts = ["#skillsGroups", "#projectsGrid", "#langBars"]
  .map(sel => document.querySelector(sel)).filter(Boolean);
if (dynamicHosts.length) {
  const revealMO = new MutationObserver(() => {
    dynamicHosts.forEach(host => {
      host.querySelectorAll(".reveal:not(.visible)").forEach(el => io.observe(el));
    });
  });
  dynamicHosts.forEach(host => revealMO.observe(host, { childList: true, subtree: true }));
}

/* ==========================================================================
   TIMELINE HORIZONTAL — progresso + drag scroll
   NÃO sequestra scroll vertical da página.
   ========================================================================== */
(function initTimeline() {
  const track = document.getElementById("timelineTrack");
  const inner = track && track.querySelector(".timeline-h");
  if (!track || !inner) return;

  function updateProgress() {
    const max = track.scrollWidth - track.clientWidth;
    const pct = max > 0 ? (track.scrollLeft / max) * 100 : 100;
    inner.style.setProperty("--tl-progress", pct + "%");
  }
  track.addEventListener("scroll", updateProgress, { passive: true });
  window.addEventListener("resize", updateProgress);
  updateProgress();

  // Drag horizontal (só com mouse pressionado; não interfere com scroll da página)
  let isDown = false, startX = 0, scrollStart = 0, moved = false;
  track.addEventListener("mousedown", (e) => {
    isDown = true; moved = false;
    startX = e.pageX - track.offsetLeft;
    scrollStart = track.scrollLeft;
  });
  const endDrag = () => { isDown = false; };
  track.addEventListener("mouseleave", endDrag);
  track.addEventListener("mouseup", endDrag);
  window.addEventListener("mouseup", endDrag);
  track.addEventListener("mousemove", (e) => {
    if (!isDown) return;
    const x = e.pageX - track.offsetLeft;
    const delta = (x - startX);
    if (Math.abs(delta) > 3) moved = true;
    if (moved) {
      e.preventDefault();
      track.scrollLeft = scrollStart - delta * 1.2;
    }
  });
  // IMPORTANTE: não hijack wheel — scroll vertical do mouse deve rolar a página.
})();

/* ==========================================================================
   GITHUB — Integração real
   ========================================================================== */
(async function initGitHub() {
  const user = CONFIG.githubUser;
  const $ = (id) => document.getElementById(id);

  // Gráficos externos (streak + estatísticas)
  const streakImg = $("ghStreakImg");
  const graphImg  = $("ghGraphImg");
  if (streakImg) streakImg.src = `https://streak-stats.demolab.com?user=${user}&theme=transparent&hide_border=true&card_width=500`;
  if (graphImg)  graphImg.src  = `https://github-readme-stats.vercel.app/api?username=${user}&show_icons=true&hide_border=true&bg_color=00000000&count_private=true&hide_title=false`;

  try {
    const [userRes, reposRes] = await Promise.all([
      fetch(`https://api.github.com/users/${user}`),
      fetch(`https://api.github.com/users/${user}/repos?per_page=100&sort=updated`),
    ]);
    if (!userRes.ok || !reposRes.ok) throw new Error("GitHub API");

    const u = await userRes.json();
    const repos = await reposRes.json();

    // Estatísticas top
    const totalStars = repos.reduce((s, r) => s + (r.stargazers_count || 0), 0);
    const langCounts = {};
    repos.forEach(r => { if (r.language) langCounts[r.language] = (langCounts[r.language] || 0) + 1; });
    const langKeys = Object.keys(langCounts);

    animateNumber($("ghRepos"), u.public_repos ?? repos.length);
    animateNumber($("ghStars"), totalStars);
    animateNumber($("ghLangs"), langKeys.length);
    animateNumber($("ghFollowers"), u.followers ?? 0);

    // Barras de linguagens
    const langBars = $("langBars");
    if (langBars) {
      const total = Object.values(langCounts).reduce((a, b) => a + b, 0);
      const sorted = Object.entries(langCounts).sort((a, b) => b[1] - a[1]).slice(0, 6);
      if (sorted.length === 0) {
        langBars.innerHTML = `<p class="gh-hint">Nenhuma linguagem detectada ainda.</p>`;
      } else {
        langBars.innerHTML = sorted.map(([name, count]) => {
          const pct = Math.round((count / total) * 100);
          return `
            <div class="lang-row">
              <span class="lang-name">${name}</span>
              <div class="lang-bar-wrap"><span class="lang-bar" data-pct="${pct}"></span></div>
              <span class="lang-pct">${pct}%</span>
            </div>`;
        }).join("");
        // Animar largura
        requestAnimationFrame(() => {
          langBars.querySelectorAll(".lang-bar").forEach(b => { b.style.width = b.dataset.pct + "%"; });
        });
      }
    }
  } catch (err) {
    console.warn("GitHub API indisponível:", err);
    ["ghRepos","ghStars","ghLangs","ghFollowers"].forEach(id => {
      const el = $(id); if (el) el.textContent = "—";
    });
    const langBars = $("langBars");
    if (langBars) langBars.innerHTML = `<p class="gh-hint">Não foi possível carregar as estatísticas agora. Veja no <a class="inline-link" href="https://github.com/${user}" target="_blank" rel="noopener">GitHub</a>.</p>`;
  }
})();

function animateNumber(el, target) {
  if (!el) return;
  const duration = 1400;
  const start = performance.now();
  function tick(now) {
    const p = Math.min((now - start) / duration, 1);
    const eased = 1 - Math.pow(1 - p, 3);
    el.textContent = Math.floor(target * eased).toLocaleString("pt-BR");
    if (p < 1) requestAnimationFrame(tick);
    else el.textContent = target.toLocaleString("pt-BR");
  }
  requestAnimationFrame(tick);
}

/* ==========================================================================
   HERO — Ondas 3D glossy
   ========================================================================== */
(function initHeroCanvas() {
  const reduced = matchMedia("(prefers-reduced-motion: reduce)").matches;
  const canvas = document.getElementById("heroCanvas");
  if (!canvas) return;
  const ctx = canvas.getContext("2d");
  let w, h, dpr, t = 0, mouseX = 0.5, mouseY = 0.5;

  function css(name, fallback) { return getComputedStyle(document.documentElement).getPropertyValue(name).trim() || fallback; }
  function hex(v, a) {
    const c = v.replace("#", "").trim();
    const n = c.length === 3
      ? c.split("").map(x => parseInt(x + x, 16))
      : [parseInt(c.slice(0,2),16), parseInt(c.slice(2,4),16), parseInt(c.slice(4,6),16)];
    return `rgba(${n[0]},${n[1]},${n[2]},${a})`;
  }
  function palette() {
    return {
      a: [css("--ribbon-a1","#fff"), css("--ribbon-a2","#ffd1e6"), css("--ribbon-a3","#ff7ab6"), css("--ribbon-a4","#ec2a7a"), css("--ribbon-a5","#5a0a2b")],
      b: [css("--ribbon-b1","#fff"), css("--ribbon-b2","#ffe3ee"), css("--ribbon-b3","#ffa4cc"), css("--ribbon-b4","#d63377"), css("--ribbon-b5","#3a0518")],
    };
  }
  function resize() {
    dpr = Math.min(window.devicePixelRatio || 1, 2);
    w = canvas.width = canvas.offsetWidth * dpr;
    h = canvas.height = canvas.offsetHeight * dpr;
  }
  window.addEventListener("resize", resize);
  resize();
  window.addEventListener("mousemove", (e) => { mouseX = e.clientX / window.innerWidth; mouseY = e.clientY / window.innerHeight; }, { passive: true });

  function centerY(x, cfg) {
    const { yBase, amp, freq, speed, phase } = cfg;
    return yBase + Math.sin(x * freq + t * speed + phase) * amp
      + Math.sin(x * freq * 2.3 + t * speed * 1.4 + phase) * amp * 0.28
      + Math.sin(x * freq * 0.6 + t * speed * 0.7) * amp * 0.18;
  }
  function drawRibbon(cfg, colors) {
    const { thickness, tilt } = cfg;
    const step = Math.max(4, 6 * dpr);
    const path = [];
    for (let x = -20 * dpr; x <= w + 20 * dpr; x += step) path.push({ x, y: centerY(x, cfg) });
    const top = [], bot = [];
    for (let i = 0; i < path.length; i++) {
      const p = path[i], prev = path[i - 1] || p, next = path[i + 1] || p;
      const dx = next.x - prev.x, dy = next.y - prev.y, len = Math.hypot(dx, dy) || 1;
      const nx = -dy / len, ny = dx / len, halfT = thickness / 2;
      top.push({ x: p.x + nx * halfT, y: p.y + ny * halfT + tilt });
      bot.push({ x: p.x - nx * halfT, y: p.y - ny * halfT + tilt });
    }
    function outlinePath() {
      ctx.beginPath();
      ctx.moveTo(top[0].x, top[0].y);
      for (let i = 1; i < top.length; i++) ctx.lineTo(top[i].x, top[i].y);
      for (let i = bot.length - 1; i >= 0; i--) ctx.lineTo(bot[i].x, bot[i].y);
      ctx.closePath();
    }
    ctx.save(); ctx.filter = `blur(${Math.round(18 * dpr)}px)`; outlinePath();
    ctx.fillStyle = hex(colors[4], 0.35); ctx.translate(0, 24 * dpr); ctx.fill(); ctx.restore();

    outlinePath();
    const ys = top.map(p => p.y), yb = bot.map(p => p.y);
    const minY = Math.min(...ys), maxY = Math.max(...yb);
    const grad = ctx.createLinearGradient(0, minY, 0, maxY);
    grad.addColorStop(0.00, hex(colors[1], 0.95));
    grad.addColorStop(0.18, hex(colors[2], 1));
    grad.addColorStop(0.55, hex(colors[3], 1));
    grad.addColorStop(1.00, hex(colors[4], 1));
    ctx.fillStyle = grad; ctx.fill();

    ctx.save(); ctx.beginPath();
    for (let i = 0; i < top.length; i++) {
      const p = top[i], b = bot[i], inset = 0.18;
      const x = p.x + (b.x - p.x) * inset, y = p.y + (b.y - p.y) * inset;
      if (i === 0) ctx.moveTo(x, y); else ctx.lineTo(x, y);
    }
    for (let i = top.length - 1; i >= 0; i--) {
      const p = top[i], b = bot[i], inset = 0.05;
      const x = p.x + (b.x - p.x) * inset, y = p.y + (b.y - p.y) * inset;
      ctx.lineTo(x, y);
    }
    ctx.closePath();
    const hg = ctx.createLinearGradient(0, minY, 0, minY + (maxY - minY) * 0.3);
    hg.addColorStop(0, hex(colors[0], 0.85));
    hg.addColorStop(1, hex(colors[0], 0));
    ctx.fillStyle = hg; ctx.fill(); ctx.restore();

    const hotIdx = Math.floor(((Math.sin(t * 0.4) + 1) / 2) * (path.length - 1));
    const hp = path[hotIdx];
    if (hp) {
      const rg = ctx.createRadialGradient(hp.x, hp.y - thickness * 0.25, 0, hp.x, hp.y, thickness * 1.2);
      rg.addColorStop(0, hex(colors[0], 0.9));
      rg.addColorStop(0.4, hex(colors[1], 0.35));
      rg.addColorStop(1, hex(colors[1], 0));
      ctx.save(); outlinePath(); ctx.clip();
      ctx.fillStyle = rg;
      ctx.fillRect(hp.x - thickness * 2, hp.y - thickness * 2, thickness * 4, thickness * 4);
      ctx.restore();
    }
  }

  function frame() {
    if (!reduced) t += 0.006;
    ctx.clearRect(0, 0, w, h);
    const p = palette();
    const parallaxX = (mouseX - 0.5) * 30 * dpr;
    const parallaxY = (mouseY - 0.5) * 20 * dpr;
    ctx.save(); ctx.translate(parallaxX, parallaxY);
    drawRibbon({ yBase: h * 0.62, amp: h * 0.14, freq: 0.0022 / dpr, speed: 0.9,  phase: 0,   thickness: 130 * dpr, tilt: 0 }, p.a);
    drawRibbon({ yBase: h * 0.42, amp: h * 0.11, freq: 0.0028 / dpr, speed: -1.1, phase: 1.4, thickness: 95 * dpr,  tilt: -12 * dpr }, p.b);
    drawRibbon({ yBase: h * 0.82, amp: h * 0.06, freq: 0.0035 / dpr, speed: 0.7,  phase: 2.6, thickness: 55 * dpr,  tilt: 6 * dpr }, p.a);
    ctx.restore();
    if (!reduced) requestAnimationFrame(frame);
  }
  if (reduced) frame(); else requestAnimationFrame(frame);
})();

/* Contact cards */
document.querySelectorAll(".contact-card").forEach(card => {
  const label = card.getAttribute("aria-label")?.toLowerCase() || "";
  if (label.includes("email") && CONFIG.social.email) card.href = CONFIG.social.email;
  if (label.includes("github") && CONFIG.social.github) card.href = CONFIG.social.github;
  if (label.includes("linkedin") && CONFIG.social.linkedin) card.href = CONFIG.social.linkedin;
  if (label.includes("instagram") && CONFIG.social.instagram) card.href = CONFIG.social.instagram;
});
