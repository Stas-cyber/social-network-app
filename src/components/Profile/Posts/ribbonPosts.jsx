import './ribbonPosts.css';
import { AvatarMini } from '../Avatar/avatar';

const postData= [
    {
      avatar: 'https://wallpaperengine.info/wp-content/uploads/2018/09/previewfile_1493910771.jpg',
      message: 'Hello World',
      date: '13 апреля',
      time: '12:45'
    },
    {
      avatar: 'https://wallpaperengine.info/wp-content/uploads/2018/09/previewfile_1493910771.jpg',
      message: 'Это я))',
      img: 'https://st2.depositphotos.com/1000647/8123/i/600/depositphotos_81232590-stock-photo-astronaut-in-outer-space.jpg',
      date: '16 июля',
      time: '17:01'
    }
]
 
const Post = (props) => {
  return (
      <div className="post">
        <div className="avar"><AvatarMini avatar={props.avatar}/></div>
        <p className='data'>добавалено {props.date} в {props.time}</p>
        <div className="messeng"><p>{props.message}</p></div>
        <div className='img-block'><img className='img-messeng' src={props.img} alt=""/></div>
      </div>
  );
}

const RibbonPosts = () => {
  return (
    <div className='posts-menu'>
      {postData.map(post => <Post avatar={post.avatar} date={post.date} time={post.time} message={post.message} img={post.img}/>)}
    </div>
  );
}

export {RibbonPosts, Post};
