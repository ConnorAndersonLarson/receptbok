import './Header.scss';
import { NavLink } from 'react-router-dom';

function Header() {

  return(
    <header class="App-header">
      <h1 class="title">Mormor's Receptbok</h1>
      <div className="btmbox">
        <div className="links">
          <NavLink exact to="/" className={({ isActive }) => "navBtn hovershdw" + (isActive ? "selected" : "selected")}>Home</NavLink>

        </div>
      </div>
    </header>
  )
};

export default Header;
