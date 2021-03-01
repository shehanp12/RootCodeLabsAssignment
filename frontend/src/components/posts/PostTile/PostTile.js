import React from "react";
import CardContent from "@material-ui/core/CardContent";
import Card from "@material-ui/core/Card";
import Typography from "@material-ui/core/Typography";
import { CardActions} from "@material-ui/core";
import useStyles from './styles';
const PostTile = (props) => {
    const classes = useStyles();
    return (
        <Card className={classes.card} onClick={()=>props.openPost(props.post)}>
            <div className={classes.overlay2}>

            </div>
            <div className={classes.details}>
                <Typography variant="body2" color="textSecondary" component="h2"/>
            </div>
            <Typography className={classes.title} gutterBottom variant="h5" component="h2">{props.post.title}</Typography>
            <CardContent>
                <Typography variant="body2" color="textSecondary" component="p">{props.post.description}</Typography>
            </CardContent>
            <CardActions className={classes.cardActions}>

            </CardActions>
        </Card>
    );
}

export default PostTile;
