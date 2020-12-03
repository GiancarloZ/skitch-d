import React from 'react'
import {CircularProgress, Button, Grid, Paper, Card, CardActions, Typography, CardContent, CardActionArea } from '@material-ui/core';
import SendIcon from '@material-ui/icons/Send';
import StarBorder from '@material-ui/icons/StarBorder';
import { makeStyles } from '@material-ui/core/styles';
import AddIcon from '@material-ui/icons/Add';
import IconButton from '@material-ui/core/IconButton';
import { Video } from "./styles";
import TrickCard from "../Components/TrickCard"
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
        width: 375,
        height: "350px"
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

    const getTrickCard = trick => {
        const {id, name, ride, video, user_id, spot_id} = trick
        // const videoUrl = JSON.parse(video).secure_url
        console.log(trick)
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
                               
                                    <Grid item className={classes.media}>
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
        {/* {tricks === undefined && <CircularProgress/> } */}
        {tricks.length > 0 ? (
            tricks.reverse().map( (trick) => 
                // getTrickCard(trick)
                <TrickCard p={trick} history={history}/>
            )
        ) : (<Typography variant="h6" >No tricks have been posted on this spot! Be the first!</Typography>)}
        </>
    )
}
export default Tricks