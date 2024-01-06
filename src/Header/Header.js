import './Header.scss';
import { NavLink } from 'react-router-dom';

function Header() {

  return(
    <header className="App-header">
      <h1>Mormor's Receptbok</h1>
      <div className="btmbox">
        <div className="links">
          <NavLink exact to='/' className="navBtn hovershdw" activeClassName="selected">Home</NavLink>
        </div>
      </div>
    </header>
  )
};

export default Header;
