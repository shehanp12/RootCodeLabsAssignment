import React, {useEffect, useState} from "react";
import PostTile from "./PostTile/PostTile";
import Box from "@material-ui/core/Box";
import PostModal from "./PostModal";
import {useDispatch, useSelector} from "react-redux";
import {getPosts} from "../../repositories/postRepository";

const PostSection = (props) => {
    const [selectedPost, setSelectedPost] = useState(null);
    const posts = useSelector((state) => state.posts);
    const dispatch = useDispatch();

    const openSelectedPost = (post) => {
        setSelectedPost(post);
    }

    const closeSelectedPost = () => {
        setSelectedPost(null);
    }

    useEffect(()=>{
        dispatch(getPosts());
    },[posts]);

    return (
        <React.Fragment>
            {posts.map((post, index)=> {
                return (
                    <Box m={3}>
                        <PostTile key={index} post={post} openPost={openSelectedPost}/>
                    </Box>
                );
            })}
            {selectedPost && <PostModal
                open={selectedPost}
                handleClose={closeSelectedPost}
                selectedPost={selectedPost}
            />}
        </React.Fragment>
    );
}

export default PostSection;