import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import GoogleMapReact from 'google-map-react';
import Marker from './Marker';
import usePosition from './usePosition';
import positionActions from '../redux/positionActions';


const Map = (props) => {

    const dispatch = useDispatch();
    const currentPosition = useSelector(state => state.currentPosition);
    console.log(currentPosition)
 
    // const {latitude, longitude, error} = usePosition();
    const [mapState, setMapState] = useState({
        center: [currentPosition[0], currentPosition[1]],
        zoom: 14,
        draggable: true,
        lat: currentPosition[0],
        lng: currentPosition[1],
      })
      // dispatch(positionActions.setPosition(lat, lng))
      console.log(mapState)
     
    function onCircleInteraction(childKey, childProps, mouse) {
  
        setMapState({
            ...mapState,
          draggable: false,
          lat: mouse.lat,
          lng: mouse.lng
        });
        const latLng = [mouse.lat, mouse.lng]
        console.log(latLng)
        dispatch(positionActions.setPosition(latLng))
       
        console.log('onCircleInteraction called with', childKey, childProps, mouse);
    }
    useEffect(() => {
      const latLng = [lat, lng]
      dispatch(positionActions.setPosition(latLng))
    }, [mapState])

    function onCircleInteraction3(childKey, childProps, mouse){
      
        setMapState({...mapState,draggable: true})
        console.log('onCircleInteraction3 called with', childKey, childProps, mouse);
        
    }
    useEffect(() => {
      // dispatch(positionActions.setPosition(lat, lng))
      console.log(lat, lng)
    }, [])
  
    function onChange({center, zoom}){
        setMapState({
            ...mapState,
            center: center,
            zoom: zoom
        })
        // dispatch(positionActions.setPosition(lat, lng))
    }
    const {center, zoom, lat, lng, draggable } = mapState
    
    return (
 
        <div style={{ height: '350px', width: '100%' }}>
        <GoogleMapReact draggable={draggable}
          bootstrapURLKeys={{ key: "AIzaSyDA7WH7dJ9TH95f6uprlugmQMPNp9GeVq0" }}
          defaultCenter={center}
          defaultZoom={zoom}
          onChange={onChange}
          onChildMouseDown={onCircleInteraction}
          onChildMouseUp={onCircleInteraction3}
          onChildMouseMove={onCircleInteraction} 
          onChildClick={() => console.log('child click')}
          onClick={() => console.log('mapClick')}  
        >
          <Marker
            lat={lat}
            lng={lng}
            text="My Marker"
            color="blue"
          />
        </GoogleMapReact>
      </div>

    );
}

export default Map;