const initialState = [
    // {title: "This is first post ", description: "This is description. you can see the details here", titleColor: "BLUE", comments: [
    //         "This is the first comment",
    //         "This is the second commend"
    //     ]},
    // {title: "This is second post", description: "This is description. you can see the details here", titleColor: "YELLOW", comments: [
    //         "This is the first comment",
    //         "This is the second commend"
    //     ]},
];

const postReducer = (posts = initialState, action) => {
    switch(action.type){
        case "FETCH_ALL":
            return action.payload;
        case "ADD_POST":
            return [...posts, action.payload];
        case "ADD_COMMENT":
            const postIndex = posts.findIndex((post)=> post.id === action.payload.id);
            let newPostList = posts.slice();
            newPostList[postIndex] = action.payload;
            return newPostList;
        default:
            return posts;
    }
}

export default postReducer;
