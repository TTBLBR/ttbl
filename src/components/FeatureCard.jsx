import Link from 'next/link';

export default function FeatureCard({ href, title, text, icon }) {
  return (
    <Link href={href} className="feature-card">
      <div className="feature-icon" aria-hidden="true">{icon}</div>
      <h3>{title}</h3>
      <p>{text}</p>
      <span className="feature-arrow">→</span>
    </Link>
  );
}
