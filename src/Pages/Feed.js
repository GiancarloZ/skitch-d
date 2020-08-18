import React, {useEffect} from 'react'
import { useSelector } from 'react-redux';
import {Divider, Grid, Typography, Card, CardActionArea, CardContent, Button, CardActions, Paper} from '@material-ui/core';
import StarBorder from '@material-ui/icons/StarBorder';
import SendIcon from '@material-ui/icons/Send';
import { makeStyles } from '@material-ui/core/styles';
import Skeleton from '@material-ui/lab/Skeleton';
import TrickCard from '../Components/TrickCard';
import SpotCard from '../Components/SpotCard';
const useStyles = makeStyles((theme) => ({
  tally: {
    width: '100%',
    border: `1px solid ${theme.palette.divider}`,
    borderRadius: theme.shape.borderRadius,
    backgroundColor: theme.palette.background.paper,
    color: theme.palette.text.secondary,
    margin: 0
  },
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

const Feed = props => {
    const {history, spots, tricks, users} = props
    const user = useSelector(state => state.currentUser.username);
    const classes = useStyles();
    const feed = [...spots, ...tricks, ...users].sort((a, b) => new Date(b.created_at) - new Date(a.created_at))
    const [loading, setLoading] = React.useState(false);
    useEffect(()=>{
      console.log("here")
      setLoading(true)
      console.log(loading)
      feed.length >= 10 && setLoading(false)
      console.log(loading)
  }, [feed])
    console.log(feed)
    const text = user ? (
      <Typography variant="h4" align='center'>{user}'s Feed </Typography>
    ) : (
      <Typography variant="h4" align='center' >Global Feed</Typography>
    );
    const tally = (
        <Grid direction container alignItems="center" alignContent="center" justify="space-evenly" className={classes.root}>
        <Grid item> <h3>Spots: {spots.length} </h3></Grid>
        <Divider orientation="vertical" flexItem /> 
        <Grid item> <h3>Tricks: {tricks.length}</h3>   </Grid>
        <Divider orientation="vertical" flexItem /> 
        <Grid item> <h3>Users: {users.length}</h3></Grid>
      </Grid>
    )
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
  
    const getUserCard = p => {
      console.log(p)
      console.log("User")
      return <h1>New User: </h1>
    }
    return (
        <>
          {tally}
          {text}
  
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
              {!loading && !feed &&
                  <>
                    {skeletonCard()}
                    {skeletonCard()}
                    {skeletonCard()}
                    {skeletonCard()}
                    {skeletonCard()}
                    {skeletonCard()}
                  </>
              } 
              {!loading && feed.length > 10 &&
                  <>
                    {feed.map((p) => {
                      if (p === spots[p.id-1]){
                        return  <SpotCard p={p} history={history}/>
                      } else 
                      if (p === tricks[p.id-1]){
                        return <TrickCard p={p} history={history}/>
                      } else 
                      if (p === users[p.id -1 ]){
                        getUserCard(p)
                      } else {
                        skeletonCard()
                      }
                    })
                    }
                  </>
              } 
            </Paper>
        </>
    )
}
export default Feed