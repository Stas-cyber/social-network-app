
import './menuStyle.css';

const openMenu = () => {
    
}

const MenuBurger = () => {
    return (
    <div onClick={openMenu} className="hamburger">
        <div className="poloska"></div>
        <div className="poloska"></div>
        <div className="poloska"></div>








        {/* <input id="menu__toggle" type={'checkbox'}/>
        <label className="menu__btn" for="menu__toggle">
            <span></span>
        </label> */}
  
        {/* <ul className="menu__box">
          <li className="menu__item"><a href=".">Новости</a></li>
          <li className="menu__item"><a href=".">Друзья</a></li>
          <li className="menu__item"><a href=".">Подписчики</a></li>
          <li className="menu__item"><a href=".">Сообщения</a></li>
          <li className="menu__item"><a href=".">Музыка</a></li>
          <li className="menu__item"><a href=".">Фотографии</a></li>
          <li className="menu__item"><a href=".">Видео</a></li>
        </ul> */}
        
    </div>
    );
  }
  
  export default MenuBurger;