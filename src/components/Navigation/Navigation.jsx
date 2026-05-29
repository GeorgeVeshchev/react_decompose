import './Navigation.css';

export function Navigation() {
  return (
    <nav className="navigation">
      <a href="/" className="navigation__link">
        Home
      </a>
      <a href="/articles" className="navigation__link">
        Articles
      </a>
      <a href="/about" className="navigation__link">
        About
      </a>
    </nav>
  );
}
