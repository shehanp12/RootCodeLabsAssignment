import React, {useState} from "react";
import Button from "@material-ui/core/Button";
import CreatePostModal from "./CreatePostModal";
import {addPost} from "../../../repositories/postRepository";
import {useDispatch} from "react-redux";

const CreatePostSection = () => {
    const [isCreatePostVisible, setCreatePostVisible] = useState(false);
    const dispatch = useDispatch();

    const openCreatePostModal = () => {
        setCreatePostVisible(true);
    }

    const closeCreatePostModal = () => {
        setCreatePostVisible(false);
    }

    const handleAddPost = (post) => {
        dispatch(addPost(post));
        closeCreatePostModal();
    }

    return(
        <React.Fragment>
                <Button variant="contained"
                        color="primary"
                        fullWidth={true}
                        onClick={openCreatePostModal}>
                    Create New Post
                </Button>
            {isCreatePostVisible && <CreatePostModal
                    open={isCreatePostVisible}
                    handleClose={closeCreatePostModal}
                    handleAddPost={handleAddPost}
                />}
        </React.Fragment>
    );
}

export default CreatePostSection;
