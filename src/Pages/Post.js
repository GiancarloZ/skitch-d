import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import spotActions from '../redux/spotActions';
import { Root } from "./styles";
import {Input, Select, Button, CircularProgress} from '@material-ui/core';
import Map from '../Components/Map';
import ConfirmDialog from '../Components/ConfirmDialog'
import MuiAlert from '@material-ui/lab/Alert';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    '& > * + *': {
      marginTop: theme.spacing(2),
    },
  },
}));
const Post = props => {
    const classes = useStyles();
        // const {latitude, longitude} = props;
        // console.log(longitude, latitude)
        const { history, spots, userId, setSelectedTab } = props;
        const dispatch = useDispatch();
        // spots = useSelector(state => state.spots);
        const [lat, lng] = useSelector(state => state.currentPosition)
        const [cardImage, setCardImage] = useState();
        const [deleteToken, setDeleteToken] = useState();
        console.log(deleteToken)
        console.log(lat, lng)
        console.log(userId)
        const [disabled, setDisabled] = useState(false)
        const [spot, setSpot] = useState({
            name: '',
            style: '',
            image:'',
            lng: lng,
            lat: lat,
            user_id: userId.id,
        })
        const spotRef = spot
        console.log(spot)
        const [loading, setLoading] = useState(false)

        // Controlled form functions
        function Alert(props) {
          return <MuiAlert elevation={6} variant="filled" {...props} />;
        }
        const handleChange = e => 
          setSpot({ ...spot, [e.target.name]: e.target.value });

        const handleMapChange = e => 
          setSpot({ ...spot, lat: e.lat, lng: e.lng });

        useEffect(() => {
     
          const newSpot = {...spot, lat: lat, lng: lng};
          setSpot(newSpot)
        
        }, [])
        useEffect(() => {
     
          const newSpot = {...spot, user_id: userId.id};
          setSpot(newSpot)
        
        }, [userId])

        const handleSubmit = e => {
          e.preventDefault();
          setDisabled(true)
          setDeleteToken("")
          setLoading(true)
          history.push('/', setSelectedTab(0));
          dispatch(spotActions.newSpot(spot));
          setLoading(false)
        }

        const handleOnClick = () => {
          history.goBack()
          console.log("clicked")
        }
        const {name, style, level, image, user_id} = spot;
        console.log(user_id)
        const uniqueStyle = [...new Set(spots.map(item => item.style))];

        const hiddenFileInput = React.useRef(null)
        const handleClick = event => {
          hiddenFileInput.current.click();
        };

        const notLoggedIn = () => {
          return (
            <div className={classes.root}>
              <Alert severity="error">Must be logged in to post!</Alert>
            </div>
          )
        }
  
        useEffect(() => {
          if (user_id === undefined){
            notLoggedIn()
          } else {
            handleClick()
          }
        }, [user_id])
        const handleOnChange = event => {
          setLoading(true)
   
          const fileUploaded = event.target.files[0];
          var formdata = new FormData();
          formdata.append("file", fileUploaded);
          formdata.append("cloud_name", "dnoyhupey");
          formdata.append("upload_preset", "cz0zvuq0");
          console.log(formdata)
          fetch(`https://api.cloudinary.com/v1_1/dnoyhupey/auto/upload`, { 
              method: "post",
              mode: "cors",
              body: formdata
          })
          .then(r => r.json())
          .then(data => {
              console.log(data)
              const imageUrl = data.url
              const token = data.delete_token
              console.log(token)
              setSpot({...spot, image: imageUrl})
              setCardImage(imageUrl);
              setDeleteToken(token)
              console.log(deleteToken)
              setLoading(false)
              
          });
        };
        const deleteFile = () => {
          // console.log(token)
          var formdata = new FormData();
          console.log(deleteToken)
          formdata.append("token", deleteToken);
  
          fetch(
            "https://api.cloudinary.com/v1_1/dnoyhupey/delete_by_token",
            {
              method: "post",
              mode: "cors",
              body: formdata
            }
          )
          .then(r => r.json())
          .then(data => {
            console.log(data)
          })
        };
        const confirm = () => {
          console.log("does this get cllaed")
          return (
            <ConfirmDialog
            title="Discard Spot?"
            open={true}
            setOpen={true}
            onConfirm={deleteFile()}
            >
              Are you sure you want to discard?
            </ConfirmDialog>
          )
        }
        useEffect(() => {
          return () => {
            if (!!deleteToken && !user_id){
              deleteFile()
            }
          }
        }, [deleteToken])
  

    return (
      <>
        {!user_id &&
          notLoggedIn()
        }
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
            <Map props={spot}>
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
            <Input disabled={disabled} fullWidth type="submit" style={{paddingBottom: "50px"}}/>
          </form>
        } 
        {cardImage && loading && 
          <CircularProgress/>
        }
      </>  
      )
  }

export default Post