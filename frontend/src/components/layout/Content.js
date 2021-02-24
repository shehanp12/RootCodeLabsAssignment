import React from "react";
import {Container, Grid, makeStyles} from "@material-ui/core";
import CreatePostSection from "../posts/CreatePostSection";
import Box from "@material-ui/core/Box";
import PostSection from "../posts/PostSection";

const Content = (props) => {
    const classes = useStyles();

    return (
        <Box m={3}>
            <Container className={classes.root} color={"primary"}>
                <Grid container
                      spacing={3}
                      direction={"column"}
                      justify={"center"}
                      alignItems={"center"}>

                    <Grid item>
                        <CreatePostSection/>
                    </Grid>

                    <Grid item>
                        <PostSection posts={props.posts}/>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
}

export default Content;

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    }
}))
