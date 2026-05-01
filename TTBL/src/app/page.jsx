const JOTFORM_URL = "https://form.jotform.com/truebodybuilding/RIOZEROUM";

const navItems = [
  { label: "INÍCIO", href: "#inicio" },
  { label: "CALENDÁRIOS", href: "/calendarios" },
  { label: "CATEGORIAS", href: "/categorias" },
  { label: "RANKING", href: "/ranking" },
  { label: "REGRAS", href: "/regras" },
  { label: "QUEM SOMOS", href: "/quem-somos" }
];

const cards = [
  {
    icon: "▣",
    title: "CALENDÁRIOS",
    text: "Acompanhe datas, etapas e locais da temporada.",
    href: "/calendarios"
  },
  {
    icon: "🏆",
    title: "CATEGORIAS",
    text: "Conheça todas as categorias e divisões oficiais.",
    href: "/categorias"
  },
  {
    icon: "▤",
    title: "REGRAS",
    text: "Consulte o regulamento oficial e critérios de avaliação.",
    href: "/regras"
  },
  {
    icon: "◉",
    title: "QUEM SOMOS",
    text: "Nossa missão, valores e o propósito por trás da liga.",
    href: "/quem-somos"
  },
  {
    icon: "★",
    title: "RANKING",
    text: "Veja os atletas, posições e o ranking oficial da temporada.",
    href: "/ranking"
  }
];

function Barbell({ side }) {
  return (
    <div className={`barbell barbell-${side}`} aria-hidden="true">
      <div className="plate-stack plate-top">
        <span />
        <span />
        <span />
      </div>
      <div className="bar-shaft">
        <i />
      </div>
      <div className="plate-stack plate-bottom">
        <span />
        <span />
        <span />
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <main id="inicio" className="site-shell">
      <div className="page-glow" aria-hidden="true" />
      <div className="noise-free-bg" aria-hidden="true" />

      <header className="topbar">
        <a href="#inicio" className="mini-logo" aria-label="TTBL home">
          <img src="/logo-ttbl.png" alt="TTBL" />
        </a>

        <nav className="desktop-nav" aria-label="Menu principal">
          {navItems.map((item, index) => (
            <a key={item.label} href={item.href} className={index === 0 ? "active" : ""}>
              {item.label}
            </a>
          ))}
        </nav>

        <a className="login-pill" href={JOTFORM_URL} target="_blank" rel="noreferrer">
          Entrar
        </a>
      </header>

      <section className="hero" aria-label="The True Bodybuilding League">
        <Barbell side="left" />
        <Barbell side="right" />

        <svg className="neon-lines" viewBox="0 0 1000 620" preserveAspectRatio="none" aria-hidden="true">
          <path d="M90 170 C 210 70, 250 310, 390 260 C 520 214, 530 360, 690 190 C 760 112, 820 92, 890 52" />
          <path d="M30 370 C 220 240, 350 525, 510 360 C 650 215, 760 330, 980 245" />
          <path d="M720 20 C 890 140, 725 260, 960 420 C 1090 505, 820 540, 925 620" />
          <path d="M0 590 C 190 515, 270 705, 430 545 C 585 388, 790 545, 1010 470" />
        </svg>

        <div className="hero-content">
          <img className="main-logo" src="/logo-ttbl.png" alt="The True Bodybuilding League" />
        </div>
      </section>

      <a className="event-card" href="/rio-zero-um" aria-label="Abrir página Rio Zero Um">
        <div className="event-copy">
          <span className="eyebrow">Evento destaque</span>
          <img className="rio-logo" src="/logo-rio-zero-um.png" alt="Rio Zero Um" />
          <p>A primeira edição. O início de uma lenda.</p>
          <strong>Rio de Janeiro · Brasil</strong>
          <span className="outline-button fake-button">
            Saiba mais <span>›</span>
          </span>
        </div>
        <div className="rio-visual" aria-hidden="true">
          <div className="christ">✦</div>
          <div className="hill" />
          <div className="sun" />
        </div>
      </a>

      <section className="quick-grid quick-grid-five" aria-label="Opções principais">
        {cards.map((card) => (
          <a className="quick-card" href={card.href} key={card.title}>
            <span className="card-icon">{card.icon}</span>
            <h2>{card.title}</h2>
            <p>{card.text}</p>
            <span className="arrow">→</span>
          </a>
        ))}
      </section>

      <section className="cta-section" aria-label="Chamada final">
        <svg className="bottom-lines" viewBox="0 0 1000 300" preserveAspectRatio="none" aria-hidden="true">
          <path d="M-40 260 C 160 125, 285 335, 470 175 C 600 64, 700 170, 1040 55" />
          <path d="M-20 80 C 180 220, 390 20, 555 110 C 730 205, 810 122, 1040 238" />
        </svg>
        <h1>Venha fazer<br />parte da revolução</h1>
        <p>O palco é nosso. A história começa aqui.</p>
        <a className="primary-button" href={JOTFORM_URL} target="_blank" rel="noreferrer">
          Garanta seu lugar <span>›</span>
        </a>
      </section>
    </main>
  );
}
