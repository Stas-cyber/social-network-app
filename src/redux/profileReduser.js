const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST = 'UPDATE-NEW-POST';

const profileReducer = (state, action) => {
    switch (action.type) {
        case ADD_POST:
            let addNewPost = {
                avatar: 'https://wallpaperengine.info/wp-content/uploads/2018/09/previewfile_1493910771.jpg',
                message: state.newPost,
                date: '23 июля',
                time: '12:45'
            };
            state.postData.unshift(addNewPost);
            return state;
        case UPDATE_NEW_POST:
            state.newPost = action.newText;
            return state;
        default: return state;
    }
}

export const onPostActionCreate = (text) => ({type: UPDATE_NEW_POST, newText: text});
export const addPostActionCreate = () => ({type: ADD_POST});

export default profileReducer;