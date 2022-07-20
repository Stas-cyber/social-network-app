import './avatar.css';

const Avatar = () => {
  return (
      <div className='avatar-block'>
        <img src='https://wallpaperengine.info/wp-content/uploads/2018/09/previewfile_1493910771.jpg'/>
      </div>
  );
}
const AvatarMini = (props) => {
  return (
      <div className='avatarMini-block'>
        <img src={props.avatar}/>
      </div>
  );
}

export {Avatar, AvatarMini};
