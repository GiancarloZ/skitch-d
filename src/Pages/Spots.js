import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import SendIcon from '@material-ui/icons/Send';
import StarBorder from '@material-ui/icons/StarBorder';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';

// import { CssBaseline, CircularProgress } from '@material-ui/core';
import CircularProgress from '@material-ui/core/CircularProgress';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Skeleton from '@material-ui/lab/Skeleton';

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
        padding: 3,
        // maxHeight: "auto",
        maxWidth: "100%",
    },
    list: {
        marginBottom: theme.spacing(1),
        marginTop: theme.spacing(0),
    },
    subheader: {
        backgroundColor: theme.palette.background.paper,
    },
    details: {
        display: 'flex',
        flexDirection: 'column',
        width: "100%"
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
    bigMedia: {
        height: "120px",
        width: "100%"
    },
    image: {
        height: "300px"
    },
  }));
const Spots = props => {
    const dispatch = useDispatch();
    const classes = useStyles()
    const [open, setOpen] = React.useState(false);
    const { history, spots, tricks} = props;
    // const spots =  useSelector(state => state.spots);
    const [filter, setFilter] = React.useState("");
    console.log(props)
    const [loading, setLoading] = React.useState(false);
    console.log(history)
    console.log(loading)
    const handleClick = () => {
      setOpen(!open);
    };

    useEffect(()=>{
        console.log("here")
        setLoading(true)
        console.log(loading)
        spots.length >= 10 && setLoading(false)
        console.log(loading)
    }, [spots])
   
    const skeletonCard = () => {
        return (
            <Card className={classes.root} >
            <div className={classes.details}>
            <CardActionArea>
            <CardContent style={{padding:"0", margin: "0" }}>
                    <Grid container className={classes.typography}>
            <Grid item className={classes.map}> 
                <Skeleton width="50%" component="h1" />
                <Skeleton width="60%" component="p"/>
                <Skeleton width="80%" component="p"/>
                <Skeleton width="80%" component="p"/>
            </Grid>
            <Grid item className={classes.map}>
                <Skeleton variant="rect" className={classes.media}/>
            </Grid>
            <Grid item className={classes.bigMedia}>
                <Skeleton variant="rect" className={classes.media}/>
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
        )
    }
    
    const getSpotCard = (spotId, loading) => {
        const spotRef = spots[spotId]
        console.log(spotRef)
        // const spotRef = [...spot]
        const { id, name, style, user_id, lat, lng, image } = spotRef
        const handleOnClick = () => {
            history.push({pathname: `/spots/${id}`, state: spotRef})
        }
        const key = "AIzaSyDA7WH7dJ9TH95f6uprlugmQMPNp9GeVq0"
        const map = 'https://maps.googleapis.com/maps/api/staticmap?center=' + lat + ',' + lng + '&markers=icon:http://tinyurl.com/2ftvtt6|' + lat + ',' + lng + '&zoom=14&size=400x400&sensor=false&key=' + key
   
        return(
            <React.Fragment key={spotId}>
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
                                            <b>Style:</b> {style}
                                        </Typography>
                                        <Typography variant="body2" color="textSecondary" component="p">
                                            <b>created by:</b> <b>{user_id}</b>
                                            {/* {spot.user_id.username} */}
                                        </Typography>
                                        <Typography variant="body2" color="textSecondary" component="p">
                                            {/* <b>Latitude:</b> <b>{lat}</b><br></br><b>Longitude:</b> <b>{lng}</b> */}
                                        </Typography>
                                    </Grid>
                             
                                    <Grid item className={classes.map}>
                                        <CardMedia
                                            component="img"
                                            className={classes.media}
                                            // src={map}
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
               
            </React.Fragment>
        )
    }
    console.log(spots)
    return (
        <>
         <Paper className={classes.paper}>
            {loading &&
                <>
                    {skeletonCard()}
                    {skeletonCard()}
                    {skeletonCard()}
                    {skeletonCard()}
                    {skeletonCard()}
                    {skeletonCard()}
                </>
            } 
            {!loading && !spots &&
                <>
                    {skeletonCard()}
                    {skeletonCard()}
                    {skeletonCard()}
                    {skeletonCard()}
                    {skeletonCard()}
                    {skeletonCard()}
                </>
            } 
            {!loading && spots.length > 10 &&

                Object.keys(spots).reverse().map(
                        (spotId, loading) =>  
                        spots[spotId].name.includes(filter) &&
                        getSpotCard(spotId, loading)
                ) 
              
            }
               
        </Paper>
            
        </>
    )
}
export default Spots