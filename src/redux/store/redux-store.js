import {combineReducers, legacy_createStore as createStore} from "redux";
import { dialogsReducer } from "../Reducers/dialogsReducer";
import friendsReducer from "../Reducers/friendsReducer";
import NewsReducer from "../Reducers/newsReducer";
import { profileReducer } from "../Reducers/profileReducer";
import surscribersReducer from "../Reducers/surscribersReducer";


let reducers = combineReducers({
   
    PostPage: profileReducer,
    MessangePage: dialogsReducer,
    NewsPage: NewsReducer,
    FriendsPage: friendsReducer,
    SurscribersPage: surscribersReducer
    
})

const store = createStore(reducers);

window.store = store;

export default store;