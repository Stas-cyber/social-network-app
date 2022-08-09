
import { Link } from 'react-router-dom';
import './menuStyle.css';


const MenuBurger = () => {
    return (
    <div  className="hamburger">

         <input id="menu-toggle" type={'checkbox'}/>
        <label className="menu-btn" for="menu-toggle">
            <span></span>
        </label> 
  
         <ul className="menu-box">
         <li className="menu-item"><Link to="/">Моя Страница</Link></li> 
          <li className="menu-item"><Link to="news">Новости</Link></li>
          <li className="menu-item"><Link to="/friends">Друзья</Link></li>
          <li className="menu-item"><Link to="/sursribers">Подписчики</Link></li>
          <li className="menu-item"><Link to="/messanges/*">Сообщения</Link></li>
          <li className="menu-item"><Link to="/music">Музыка</Link></li>
          <li className="menu-item"><Link to="/fotos">Фотографии</Link></li>
          <li className="menu-item"><Link to="/videos">Видео</Link></li>
          <li className="menu-item"><Link to="/settings">Настройки</Link></li>
        </ul> 
        
    </div>
    );
  }
  
  export default MenuBurger;