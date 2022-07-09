import './ribbonMenu.css';

const RibbonMenu = () => {
  return (
      <div className='menu-block'>
        <ul className='ribbon-menu'>
          <li className="ribbon-list"><a href=".">Новости</a></li>
          <li className="ribbon-list"><a href=".">Друзья</a></li>
          <li className="ribbon-list"><a href=".">Подписчики</a></li>
          <li className="ribbon-list"><a href=".">Сообщения</a></li>
          <li className="ribbon-list"><a href=".">Музыка</a></li>
          <li className="ribbon-list"><a href=".">Фотографии</a></li>
          <li className="ribbon-list"><a href=".">Видео</a></li>
        </ul>
        
      </div>
  );
}

export default RibbonMenu;
