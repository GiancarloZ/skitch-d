import React, { useState, Fragment, useEffect } from 'react';
import { useDispatch, useSelector, shallowEqual } from 'react-redux';
import spotActions from '../redux/spotActions';
// import { Camera } from "../Camera/index";
import usePosition from '../Components/usePosition';
import { Root, Preview, Footer, GlobalStyle, Cam, FormStyle } from "./styles";
import {Input, Select, Button, Grid, AppBar} from '@material-ui/core';

import Camera, { FACING_MODES, IMAGE_TYPES }  from 'react-html5-camera-photo';
import 'react-html5-camera-photo/build/css/index.css';

import Map from '../Components/Map';
import Icon from '@material-ui/core/Icon';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';

import LoginPage from '../Pages/Login';
import Signup from '../Pages/Signup';
import Spot from './Spot';

const Post = props => {

        // const {latitude, longitude} = props;
        // console.log(longitude, latitude)
        const { history, spots, userId } = props;
        const dispatch = useDispatch();
        // spots = useSelector(state => state.spots);
        const [lat, lng] = useSelector(state => state.currentPosition)
        const [isCameraOpen, setIsCameraOpen] = useState(true);
        const [cardImage, setCardImage] = useState();
        console.log(lat, lng)

        const [spot, setSpot] = useState({
            name: '',
            style: '',
            image:'',
            lng: lng,
            lat: lat,
            user_id: userId.id,
        })

        console.log(spot)
        
        
        function handleTakePhotoAnimationDone (dataUri) {
         
          var formdata = new FormData();

                  formdata.append("file", dataUri);
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
                      const imageUrl = data.url
                      setSpot({...spot, image: imageUrl})
                      setCardImage(imageUrl);
                      setIsCameraOpen(false)
                  });
        
        }
        const isFullscreen = false;
        // Controlled form functions
  
        const handleChange = e => 
          setSpot({ ...spot, [e.target.name]: e.target.value });

        const handleMapChange = e => 
          setSpot({ ...spot, lat: e.lat, lng: e.lng });
        useEffect(() => {
     
          const newSpot = {...spot, lat: lat, lng: lng};
          setSpot(newSpot)
        
        }, [])
        const handleSubmit = e => {
          e.preventDefault();
          dispatch(spotActions.newSpot(spot));
          history.push('/');
          console.log("heres")
        }
        function handleTakePhoto (dataUri) {
          // Do stuff with the photo...
          console.log('takePhoto');
        }
        function handleCameraError (error) {
          console.log('handleCameraError', error);
        }
      
        function handleCameraStart (stream) {
          console.log('handleCameraStart');
        }
      
        function handleCameraStop () {
          console.log('handleCameraStop');
        }

        const handleOnClick = () => {
          history.goBack()
          setIsCameraOpen(false)
          console.log("clicked")
        }
        const {name, style, level, image} = spot;
        const uniqueStyle = [...new Set(spots.map(item => item.style))];
    return (

    <>
     
     {isCameraOpen && (
       
       <Root >
        <Camera
          onTakePhoto = { (dataUri) => { handleTakePhoto(dataUri); } }
          onTakePhotoAnimationDone = { (dataUri) => { handleTakePhotoAnimationDone(dataUri); } }
          onCameraError = { (error) => { handleCameraError(error); } }
          idealFacingMode = {FACING_MODES.ENVIRONMENT}
          idealResolution = {{width: 640, height: 480}}
          imageType = {IMAGE_TYPES.JPG}
          imageCompression = {0.97}
          isMaxResolution = {true}
          isImageMirror = {false}
          isSilentMode = {false}
          isDisplayStartCameraError = {true}
          isFullscreen = {true}
          sizeFactor = {1}
          onCameraStart = { (stream) => { handleCameraStart(stream); } }
          onCameraStop = { () => { handleCameraStop(); } }
        />
      </Root>
     )}
    {cardImage &&
   
      <form onSubmit={handleSubmit}>
        
        <Input
          fullWidth={true}
          type="text"
          name="name"
          onChange={handleChange}
          placeholder="Name (e.g. Bro Bowl Rail)"
        />
        <Select
          fullWidth
          type="text"
          name="style"
          value={style}
          onChange={handleChange}
          placeholder="Style"
          defaultValue="Rail"
        >
         {uniqueStyle.map(e =>        
            <option value={e} key={e.id}>{e}</option>
         )}
        </Select>
        <Map>
        </Map>
        {/* <input type="hidden" name="latitude" value=""/>
          <input type="hidden" name="longitude" value=""/> */}
         <input
          fullWidth
          type="image"
          name="image"
          value={"Image"}
          style={{width: "100%"}}
          src={cardImage}
          onChange={handleChange}
          placeholder="Image"
        />
        <Input fullWidth type="submit" style={{paddingBottom: "50px"}}/>
      </form>

    }
      {/* <Footer>
      {!isCameraOpen ? (
           <button onClick={() => setIsCameraOpen(true)}>Open Camera</button>) : (
           <button
             onClick={() => {
              setIsCameraOpen(false);
              setCardImage(undefined);
            }}
         >
             Close Camera
           </button>
        )}
      </Footer> */}
        </>

    // }
      // <Footer>
      //   {!isCameraOpen ? (
      //     <button onClick={() => setIsCameraOpen(true)}>Open Camera</button>) : (
      //     <button
      //       onClick={() => {
      //         setIsCameraOpen(false);
      //         setCardImage(undefined);
      //       }}
      //     >
      //       Close Camera
      //     </button>
      //   )}
      //   </Footer>
      // </Root>
      // <GlobalStyle />
      // </Fragment>
      
    )
}

export default Post