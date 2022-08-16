import React from "react";
import MyContext from "../../../context";
import { addPostActionCreate, onPostActionCreate } from "../../../redux/Reducers/profileReducer";

import ProfileInfo from "./profileInfo";

const ProfileInfoContainer = (props) => {
    return (<MyContext.Consumer>
        {
            (store) => {
                let onPostChange = (text) => {
                    store.dispatch(onPostActionCreate(text));
                }

                let addPost = () => {
                    store.dispatch(addPostActionCreate());
                }

                return <ProfileInfo newPostText={onPostChange} addPost={addPost} state={store.getState()} />
            }
        }
    </MyContext.Consumer>
    );
}

export default ProfileInfoContainer;