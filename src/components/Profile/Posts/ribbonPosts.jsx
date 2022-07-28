import './ribbonPosts.css';
import { AvatarMini } from '../Avatar/avatar';


 
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

const RibbonPosts = (props) => {
  return (
    <div className='posts-menu'>
      {props.posts.postData.map(post => <Post avatar={post.avatar} date={post.date} time={post.time} message={post.message} img={post.img}/>)}
    </div>
  );
}

export {RibbonPosts, Post};
