import {fetchPosts, createPost} from "../services/API";
import {fetchPostAction} from "../store/actions/postActions";

export const getPosts = () => async (dispatch) => {
    try{
        const res = await fetchPosts();
        dispatch(fetchPostAction(res));
    }catch (e) {
        console.log(e);
    }
}
export const addPost = (newPost) =>  async (dispatch) => {
    try {
        const res = await createPost(newPost);
        dispatch(addPost(res));
    }catch (e) {
        console.log(e);
    }
}

export const addComment = (postId, comment) => async  (dispatch) => {
    try{

    }catch (e) {

    }
}
