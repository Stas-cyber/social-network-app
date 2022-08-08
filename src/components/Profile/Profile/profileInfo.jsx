import React from "react";
import { addPostActionCreate, onPostActionCreate } from "../../../redux/profileReduser";
import { RibbonPosts } from "../Posts/ribbonPosts";
const ProfileInfo = (props) => {

    let newPostIn = React.createRef(); 
    
    let onPostChange = () => {
        let text = newPostIn.current.value;
         props.dispatch(onPostActionCreate(text));
     } 

    let addPost = () => {
        props.dispatch(addPostActionCreate());
        newPostIn.current.value = '';
        props.posts.newPost = '';
    }

    return (
        <div>
            <div className='profil-block'>
                <h3>Петр Петрович Петров</h3>
                <p>О себе: 28 лет, космонавт, живу в скафандре</p>
            </div>
            <div className="newPost">
              <textarea onChange={onPostChange} ref={newPostIn} className='newPostIn' value={props.newPost}></textarea>
              <button onClick={addPost} className= 'newPostBtn'>+</button>
            </div>
            <div className="ribPosts"><RibbonPosts posts={props.posts} /></div>
        </div>
    );
}

export default ProfileInfo;