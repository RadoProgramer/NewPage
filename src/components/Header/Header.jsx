import { Link } from 'react-router-dom';
import './Header.css';

function Header() {
  return (
    <header className="header">
      <div className="logo">
        <Link to="/">LOGO</Link>
      </div>
      <nav className="menu">
        <ul className="menu-list">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about-my-company">About my Company</Link></li>
          <li><Link to="/price-list">Price-list</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;