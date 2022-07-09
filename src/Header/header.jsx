import { keyboard } from '@testing-library/user-event/dist/keyboard';
import './header.css';

const Header = () => {
  return (
    <header>

      <div className="menu">
        <ul className='ul-header'>
          <li><a href='.'>Моя страница</a></li>
          <li><a href='.'>Настройки</a></li>
        </ul>
      </div>
      <div className='search'>
        <input className='search-in' type={keyboard}></input>
        <button className='search-btn'>&#128269;</button>
      </div>
      <div className='log-in'>
        <button className='log-in-btn'>Войти</button>
      </div>
    </header>
  );
}

export default Header;
