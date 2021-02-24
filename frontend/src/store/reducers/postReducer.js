const initialState = [
];

const postReducer = (posts = initialState, action) => {
    switch(action.type){
        case "FETCH_ALL":
            return action.payload.data;
        case "ADD_POST":
            return [...posts, action.payload.data];
        case "ADD_COMMENT":
            const postIndex = posts.findIndex((post)=> post.id === action.payload.data.id);
            let newPostList = posts.slice();
            newPostList[postIndex] = action.payload.data;
            return newPostList;
        default:
            return posts;
    }
}

export default postReducer;