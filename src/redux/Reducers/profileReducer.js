const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST = 'UPDATE-NEW-POST';

let initialState = {
    postData: [
        {
            avatar: 'https://wallpaperengine.info/wp-content/uploads/2018/09/previewfile_1493910771.jpg',
            message: 'Hello World',
            img: '',
            date: '13 июля',
            time: '12:45'
            },
            {
            avatar: 'https://wallpaperengine.info/wp-content/uploads/2018/09/previewfile_1493910771.jpg',
            message: 'Это я))',
            img: 'https://st2.depositphotos.com/1000647/8123/i/600/depositphotos_81232590-stock-photo-astronaut-in-outer-space.jpg',
            date: '16 мая',
            time: '17:01'
            }
    ],
    newPost: ''
}

const profileReducer = (state = initialState, action) => {
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

const onPostActionCreate = (text) => ({type: UPDATE_NEW_POST, newText: text});
const addPostActionCreate = () => ({type: ADD_POST});

export {profileReducer, onPostActionCreate, addPostActionCreate};