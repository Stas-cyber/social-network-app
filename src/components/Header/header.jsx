import BackgroundImg from '../Profile/Avatar/backgroundImg';
import MenuBurger from '../Profile/Menu/Burger menu/menuBurger';
import './header.css';



import MenuBurger from './menuBurger';


const Avatar = (props) => {
  return (
    <div className='avatarBlock'>

      <img src={props.avatar} alt="" />
    </div>
  );

      <img src={props.avatar} alt=""/>
    </div>
);

}

const Header = () => {
  return (
    <div>
      <header>

        <div className="menu">
          <div><MenuBurger /></div>
          <p>Блог космонавта</p>
        </div>
        <div className='search'>
          <input className='search-in' type='keyboard'></input>
          <button className='search-btn'>&#128269;</button>
        </div>
        <div className='log-in'>

          <Avatar avatar='https://wallpaperengine.info/wp-content/uploads/2018/09/previewfile_1493910771.jpg' />
        </div>


          <Avatar avatar='https://wallpaperengine.info/wp-content/uploads/2018/09/previewfile_1493910771.jpg'/>
        </div>
        

      </header>
      <BackgroundImg />
    </div>
  );
}

export default Header;
