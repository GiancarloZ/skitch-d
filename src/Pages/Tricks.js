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


const Tricks = props => {
    const classes = useStyles()
    const {history, spot, spots} = props
    console.log(history)
    console.log(spot)
    const trick_id = spot.trick_id
    const spotId = spot.id
    const tricks = trick_id
    const [filter, setFilter] = React.useState("");

    const getTrickCard = (spotId, trickId, loading) => {
        const { id, name, type, user_id, spot_id} = spots[id][trickId]
        const handleOnClick = () => {
            history.push(`/spots/${spotId}/${id}`)
        }
      
        return(
            <React.Fragment key={trickId}>
                {/* <Grid className={classes.grid}>  </Grid> */}
   
                <Card className={classes.root} onClick={handleOnClick}>
                    <div className={classes.details}>
                    <CardActionArea>
                        <CardContent style={{padding:"0", margin: "0" }}>
                            <Grid container className={classes.typography}>
                                {/* {loading ? ( */}
                                    <Grid item className={classes.map}>
                                        <Typography gutterBottom variant="h4" component="h2" >
                                            {name}
                                        </Typography>
                                        <Typography variant="body2" color="textSecondary" component="p" >
                                            <b>Type:</b> {type}
                                        </Typography>
                                        <Typography variant="body2" color="textSecondary" component="p">
                                            <b>created by:</b> <b>{user_id}</b>
                                        </Typography>
                                    </Grid>
                               
                                    <Grid item className={classes.map}>
                                        <CardMedia
                                            component="img"
                                            className={classes.media}
                                            image="/google-map-defualt.jfif"
                                            title="Google Map Default"
                                        />
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
            <IconButton color="secondary" aria-label="post trick" edge="start">
                <AddIcon />
            </IconButton>
            </Grid>
        </Grid>
        </Paper>
        {!tricks && <Typography variant="h6" >No tricks have been posted on this spot! Be the first!</Typography>}
        {tricks && 
            Object.keys(tricks).map(
                (trickId, loading) =>  
                spots[spotId][trickId].name.includes(filter) &&
                getTrickCard(spotId, trickId, loading)
            ) 
        }
    
        </>
    )
}
export default Tricks