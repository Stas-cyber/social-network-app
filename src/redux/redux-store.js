import {combineReducers, legacy_createStore as createStore} from "redux";
import {dialogsReducer} from './dialogsReducer'
import {profileReducer} from './profileReducer'

let reducers = combineReducers({
   
    PostPage: profileReducer,
    MessangePage: dialogsReducer,
    
})

const store = createStore(reducers)

export default store;