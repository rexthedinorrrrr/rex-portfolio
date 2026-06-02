import { NavLink } from 'react-router-dom';

function Header() {
  return (
    <header className="header">
      <NavLink to="/resume" className="brand">
        Yu-Jui Wang
      </NavLink>

      <nav className="nav">
        <NavLink to="/resume">Resume</NavLink>
        <NavLink to="/portfolio">Portfolio</NavLink>
      </nav>
    </header>
  );
}

export default Header;