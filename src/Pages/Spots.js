import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import spotActions from '../redux/spotActions';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Grid from '@material-ui/core/Grid';
import { useSelector } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import ListSubheader from '@material-ui/core/ListSubheader';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Collapse from '@material-ui/core/Collapse';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import DraftsIcon from '@material-ui/icons/Drafts';
import SendIcon from '@material-ui/icons/Send';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import StarBorder from '@material-ui/icons/StarBorder';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';

// import { CssBaseline, CircularProgress } from '@material-ui/core';
import CircularProgress from '@material-ui/core/CircularProgress';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Map from '../Components/Map';
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
    }
  }));
const Spots = props => {
    const dispatch = useDispatch();
    const classes = useStyles()
    const [open, setOpen] = React.useState(false);
    const { history} = props;
    const spots =  useSelector(state => state.spots);
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
                <Button size="small" color="primary" alignItem="flex-end">                                     
                    <SendIcon />
                </Button>
            </CardActions>
            </div>
            </Card>
        )
    }
    
    const getSpotCard = (spotId, loading) => {
        const { id, name, style, user_id, lat, lng, image } = spots[spotId]
        const handleOnClick = () => {
            history.push(`/spots/${id}`)
        }
      
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
                                        <Typography gutterBottom variant="h5" component="h2" >
                                            {name}
                                        </Typography>
                                        <Typography variant="body2" color="textSecondary" component="p" >
                                            <b>Style:</b> {style}
                                        </Typography>
                                        <Typography variant="body2" color="textSecondary" component="p">
                                            <b>created by:</b> <b>{user_id}</b>
                                        </Typography>
                                        <Typography variant="body2" color="textSecondary" component="p">
                                            <b>Latitude:</b> <b>{lat}</b><br></br><b>Longitude:</b> <b>{lng}</b>
                                        </Typography>
                                    </Grid>
                                {/* ) : (
                                    <Grid item className={classes.map}> 
                                        <Skeleton width="50%" component="h1" />
                                        <Skeleton width="60%" component="p"/>
                                        <Skeleton width="80%" component="p"/>
                                        <Skeleton width="80%" component="p"/>
                                    </Grid>
                                )} */}
                                {/* {loading ? ( */}
                                    <Grid item className={classes.map}>
                                        <CardMedia
                                            component="img"
                                            className={classes.media}
                                            image="/google-map-defualt.jfif"
                                            title="Google Map Default"
                                        />
                                    </Grid>
                                {/* ) : (
                                    <Grid item className={classes.map}>
                                        <Skeleton variant="rect" className={classes.media}/>
                                    </Grid>
                                )} */}
                            </Grid>
                            {/* {loading ? ( */}
                                <CardMedia
                                    component="img"
                                    // className={classes.media}
                                    image={image ? image : "/rails-default.jpg"}
                                    title="Rail Default"
                                    // height="100"
                                    width="151"
                                />
                            {/* ) : (
                                <Skeleton variant="rect" width="151" height="120px"/>
                            )} */}
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
            {!loading &&

                   
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