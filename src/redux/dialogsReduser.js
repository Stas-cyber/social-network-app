const ADD_MESS = 'ADD-MESS';
const UPDATE_NEW_MESS = 'UPDATE-NEW-MESS';

const dialogsReducer = (state, action) => {
    switch (action.type) {
        case ADD_MESS:
            let addNewMess = {
                img: 'https://wallpaperengine.info/wp-content/uploads/2018/09/previewfile_1493910771.jpg',
                mess: state.newMess,
            };
            state.usersMessanges.push(addNewMess);
            return state;
        case UPDATE_NEW_MESS:
            state.newMess = action.newText;
            return state;
        default: return state;
    }
}
//https://lastfm.freetls.fastly.net/i/u/500x500/d866130089f2a60288f92032f3f29c0f.jpg
export const onMessActionCreate = (text) => ({ type: UPDATE_NEW_MESS, newText: text })
export const addMessActionCreate = () => ({ type: ADD_MESS });

export default dialogsReducer;