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
    const [open, setOpen] = React.useState(false);
    const [openSignup, setOpenSignup] = React.useState(false);
    const user = useSelector(state => state.currentUser.username) || false;
    // const handleClickOpen = () => {
    //     setOpen(true)
    //  };
    // const handleClickOpenSignup = () => {
    //     setOpenSignup(true)
    // };
    // const handleClose = () => {
    //      setOpen(false);
    // };
    // const handleCloseSignup = () => {
    //     setOpenSignup(false);
    // };
    // const handleLogout = () => {
    //      dispatch(userActions.logoutUser());
    // };
     
     // initializing dispatch
    const dispatch = useDispatch();
     // Setting up local state using the useState hook
    // const [loginForm, setLoginForm] = React.useState({
    //      username: '',
    //      password: ''
    // });
    // const [signUpForm, setSignUpForm] = React.useState({
    //     username: '',
    //     password: ''
    // });
    //  // controlled form functions
    // const handleSubmit = e => {
    //     e.preventDefault();
    //     dispatch(userActions.loginUserToDB(loginForm));
    //     setOpen(false)
    // };
    // const handleSignUpSubmit = e => {
    //     e.preventDefault();
    //     dispatch(userActions.newUserToDB(signUpForm));
    //     setOpenSignup(false)
    // }
    // const handleChange = e =>
    //     setLoginForm({ ...loginForm, [e.target.name]: e.target.value });
     
    // const handleSignUpChange = e => 
    //     setSignUpForm({ ...signUpForm, [e.target.name]: e.target.value });
    

     // Destructuring keys from our local state to use in the form
    // const { username, password } = loginForm;
    // const login = !user ? (<>
    //     <Button color="secondary" className="button" onClick={handleClickOpen}>Login</Button>
    //         <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
    //             <DialogTitle id="form-dialog-title">
    //             <ButtonGroup disableElevation variant="contained" color="primary">
    //                 {/* <Button>Login</Button>
    //                 <Button>Sign-Up</Button> */}
    //             </ButtonGroup>
    //             </DialogTitle>
    //             <DialogContent>
    //             <DialogContentText>
    //                 Please enter username and password to log in.
    //             </DialogContentText>
    //             <form onSubmit={handleSubmit}>
    //             <h1>Login Page</h1>
    //             <input
    //                 type="text"
    //                 name="username"
    //                 value={username}
    //                 onChange={handleChange}
    //                 placeholder="Username"
    //             />
    //             <input
    //                 type="password"
    //                 name="password"
    //                 value={password}
    //                 onChange={handleChange}
    //                 placeholder="Password"
    //             />
    //             </form>
    //             </DialogContent>
    //             <DialogActions>
    //             <Button onClick={handleSubmit} color="primary">
    //                 Submit
    //             </Button>
    //             <Button onClick={handleClose} color="primary">
    //                 Cancel
    //             </Button>
                
    //             </DialogActions>
    //         </Dialog>
    //         </>) : (<Button color="secondary" className="button" onClick={handleLogout}>Logout</Button>);
    //     const signup = !user ? (<>
    //         <Button color="secondary" className="button" onClick={handleClickOpenSignup}>Sign Up</Button>
    //             <Dialog open={openSignup} onClose={handleCloseSignup} aria-labelledby="form-dialog-title">
    //                 <DialogTitle id="form-dialog-title">
    //                 <ButtonGroup disableElevation variant="contained" color="primary">
    //                     {/* <Button>Login</Button>
    //                     <Button>Sign-Up</Button> */}
    //                 </ButtonGroup>
    //                 </DialogTitle>
    //                 <DialogContent>
    //                 <DialogContentText>
    //                     Please enter username and password to sign up.
    //                 </DialogContentText>
    //                 <form onSubmit={handleSubmit}>
    //                 <h1>Sign Up Page</h1>
    //                 <input
    //                     type="text"
    //                     name="username"
    //                     value={username}
    //                     onChange={handleSignUpChange}
    //                     placeholder="Username"
    //                 />
    //                 <input
    //                     type="password"
    //                     name="password"
    //                     value={password}
    //                     onChange={handleSignUpChange}
    //                     placeholder="Password"
    //                 />
    //                 </form>
    //                 </DialogContent>
    //                 <DialogActions>
    //                 <Button onClick={handleSignUpSubmit} color="primary">
    //                     Submit
    //                 </Button>
    //                 <Button onClick={handleCloseSignup} color="primary">
    //                     Cancel
    //                 </Button>
                    
    //                 </DialogActions>
    //             </Dialog>
    //             </>) : (<></>);
  
    return (   
        <>
            <AppBar position="fixed" >
                <Grid container alignItems="center" justify="space-between">
                   
                    <Grid item >
                        <Typography variant="h6" color="secondary" >
                            {}
                            Skitch'D
                        </Typography>
                    </Grid> 
                    <Grid item >
                       <Signup history={history}></Signup>
                    </Grid> 
                    <Grid item >
                        {/* {login} */}
                        <LoginPage history={history}></LoginPage>
                    </Grid> 

                </Grid>
            </AppBar>
                 </>
    )}
export default TopBar