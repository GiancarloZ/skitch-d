import React, {useEffect} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { makeStyles } from "@material-ui/core/styles";
import {Paper, Button, Grid, Tabs, Tab, AppBar, Toolbar} from '@material-ui/core';
import MessageIcon from "@material-ui/icons/Message";
import HomeIcon from "@material-ui/icons/Home";
import PersonPinIcon from "@material-ui/icons/PersonPin";
import CameraIcon from "@material-ui/icons/Camera";
import SearchIcon from "@material-ui/icons/Search";
import Feed from "./Feed"
import Messages from "./Messages"
import Profile from "./Profile"
import Spots from "./Spots"
import Post from "./Post"
import usePosition from '../Components/usePosition';
import TopBar from '../Components/TopBar';
import trickActions from '../redux/trickActions';
import spotActions from '../redux/spotActions';
import userActions from '../redux/userActions';
import positionActions from '../redux/positionActions';

const useStyles = makeStyles(theme => ({
    paper: {
      padding: theme.spacing(0),
      margin: 0,
      minWidth: "auto",
      maxHeight: "auto",
    },
    appBar: {
      top: "auto",
      bottom: 0,
      padding: 0,
      margin: 0,
      height: 50,
    },
    tabs:{
      minWidth: "100%",
      minHeight: "100%",
    },
    // background:{
    //   background: "blue" ,
    //   padding: theme.spacing(0),
    //   margin: 0,
    // },
    top: {
      padding: theme.spacing(0),
      margin: 0,
      minWidth: "100%",

    },
    mid: {
      paddingTop: 36,
      // minHeight: "auto",
      // minWidth: "100%",
      paddingBottom: 50,
    },
  
  }));
  
  
const Home = props => {
    const {match, history } = props;
    const { params } = match;
    const { page } = params;
    console.log(history)
    console.log(page)
    const dispatch = useDispatch();
    const {latitude, longitude, error} = usePosition();
    console.log(longitude, latitude)
    const latLng = [latitude, longitude];
    dispatch(positionActions.setPosition(latLng))

    const spots =  useSelector(state => state.spots);
    const userId = useSelector(state => state.currentUser);
    const tricks = useSelector(state => state.tricks);
    const users = useSelector(state => state.users);

    console.log(users)
    console.log(tricks)
    const tabNameToIndex = {
      0: "feed",
      1: "spots",
      2: "post",
      3: "profile",
      4: "messages"
    }

    const indexToTabName = {
      feed : 0,
      spots: 1,
      post: 2,
      profile: 3,
      messages: 4
    }

    useEffect(()=>{
      dispatch(userActions.persistUser())
      dispatch(spotActions.loadAllSpots())
      dispatch(trickActions.loadAllTricks())
      dispatch(userActions.loadAllUsers())
     
    }, [dispatch])
    
 
    // useEffect(()=>{
    //   const timer = setTimeout(() => {
    //     console.log("timeout")
    //     dispatch(spotActions.loadAllSpots())
    //     dispatch(trickActions.loadAllTricks())
    //     dispatch(userActions.loadAllUsers())
    //   }
    //   , 3000)
    //   return () => clearTimeout(timer);
    // }, [])

    const classes = useStyles();
    const [selectedTab, setSelectedTab] = React.useState(undefined ? 0 : indexToTabName[page]);
    const handleChange = (event, newValue) => {
      history.push(`/${tabNameToIndex[newValue]}`);
      setSelectedTab(newValue);
    };

    return (
          <>
          <TopBar history={history}/>
          <>
          <Paper square className={classes.mid}>
            {selectedTab === 0 && <Feed history={history} spots={spots} userId={userId} tricks={tricks} users={users} />}
            {selectedTab === 1 && <Spots history={history} spots={spots} userId={userId} tricks={tricks}/>}
            {selectedTab === 2 && <Post history={history} spots={spots} userId={userId} setSelectedTab={setSelectedTab}/>} 
            {selectedTab === 3 && <Profile/>}
            {selectedTab === 4 && <Messages/>}
            {selectedTab === undefined && setSelectedTab(0)}
          </Paper>
          </>
          <AppBar position="fixed" className={classes.appBar}>
          <Toolbar className={classes.appBar} >
              <Tabs
                value={selectedTab}
                onChange={handleChange}
                variant="fullWidth"
                indicatorColor="secondary"
                textColor="secondary"                              
                aria-label="icon tabs example"
                className={classes.tabs}
                justify="flex-end"
              >
                <Tab icon={<HomeIcon  />} aria-label="feed"/>
                <Tab icon={<SearchIcon />} aria-label="search" />
                <Tab icon={<CameraIcon />} aria-label="camera" />
                <Tab icon={<PersonPinIcon />} aria-label="person" />
                <Tab icon={<MessageIcon />} aria-label="message" />
              </Tabs>
          </Toolbar>
          </AppBar>
      </>
      )
};
export default Home