import React, { useEffect } from 'react'
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import SendIcon from '@material-ui/icons/Send';
import StarBorder from '@material-ui/icons/StarBorder';
import Avatar from '@material-ui/core/Avatar';
import { blue } from '@material-ui/core/colors';
// import { CssBaseline, CircularProgress } from '@material-ui/core';
import CircularProgress from '@material-ui/core/CircularProgress';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardMedia from '@material-ui/core/CardMedia';
import CardHeader from '@material-ui/core/CardHeader';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import {Image, Video, Transformation, CloudinaryContext} from 'cloudinary-react';


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
    avatar: {
        backgroundColor: blue[500],
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
        height: "auto"
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
    const railDefault = "/rails-default.jpg"
    const handleOnClick = () => {
        history.push({pathname: `/spots/${id}`, state: p})

    }
    const key = "AIzaSyDA7WH7dJ9TH95f6uprlugmQMPNp9GeVq0"

    const map = 'https://maps.googleapis.com/maps/api/staticmap?center=' + lat + ',' + lng + '&markers=icon:http://tinyurl.com/2ftvtt6|' + lat + ',' + lng + '&zoom=14&size=400x400&sensor=false&key=' + key
    return(
        <React.Fragment key={id}>
            {/* <Grid className={classes.grid}>  </Grid> */}

            <Card className={classes.root} onClick={handleOnClick} key={id}>
                <div className={classes.details} key={id}>
                <CardHeader
                className={classes.header}
                avatar={
                    <Avatar aria-label="recipe" className={classes.avatar}>
                        S
                    </Avatar>
                }
                title={ 
                    <Typography gutterBottom variant="h6" component="h2">
                            {name}
                    </Typography>
                }
            />
                <CardActionArea>
                    <CardContent style={{padding:"0", margin: "0" }}>
                        <Grid container className={classes.typography}>
                            {/* {loading ? ( */}
                                <Grid item className={classes.map}>
                                    {/* <Typography gutterBottom variant="h4" component="h2" >
                                        {name}
                                    </Typography> */}
                                    <Typography variant="body2" color="textSecondary" component="p" >
                                        <b>Style:</b> {style}
                                    </Typography>
                                    <Typography variant="body2" color="textSecondary" component="p">
                                        <b>created by:</b> <b>{user_id}</b>
                                        {/* {p.user_id.username} */}
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
                       
                            {/* <CardMedia
                                component="img"
                                className={classes.image}
                                image={image ? image : railDefault}
                                title={name}                                
                                // height="100"
                                width="151"
                            /> */}
                        <Image cloudName="dnoyhupey" publicId={image ? image : railDefault} width="100%" height="450px" crop="scale" />

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