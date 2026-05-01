export default function InternalPage({ title, description }) {
  return (
    <main className="internal-page">
      <section className="internal-card">
        <img src="/logo-ttbl.png" alt="TTBL" />
        <h1>{title}</h1>
        <p>{description}</p>
        <a className="back-link" href="/">← Voltar para a front page</a>
      </section>
    </main>
  );
}
