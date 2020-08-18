import React, { useState, Fragment, useEffect } from 'react';
import { useDispatch, useSelector, shallowEqual } from 'react-redux';
import trickActions from '../redux/trickActions';
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
    console.log(spotId)
    const dispatch = useDispatch();
    const userId = useSelector(state => state.currentUser);
    const [trick, setTrick] = useState({
        name: '',
        ride: '',
        video:'',
        user_id: userId.id,
        spot_id: parseInt(spotId)
    })
    console.log(trick)
    const {name, ride, video, user_id, spot_id, thumbnail} = trick;
    const sports = ["Skateboard", "Inline Skating", "BMX", "Scooter", "Wheelchair"]
    const handleChange = e => 
    setTrick({ ...trick, [e.target.name]: e.target.value });

    const handleSubmit = e => {
        e.preventDefault();
        dispatch(trickActions.newTrick(trick));
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
                isFlipped
                // replayVideoAutoplayAndLoopOff 
                onRecordingComplete={(videoBlob, thumbnailBlob) => {
                    // Do something with the video...
                    var formdata = new FormData();

                    formdata.append("file", videoBlob);
                    formdata.append("cloud_name", "dnoyhupey");
                    formdata.append("upload_preset", "cz0zvuq0");
                    fetch(`https://api.cloudinary.com/v1_1/dnoyhupey/auto/upload`, { 
                        method: "post",
                        mode: "cors",
                        body: formdata
                    })
                    .then(r => r.json())
                    .then(data => {
                        console.log(data)
                        const videoUrl = data.url
                        setTrick({...trick, video: videoUrl})
                    });
                    // const videoUrl = window.URL.createObjectURL(videoBlob)
                    // // const thumbnailUrl = window.URL.createObjectURL(thumbnail)
                    // setVideoUrl(videoUrl)
                    // setTrick({...trick, video: videoBlob})
                    // console.log('videoBlob', videoBlob)
                    // console.log(videoUrl)
                }}
                constraints={{ audio: true, video: { facingMode: { exact: "environment" } } }}
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
                name="ride"
                value={ride}
                onChange={handleChange}
                placeholder="Ride"
                defaultValue={sports[0]}
                >
                {sports.map(e =>        
                    <option value={e} key={e}>{e}</option>
                )}
                </Select>
               
                <Video
                //  ref={el => (this.replayVideo = el)}
                 src={video}
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