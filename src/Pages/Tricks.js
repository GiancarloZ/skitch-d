import React from 'react'
import {CircularProgress, Button, AppBar, Grid, Paper, Card, CardActions, Typography, CardContent, CardMedia, CardActionArea } from '@material-ui/core';
import SendIcon from '@material-ui/icons/Send';
import StarBorder from '@material-ui/icons/StarBorder';
import { makeStyles } from '@material-ui/core/styles';
import AddIcon from '@material-ui/icons/Add';
import IconButton from '@material-ui/core/IconButton';
import PostTrick from './PostTrick'
import { Root, Preview, Footer, GlobalStyle, Cam, FormStyle, Video } from "./styles";

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


const Tricks = props => {
    const classes = useStyles()
    const {history, spot, spots, tricks} = props
    console.log(props)
    console.log(history)
    console.log(spot)
    console.log(tricks)
    const spotId = spot.id
    // const tricks = trick_id
    const [filter, setFilter] = React.useState("");
    console.log(filter)

    const getTrickCard = trickId => {
        const {id, name, ride, video, user_id, spot_id} = tricks[trickId]
        // const videoUrl = JSON.parse(video).secure_url
        console.log(trickId)
        console.log(video)
        const handleOnClick = () => {
            // history.push(`/spots/${spotId}/${id}`)
        }
      
        return(
            <React.Fragment key={id}>
                {/* <Grid className={classes.grid}>  </Grid> */}
   
                <Card className={classes.root} onClick={handleOnClick}>
                    <div className={classes.details}>
                    <CardActionArea>
                        <CardContent style={{padding:"0", margin: "0" }}>
                            <Grid container className={classes.typography}>
                           
                                    <Grid item className={classes.map}>
                                        <Typography gutterBottom variant="h4" component="h2" >
                                            {name}
                                        </Typography>
                                        <Typography variant="body2" color="textSecondary" component="p" >
                                            <b>Ride:</b> {ride}
                                        </Typography>
                                        <Typography variant="body2" color="textSecondary" component="p">
                                            <b>created by:</b> <b>{user_id}</b>
                                        </Typography>
                                    </Grid>
                               
                                    <Grid item className={classes.map}>
                                    <Video
                                        //  ref={el => (this.replayVideo = el)}
                                        src={video}
                                        loop
                                        playsInline
                                        autoPlay={true}
                                    />
        
                                        {/* <CardMedia
                                            component="video"
                                            className={classes.media}
                                            src={video}
                                            title={name}
                                        /> */}
                                    </Grid>
                             
                            </Grid>
                            
                        </CardContent>
                    </CardActionArea>
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

    const handlePostClick = () => {
        console.log("clicked")
        history.push(`/spots/${spotId}/new`)
        // return (<PostTrick spot={spot}/>)
    }
    return (
        <>
        <Paper elevation={4}>
        <Grid container  justify="space-between">
            <Grid item>
            <Typography variant="h3">
                Tricks
            </Typography>   
            </Grid>
            <Grid item>
            <IconButton color="secondary" aria-label="post trick" edge="start" onClick={handlePostClick}>
                <AddIcon />
            </IconButton>
            </Grid>
        </Grid>
        </Paper>
        {!tricks && <Typography variant="h6" >No tricks have been posted on this spot! Be the first!</Typography>}
        {tricks &&
            Object.keys(tricks).reverse().map(
                (trickId, loading) =>  
                tricks[trickId].name.includes(filter) &&
                getTrickCard(trickId, loading)
            ) 
        }
    
        </>
    )
}
export default Tricks