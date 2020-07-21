import React from 'react'
import {CircularProgress, Button, AppBar, Grid, Paper, Card, CardActions, Typography, CardContent, CardMedia, CardActionArea } from '@material-ui/core';
import SendIcon from '@material-ui/icons/Send';
import StarBorder from '@material-ui/icons/StarBorder';
import { makeStyles } from '@material-ui/core/styles';
import AddIcon from '@material-ui/icons/Add';
import IconButton from '@material-ui/core/IconButton';

const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
        padding: 0,
        margin: 0,
        // paddingLeft: 0,
        // paddingRight: 0
      },
    paper: {
      paddingBottom: 50
    },
    grid:{
        padding: 0,
        maxHeight: "auto",
        maxWidth: "100%",
    },
    list: {
        marginBottom: theme.spacing(1),
        marginTop: theme.spacing(1),
    },
    subheader: {
        backgroundColor: theme.palette.background.paper,
    },
    details: {
        display: 'flex',
        flexDirection: 'column',
    },
    typography: {
        width:"100%",
        flexDirection: 'row',
    },
    map: {
        width:"50%",
        height: "100%"
    },
    media: {
        height: "120px"
    }
  }));
const Tricks = () => {
    const classes = useStyles()

    return (
        <>
        <Typography variant="h3">
            Tricks
            
            <IconButton color="secondary" aria-label="add trick" edge="end">
                <AddIcon />
            </IconButton>
        </Typography>

        <Card className={classes.root}>
                    <div className={classes.details}>
                    <CardActionArea>
                        <CardContent style={{padding:"0", margin: "0" }}>
                            <Typography gutterBottom variant="h5" component="h2" >
                               50-50 Grind
                            </Typography>
                            <Typography variant="body2" color="textSecondary" component="p" >                             
                                <b>Level: </b> Intermediate
                            </Typography>
                            <Typography variant="body2" color="textSecondary" component="p">
                                <b>created by:</b> <b>2</b>
                            </Typography>
                        <CardMedia
                            component="img"
                            // className={classes.media}
                            image="/rails-default.jpg"
                            title="Rail Default"
                            // height="100"
                            width="151"
                        />
                        </CardContent>
                    </CardActionArea>
                    <CardActions>
                        <Button size="small" color="primary">
                            <StarBorder/>
                        </Button>
                        <Button size="small" color="primary" alignItem="flex-end">                                     
                            <SendIcon />
                        </Button>
                    </CardActions>
                    </div>
                </Card> 
                <Card className={classes.root}>
                    <div className={classes.details}>
                    <CardActionArea>
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="h2" >
                               KickFlip to Backslide
                            </Typography>
                            <Typography variant="body2" color="textSecondary" component="p" >                             
                                <b>Level: </b> Advanced
                            </Typography>
                            <Typography variant="body2" color="textSecondary" component="p">
                                <b>created by:</b> <b>2</b>
                            </Typography>
                        <CardMedia
                            component="img"
                            // className={classes.media}
                            image="/rails-default.jpg"
                            title="Rail Default"
                            // height="100"
                            width="151"
                        />
                        </CardContent>
                    </CardActionArea>
                    <CardActions>
                        <Button size="small" color="primary">
                            <StarBorder/>
                        </Button>
                        <Button size="small" color="primary" alignItem="flex-end">                                     
                            <SendIcon />
                        </Button>
                    </CardActions>
                    </div>
                </Card> 
                <Card className={classes.root}>
                    <div className={classes.details}>
                    <CardActionArea>
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="h2" >
                               NoseGrind
                            </Typography>
                            <Typography variant="body2" color="textSecondary" component="p" >                             
                                <b>Level: </b> Beginner
                            </Typography>
                            <Typography variant="body2" color="textSecondary" component="p">
                                <b>created by:</b> <b>2</b>
                            </Typography>
                        <CardMedia
                            component="img"
                            // className={classes.media}
                            image="/rails-default.jpg"
                            title="Rail Default"
                            // height="100"
                            width="151"
                        />
                        </CardContent>
                    </CardActionArea>
                    <CardActions>
                        <Button size="small" color="primary">
                            <StarBorder/>
                        </Button>
                        <Button size="small" color="primary" alignItem="flex-end">                                     
                            <SendIcon />
                        </Button>
                    </CardActions>
                    </div>
                </Card> 
        </>
    )
}
export default Tricks