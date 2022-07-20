import { Link } from 'react-router-dom';
import s from './ribbonMenu.module.css';

const RibbonMenu = () => {
  return (
      <div className={s.container}>
        <ul>
          <li className={s.li}><Link to="/profile">Моя Страница</Link></li>  
          <li className={s.li}><Link to="/news">Новости</Link></li>
          <li className={s.li}><Link to="/friends">Друзья</Link></li>
          <li className={s.li}><Link to="/sursribers">Подписчики</Link></li>
          <li className={s.li}><Link to="/messanges">Сообщения</Link></li>
          <li className={s.li}><a href=".">Музыка</a></li>
          <li className={s.li}><a href=".">Фотографии</a></li>
          <li className={s.li}><a href=".">Видео</a></li>
          <li className={s.li}><Link to="/settings">Настройки</Link></li>
        </ul>
      </div>
  );
}

export default RibbonMenu;
