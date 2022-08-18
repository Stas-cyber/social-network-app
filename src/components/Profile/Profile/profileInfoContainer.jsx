import { addPostActionCreate, onPostActionCreate } from "../../../redux/Reducers/profileReducer";
import {connect} from "react-redux";
import ProfileInfo from "./profileInfo";

// const ProfileInfoContainer = (props) => {
//     return (<MyContext.Consumer>
//         {
//             (store) => {
//                 let onPostChange = (text) => {
//                     store.dispatch(onPostActionCreate(text));
//                 }

//                 let addPost = () => {
//                     store.dispatch(addPostActionCreate());
//                 }

//               return <ProfileInfo newPostText={onPostChange} addPost={addPost} state={store.getState()} />
//             }
//         }
//     </MyContext.Consumer>
//     );
// }

let mapStateToProps = (state) => {
    return {
        state: state
    }
    
}

let mapDispatchToProps = (dispatch) => {
    return {
        newPostText: text => dispatch(onPostActionCreate(text)),
        addPost: () => dispatch(addPostActionCreate())
        
    }
}
const ProfileInfoContainer = connect(mapStateToProps, mapDispatchToProps)(ProfileInfo);

export default ProfileInfoContainer;