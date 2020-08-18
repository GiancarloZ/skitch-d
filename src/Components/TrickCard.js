import React from 'react'
import {CircularProgress, Button, AppBar, Grid, Paper, Card, CardActions, Typography, CardContent, CardMedia, CardActionArea, CardHeader } from '@material-ui/core';
import SendIcon from '@material-ui/icons/Send';
import StarBorder from '@material-ui/icons/StarBorder';
import { makeStyles } from '@material-ui/core/styles';
import { Root, Preview, Footer, GlobalStyle, Cam, FormStyle, Video } from "../Pages/styles";
import MoreVertIcon from '@material-ui/icons/MoreVert';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import { red } from '@material-ui/core/colors';
const useStyles = makeStyles(theme => ({
    root: {
        // display: "flex",
        padding: 0,
        margin: 0,
        maxWidth: "100%",
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
        // display: 'flex',
        // flexDirection: 'row',
    },
    typography: {
        width:"100%",
        // flexDirection: 'row',
    },
    map: {
        width:"50%",
        height: "100%"
    },
    media: {
        width: "100%",
        height: "100%"
    },
    avatar: {
        backgroundColor: red[500],
      },
  }));
const TrickCard = props => {
    const {history, p} = props;
    const classes = useStyles()
    const {id, name, ride, video, user_id, spot_id, created_at} = p
    // const videoUrl = JSON.parse(video).secure_url
    const handleOnClick = () => {
        history.push(`/`)
    }
  
    return(
        <React.Fragment key={id}>
            {/* <Grid className={classes.grid}>  </Grid> */}

            <Card className={classes.root} onClick={handleOnClick}>
            <CardHeader
                avatar={
                    <Avatar aria-label="recipe" className={classes.avatar}>
                        N 
                    </Avatar>
                }
                title={ 
                    <Typography gutterBottom variant="h4" component="h2" >
                        NEW TRICK
                    </Typography>
                }
            />
                <div className={classes.details}>
                {/* <CardActionArea> */}
                    <CardContent style={{padding:"0", margin: "0" }}>
                        {/* <Grid container className={classes.typography}> */}
                       
                                {/* <Grid item className={classes.map}> */}
                                    <Typography gutterBottom variant="h4" component="h2" >
                                        {name}
                                    </Typography>
                                    <Typography variant="body2" color="textSecondary" component="p" >
                                        <b>RIDE:</b> {ride}
                                    </Typography>
                                    <Typography variant="body2" color="textSecondary" component="p">
                                        <b>CREATED BY:</b> <b>{user_id}</b>
                                    </Typography>
                                    <Typography variant="body2" color="textSecondary" component="p">
                                        <b>SPOT:</b> <b>{spot_id}</b>
                                    </Typography>
                                {/* </Grid> */}
                           
                                <Grid container item className={classes.media}>
                                <Video
                                    // ref={el => (this.replayVideo = el)}
                                    src={video}
                                    loop
                                    muted
                                    playsInline
                                    autoPlay={true}
                                />
    
                                    {/* <CardMedia
                                        component={"video"}
                                        className={classes.media}
                                        src={video}
                                        title={name}
                                    /> */}
                                </Grid>
                         
                        {/* </Grid> */}
                        
                    </CardContent>
                {/* </CardActionArea> */}
                <CardActions>
                    <Button size="small" color="primary">
                        <StarBorder/>
                    </Button>
                    <Button size="small" color="primary" >                                     
                        <SendIcon />
                    </Button>
                </CardActions>
                </div>
            </Card>
           
        </React.Fragment>
    )
}
export default TrickCard