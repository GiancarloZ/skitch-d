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
import Map from '../Components/Map';


export const PostTrick = props => {
    const { history } = props;
    
    return (
     
    )
}
