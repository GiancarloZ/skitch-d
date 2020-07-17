import React, { useState, Fragment, useEffect } from 'react';
import { useDispatch, useSelector, shallowEqual } from 'react-redux';
import spotActions from '../redux/spotActions';
// import { Camera } from "../Camera/index";
import usePosition from '../Components/usePosition';
import { Root, Preview, Footer, GlobalStyle, Cam, FormStyle } from "./styles";
import Input from '@material-ui/core/Input';
import Select from '@material-ui/core/Select';
import Button from '@material-ui/core/Button'; 
import Camera, { FACING_MODES, IMAGE_TYPES }  from 'react-html5-camera-photo';
import 'react-html5-camera-photo/build/css/index.css';
import Icon from '@material-ui/core/Icon';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Map from '../Components/Map';
import Marker from '../Components/Marker';
import LoginPage from './Login';
// import Autocomplete from '@material-ui/lab/Autocomplete';
// import TextField from '@material-ui/core/TextField';
// const grabMapState = () => {
        
//   const MapState = React.useContext(MapState)
//   console.log(MapState)
 
// }
const Post = props => {

        // const {latitude, longitude} = props;
        // console.log(longitude, latitude)
        const { history } = props;
        const dispatch = useDispatch();
        const spots = useSelector(state => state.spots);
        const [lat, lng] = useSelector(state => state.currentPosition)
        const userId = useSelector(state => state.currentUser);

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
      
        const [isCameraOpen, setIsCameraOpen] = useState(true);
        const [cardImage, setCardImage] = useState();
        
        function handleTakePhotoAnimationDone (dataUri) {
          setCardImage(dataUri);
          setIsCameraOpen(false)
          setSpot({...spot, image: dataUri})
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
          const latLng = [lat, lng]
          setSpot({...spot, lat: latLng[0], lng: latLng[1]}) 
          dispatch(spotActions.newSpot(spot));
          history.push(`/`)
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
        const {name, style, level, image} = spot;
        // useEffect(() => {
        //   const longitude = {longitude}
        //   console.log(longitude, latitude)
        //     setSpot({
        //       ...spot,
        //       lat: latitude, lng: longitude,
        //       currentPosition: true
        //     })
        // }, [console.log(spot)])
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
      <FormStyle>
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
          defaultValue="Style"
        >
         {spots.map(e => 
            <option value={e.style}>{e.style}</option>
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
       <Input fullWidth type="submit" />
      </form>
      </FormStyle>
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