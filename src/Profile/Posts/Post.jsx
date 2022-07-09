import  './ribbonPosts.css';
import { AvatarMini } from '../Avatar/avatar';

const Post = (props) => {
  return (
      <div className="post">
        <div className="avar"><AvatarMini/></div>
        <p className='data'>добавалено 5 июля в 12:55</p>
        <div className="messeng"><p>{props.message}</p></div>
        <div className='img-block'><img className='img-messeng' src={props.img}/></div>
      </div>
  );
}

export default Post;