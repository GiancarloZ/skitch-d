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
        const [loading, setLoading] = useState(false)

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

        const handleOnClick = () => {
          history.goBack()
          console.log("clicked")
        }
        const {name, style, level, image} = spot;
        const uniqueStyle = [...new Set(spots.map(item => item.style))];

        const hiddenFileInput = React.useRef(null)
        const handleClick = event => {
          hiddenFileInput.current.click();
        };
        useEffect(() => {
          handleClick()
        }, [])
        const handleOnChange = event => {
          setLoading(true)
          const fileUploaded = event.target.files[0];
          var formdata = new FormData();
          formdata.append("file", fileUploaded);
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
              setLoading(false)
          });
  
        };

    return (
      <>
        {!cardImage && loading && <Root><h3 style={{paddingTop: 50}}>uploading image....</h3></Root>}
        {!cardImage && !loading &&
          <Root>
            <Button variant="contained" style={{margin: 0}}onClick={handleClick}> Take Photo </Button>
            <input  
              type="file" 
              accept="image/*" 
              capture="environment"
              ref={hiddenFileInput}
              onChange={handleOnChange}
              style={{display: "none"}} 
            />
        
          </Root>
        }
        {cardImage && !loading && 
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
              displayEmpty={true}
            >
            {uniqueStyle.map(e =>        
                <option value={e} key={e}>{e}</option>
            )}
            </Select>
            <Map>
            </Map>
        
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
      </>  
      )
  }

export default Post