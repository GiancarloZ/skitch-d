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
    },
    image: {
        height: "300px"
    },
  }));



const SpotCard = props => {
    const {history, p} = props;
    const classes = useStyles()
    const { id, name, style, user_id, lat, lng, image } = p
    const handleOnClick = () => {
        history.push(`/spots/${id}`)
    }
    const key = "AIzaSyDA7WH7dJ9TH95f6uprlugmQMPNp9GeVq0"
    const map = 'https://maps.googleapis.com/maps/api/staticmap?center=' + lat + ',' + lng + '&zoom=14&size=400x400&key=' + key
    return(
        <React.Fragment key={id}>
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
                                        {p.user_id.username}
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
           
        </React.Fragment>
    )
}
export default SpotCard