import React, {useState} from "react";
import Modal from "@material-ui/core/Modal";
import {makeStyles,TextField, Button, Typography, Paper} from "@material-ui/core";
import Box from "@material-ui/core/Box";

const CreatePostModal = (props) => {
    const classes = useStyles();
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [titleColor, setTitleColor] = useState("primary");

    const onSubmit = (event) => {
        event.preventDefault();
        if(title!=="" && description!==""){
            const newPost = {
                title,
                description,
                titleColor,
            }
            props.handleAddPost(newPost);
        }else{
            alert("Please enter title and description");
        }
    }

    return (
        <Modal
            open={props.open}
            onClose={props.handleClose}
            aria-labelledby="simple-modal-title"
            aria-describedby="simple-modal-description"
        >
            <Paper className={classes.paper}>
                <form autoComplete="off" noValidate className={`${classes.root} ${classes.form}`}
                      onSubmit={onSubmit}
                >
                    <Box m={2}>
                        <Typography variant="h6" color="textSecondary" component="h2">
                            Create Post
                        </Typography>
                    </Box>
                    <Box m={2}>
                        <TextField name="creator" variant="outlined" label="Title" value={title} fullWidth={true}
                                   onChange={
                                       (event)=> setTitle(event.target.value)
                                   }/>
                    </Box>
                    <Box m={2}>
                        <TextField name="message" variant="outlined" label="Description" value={description} fullWidth={true}
                                   onChange={
                                       (event)=> setDescription(event.target.value)
                                   }/>
                    </Box>
                    <Box m={2}>
                        <Button className={classes.buttonSubmit} variant="contained" color="primary" size="large"
                                type="submit"
                                fullWidth>
                            Submit</Button>
                    </Box>
                </form>
            </Paper>
        </Modal>
    );
}

export default CreatePostModal;


const useStyles = makeStyles((theme) => ({
    paper: {
        position: 'absolute',
        top:"50%",
        left:"50%",
        transform:"translate(-50%,-50%)",
        width: 400,
        backgroundColor: theme.palette.background.paper,
        border: '2px solid #000',
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
    },
}));