import { NavLink } from 'react-router-dom';
import dinoIcon from '../assets/Dino.svg';

function Header() {
  return (
    <header className="header">
      <NavLink to="/resume" className="brand">
        <img src={dinoIcon} alt="Dino Icon" className="brandIconImage" />
        <span>  Yu-Jui Wang</span>
      </NavLink>

      <nav className="nav">
        <NavLink to="/resume">Resume</NavLink>
        <NavLink to="/portfolio">Portfolio</NavLink>
      </nav>
    </header>
  );
}

export default Header;