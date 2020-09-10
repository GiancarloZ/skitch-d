import React, { useEffect } from 'react'
import { useSelector } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import {CircularProgress, Button, AppBar, Grid, Paper } from '@material-ui/core';
import { withRouter } from 'react-router-dom';

import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import SendIcon from '@material-ui/icons/Send';
import StarBorder from '@material-ui/icons/StarBorder';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

import Tricks from './Tricks'
const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
        paddingTop: 45,
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
    },
    image: {
        height: "350px"
    },
    paper: {   
        height: "100%" 
        // paddingBottom: 50,
    }
  }));

const Spot = props => {
    const { match, history } = props;
    const { params } = match;
    const {location} = history
    const {state } = location
  
    const { spotId} = params;
    console.log(params)
    console.log(match)
    console.log(history)
    console.log(location)
    console.log(state)
    const spots = useSelector(state => state.spots);
    const allTricks = useSelector(state => state.tricks);
    console.log(spotId)
    const [spot, setSpot] = React.useState(undefined)
    const [tricks, setTricks] = React.useState(undefined)
    console.log(spot)
    useEffect(() => {
        setSpot(state)
        const spotTricks = allTricks.filter(function(el) {
            console.log(el)
            return spotId.indexOf(el.spot_id) > -1;
        })
        console.log(spotTricks)
        setTricks(spotTricks)
    }, [])
    console.log(allTricks)
    console.log(tricks)
    const classes = useStyles()
    console.log(spots)
    console.log(spot)
    const generateSpotCard = () => {
        
        const { id, name, style, user_id, lat, lng, image, trick_id } = spot
        const handleOnClick = () => {
            history.push(`/spots/${id}`)
        }
        const key = "AIzaSyDA7WH7dJ9TH95f6uprlugmQMPNp9GeVq0"
        const map = 'https://maps.googleapis.com/maps/api/staticmap?center=' + lat + ',' + lng + '&markers=icon:http://tinyurl.com/2ftvtt6|' + lat + ',' + lng + '&zoom=14&size=400x400&sensor=false&key=' + key
        return(
            <React.Fragment key={id}>
                {/* <Grid className={classes.grid}>  </Grid> */}
                <AppBar position="fixed" >
                <Grid container alignItems="center" justify="space-between">
                   
                    <Grid item >
                        <Button variant="text" color="secondary" onClick={() => history.goBack()}>
                            Back
                        </Button>
                    </Grid> 
                    
                    <Grid item >
                    </Grid> 

                </Grid>
                </AppBar>
                <Paper className={classes.paper}>
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
                                        <b>Style:</b> {style}
                                    </Typography>
                                    <Typography variant="body2" color="textSecondary" component="p">
                                        <b>created by:</b> <b>{user_id}</b>
                                    </Typography>
                                    <Typography variant="body2" color="textSecondary" component="p">
                                        {/* <b>Latitude:</b> <b>{lat}</b><br></br><b>Longitude:</b> <b>{lng}</b> */}
                                    </Typography>
                                </Grid>
                            
                                <Grid item className={classes.map}>
                                    <CardMedia
                                        component="img"
                                        className={classes.media}
                                        image={map ? map : "/google-map-defualt.jfif"}
                                        title="Google Map Default"
                                    />
                                </Grid>
                            </Grid>
                            <CardMedia
                                component="img"
                                className={classes.image}
                                image={image ? image : "/rails-default.jpg"}
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
                        <Button size="small" color="primary" >                                     
                            <SendIcon />
                        </Button>
                    </CardActions>
                    </div>
                </Card>
                <Tricks history={history} spot={spot} spots={spots} tricks={tricks}/>
                </Paper>
            </React.Fragment>
        
        )
    }
    return (<>
        {spot === undefined && <CircularProgress />}
        {spot !== undefined && spot && generateSpotCard()}
        {spot === false && <Typography> Spot not found </Typography>}
        
    </>)    
}
export default withRouter(Spot)