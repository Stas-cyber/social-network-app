import { keyboard } from '@testing-library/user-event/dist/keyboard';
import BackgroundImg from '../Profile/Avatar/backgroundImg';
import './header.css';
import MenuBurger from './menuBurger';
const Header = () => {
  return (
    <div>
      <header>
        <div className="menu">
          <div><MenuBurger /></div>
          <div className='ul-header'>
            <p>Блог космонавта</p>
          </div>
        </div>
        <div className='search'>
          <input className='search-in' type={keyboard}></input>
          <button className='search-btn'>&#128269;</button>
        </div>
        <div className='log-in'>
          <button className='log-in-btn'>Войти</button>
        </div>
      </header>
      <BackgroundImg />
    </div>
  );
}

export default Header;
