import Link from 'next/link';
import Header from './Header';
import NeonBackground from './NeonBackground';

export default function InternalPage({ eyebrow, title, description }) {
  return (
    <main className="page-shell internal-shell">
      <NeonBackground className="internal-neon" />
      <Header />
      <section className="internal-hero container">
        <p className="eyebrow">{eyebrow}</p>
        <h1>{title}</h1>
        <p className="internal-copy">{description}</p>
        <div className="internal-actions">
          <Link href="/" className="solid-button">Voltar para início</Link>
          <span className="tag-pill">Página pronta para edição</span>
        </div>
      </section>

      <section className="internal-card container">
        <div>
          <h2>Estrutura preparada</h2>
          <p>
            Esta página já está criada dentro do projeto em Next.js. Depois você pode editar
            textos, imagens, blocos, tabelas e qualquer outro conteúdo sem mexer na home.
          </p>
        </div>
        <div className="internal-placeholder-grid">
          <div className="placeholder-box" />
          <div className="placeholder-box" />
          <div className="placeholder-box large" />
        </div>
      </section>
    </main>
  );
}
