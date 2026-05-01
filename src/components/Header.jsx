import Image from 'next/image';
import Link from 'next/link';

const navItems = [
  { href: '/', label: 'Início' },
  { href: '/calendarios', label: 'Calendários' },
  { href: '/categorias', label: 'Categorias' },
  { href: '/ranking', label: 'Ranking' },
  { href: '/regras', label: 'Regras' },
  { href: '/quem-somos', label: 'Quem Somos' }
];

export default function Header() {
  return (
    <header className="site-header">
      <Link href="/" className="brand-mini" aria-label="TTBL Home">
        <Image src="/logo-ttbl.png" alt="TTBL" width={220} height={92} priority />
      </Link>

      <nav className="top-nav">
        {navItems.map((item) => (
          <Link key={item.href} href={item.href}>
            {item.label}
          </Link>
        ))}
      </nav>

      <a className="outline-button" href="#cta-final">
        Entrar
      </a>
    </header>
  );
}
