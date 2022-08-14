import React from "react";
import { addPostActionCreate, onPostActionCreate } from "../../../redux/profileReducer";
import ProfileInfo from "./profileInfo";

const ProfileInfoContainer = (props) => { 
    
    let onPostChange = (text) => {
        props.store.dispatch(onPostActionCreate(text));
    } 

    let addPost = () => {
        props.store.dispatch(addPostActionCreate());
    }

    return (
        <ProfileInfo newPostText={onPostChange} addPost={addPost} store={props.store} state={props.state}/>
    );
}

export default ProfileInfoContainer;