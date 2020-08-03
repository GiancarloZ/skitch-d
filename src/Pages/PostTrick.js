import React, { useState, Fragment, useEffect } from 'react';
import { useDispatch, useSelector, shallowEqual } from 'react-redux';
import spotActions from '../redux/spotActions';
// import { Camera } from "../Camera/index";
import usePosition from '../Components/usePosition';
import { Root, Preview, Footer, GlobalStyle, Cam, FormStyle, Video } from "./styles";
import Input from '@material-ui/core/Input';
import Select from '@material-ui/core/Select';
import Camera, { FACING_MODES, IMAGE_TYPES }  from 'react-html5-camera-photo';
import 'react-html5-camera-photo/build/css/index.css';
import Map from '../Components/Map';
import VideoRecorder from 'react-video-recorder'
import {Button, AppBar, Grid, Paper, CardMedia } from '@material-ui/core';


export const PostTrick = props => {
    const { history, match } = props;
    const {params} = match;
    const {spotId} = params;
    console.log(history)
    console.log(match)
    console.log(params)
    console.log(spotId)
    const userId = useSelector(state => state.currentUser);
    const [trick, setTrick] = useState({
        name: '',
        type: '',
        video:'',
        thumbnail: '',
        user_id: userId.id,
        spot_id: spotId
    })
    console.log(trick)
    const {name, type, video, user_id, spot_id, thumbnail} = trick;
    const sports = ["Skateboard", "Inline Skating", "BMX", "Scooter", "Wheelchair"]
    const [videoUrl, setVideoUrl] = useState();
    const handleChange = e => 
    setTrick({ ...trick, [e.target.name]: e.target.value });

    const handleSubmit = e => {
        e.preventDefault();
        // dispatch(spotActions.newSpot(spot));
        // history.push('/');
        console.log("heres")
      }
    return (
        <>
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
            {!video ? (
                <VideoRecorder
                isOnInitially
                countdownTime={0}
                timeLimit={10000}
                // isFlipped
                // replayVideoAutoplayAndLoopOff 
                onRecordingComplete={(videoBlob, video, thumbnail) => {
                    // Do something with the video...
                    const videoUrl = window.URL.createObjectURL(videoBlob)
                    setVideoUrl(videoUrl)
                    setTrick({...trick, video: videoBlob, thumbnail: thumbnail})
                    console.log('videoBlob', videoBlob)
                    console.log('video', video)
                    console.log('thumbnail', thumbnail)
                    console.log(videoUrl)
                }}
                constraints={{ audio: true, video: { facingMode: { exact: "environment" }}}}
                />
                
            ) : (
                
            <form  style={{paddingTop: "50px"}}>
               <Input
                fullWidth={true}
                type="text"
                name="name"
                onChange={handleChange}
                placeholder="Name (e.g. 50-50 Grind)"
                />
                <Select
                fullWidth
                type="text"
                name="type"
                value={type}
                onChange={handleChange}
                placeholder="Style"
                defaultValue="Rail"
                >
                {sports.map(e =>        
                    <option value={e} key={e}>{e}</option>
                )}
                </Select>
               
                <Video
                //  ref={el => (this.replayVideo = el)}
                 src={videoUrl}
                 loop
                 playsInline
                 autoPlay={true}
                 />
        
                {/* // <Input fullWidth type="submit" style={{paddingBottom: "50px"}}/> */}
      
                <Button fullWidth variant="outlined" size="large" onClick={handleSubmit}>Submit</Button>
                </form>
            )}
            
        </>
    )
}
export default PostTrick