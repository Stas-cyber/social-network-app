import './backgroundImg.css';
import { Avatar } from './avatar';

const BackgroundImg = () => {
  return (
    <div className='block'>
      <img className='img-background' src='https://wpapers.ru/wallpapers/Space/15826/1920x1080_%D0%97%D0%B5%D0%BC%D0%BD%D0%BE%D0%B9-%D1%88%D0%B0%D1%80.jpg' />
      <Avatar/>
    </div>
  );
}

export default BackgroundImg;
