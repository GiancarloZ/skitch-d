import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import userActions from '../redux/userActions';
import Button from "@material-ui/core/Button";
import ButtonGroup from '@material-ui/core/ButtonGroup';
import { makeStyles } from "@material-ui/core/styles";

import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
const useStyles = makeStyles(theme => ({
    root:{
      minHeight: "100%",
      minWidth: "auto",
      display: "flex",
    },
    paper: {
        padding: theme.spacing(0),
        margin: 0,
        minWidth: "100%",
        minHeight: "100%",
    }
}))
const LoginPage = props => {
  const classes = useStyles();
  // initializing dispatch
  const dispatch = useDispatch();
  // Setting up local state using the useState hook
  const [loginForm, setLoginForm] = useState({
    username: '',
    password: ''
  });
  const [open, setOpen] = React.useState(false);


  const handleClose = () => {
      setOpen(false);
  };
  // controlled form functions
  const handleSubmit = e => {
    e.preventDefault();
    console.log(props.history)
    console.log(props)

    dispatch(userActions.loginUserToDB(loginForm));
    props.history.push('/');
  };

  const handleChange = e =>
    setLoginForm({ ...loginForm, [e.target.name]: e.target.value });
  
  // Destructuring keys from our local state to use in the form
  const { username, password } = loginForm;

  // Component code
  return (
      <Dialog open={open} onClose={handleClose} onSubmit={handleSubmit} aria-labelledby="form-dialog-title">
                            <DialogTitle id="form-dialog-title">
                            <ButtonGroup disableElevation variant="contained" color="primary">
                                <Button>Login</Button>
                                <Button>Sign-Up</Button>
                            </ButtonGroup>
                            </DialogTitle>
                            <DialogContent>
                            <DialogContentText>
                                Please enter email address and password to log in.
                            </DialogContentText>
                            <TextField
                                autoFocus
                                type="text"
                                name="username"
                                value={username}
                                onChange={handleChange}
                                placeholder="Username"
                                fullWidth
                            />
                            <TextField
                                type="password"
                                name="password"
                                value={password}
                                onChange={handleChange}
                                placeholder="Password"
                                fullWidth
                            />
                            </DialogContent>
                            <DialogActions>
                            {/* <Button color="primary">
                                Submit
                            </Button> */}
                            <Button onClick={handleClose} color="primary">
                                Cancel
                            </Button>
                            
                            </DialogActions>
                        </Dialog>
  );
};

export default LoginPage;