import Image from 'next/image';
import Link from 'next/link';
import Header from '@/components/Header';
import NeonBackground from '@/components/NeonBackground';
import BarbellColumn from '@/components/BarbellColumn';
import FeatureCard from '@/components/FeatureCard';

const cards = [
  {
    href: '/calendarios',
    title: 'Calendários',
    text: 'Acompanhe etapas, datas e locais da temporada.',
    icon: '◫'
  },
  {
    href: '/categorias',
    title: 'Categorias',
    text: 'Conheça as categorias e divisões oficiais.',
    icon: '⌂'
  },
  {
    href: '/regras',
    title: 'Regras',
    text: 'Consulte o regulamento e critérios de avaliação.',
    icon: '≣'
  },
  {
    href: '/quem-somos',
    title: 'Quem somos',
    text: 'Missão, valores e proposta da liga.',
    icon: '◉'
  },
  {
    href: '/ranking',
    title: 'Ranking',
    text: 'Veja atletas, posições e ranking oficial.',
    icon: '✦'
  }
];

export default function Home() {
  return (
    <main className="page-shell">
      <NeonBackground />
      <Header />

      <section className="hero-section container">
        <BarbellColumn side="left" />
        <BarbellColumn side="right" />

        <div className="hero-center">
          <div className="main-logo-wrap">
            <Image
              src="/logo-ttbl.png"
              alt="TTBL The True Bodybuilding League"
              width={860}
              height={360}
              priority
              className="main-logo"
            />
          </div>
        </div>
      </section>

      <section className="event-section container">
        <Link href="/rio-zero-um" className="event-card">
          <div className="event-copy">
            <span className="eyebrow">Evento destaque</span>
            <div className="rio-logo-box">
              <Image
                src="/logo-rio-zero-um.png"
                alt="Rio Zero Um"
                width={380}
                height={190}
                className="rio-logo"
              />
            </div>
            <p className="event-text">A primeira edição. O início de uma lenda.</p>
            <p className="event-location">Rio de Janeiro · Brasil</p>
            <span className="solid-button small">Abrir página</span>
          </div>
          <div className="event-visual">
            <div className="event-glow" />
            <div className="event-sun" />
            <div className="event-mountain mountain-1" />
            <div className="event-mountain mountain-2" />
            <div className="event-mountain mountain-3" />
            <div className="christ-shape">
              <span className="head" />
              <span className="arms" />
              <span className="body" />
            </div>
          </div>
        </Link>
      </section>

      <section className="cards-section container">
        <div className="cards-grid">
          {cards.map((card) => (
            <FeatureCard key={card.href} {...card} />
          ))}
        </div>
      </section>

      <section id="cta-final" className="cta-section container">
        <div className="cta-card">
          <p className="eyebrow">TTBL</p>
          <h2>Venha fazer parte da revolução</h2>
          <p>
            O palco é nosso. A história começa aqui. Estrutura pronta para crescer com novas
            páginas, ranking, calendário e todas as informações da TTBL.
          </p>
          <div className="cta-actions">
            <a
              href="https://form.jotform.com/truebodybuilding/RIOZEROUM"
              target="_blank"
              rel="noreferrer"
              className="solid-button"
            >
              Inscrição e ingressos
            </a>
            <Link href="/rio-zero-um" className="ghost-button">Conhecer o evento</Link>
          </div>
        </div>
      </section>
    </main>
  );
}
