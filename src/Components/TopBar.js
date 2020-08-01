import React from 'react'
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Grid from '@material-ui/core/Grid';
import Button from "@material-ui/core/Button";
import ButtonGroup from '@material-ui/core/ButtonGroup';
import { makeStyles } from "@material-ui/core/styles";
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import userActions from '../redux/userActions';
import { useSelector } from 'react-redux';
import LoginPage from '../Pages/Login';
import Signup from '../Pages/Signup';
const useStyles = makeStyles(theme => ({
    root:{
      maxHeight: 50,
      padding: 0,
    //   minWidth: "auto",
      display: "flex",
    },
    paper: {
        padding: theme.spacing(0),
        margin: 0,
        // minWidth: "100%",
        // minHeight: "100%",
    }
}))


const TopBar = props => {
    const {match, history } = props;
    const classes = useStyles();
  
    return (   
        <>
            <AppBar position="fixed" >
                <Grid container alignItems="center" justify="space-between">
                   
                    <Grid item >
                        <Button variant="text" color="secondary" onClick={() => history.push(`/`)} >
                            Skitch'D
                        </Button>
                    </Grid> 
                    <Grid item >
                       <Signup history={history}></Signup>
                    </Grid> 
                    <Grid item >
                        <LoginPage history={history}></LoginPage>
                    </Grid> 

                </Grid>
            </AppBar>
                 </>
    )}
export default TopBar