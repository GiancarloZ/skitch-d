import React from 'react'
import { useSelector } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
}));

const Profile = () => {
  const classes = useStyles();
  const user = useSelector(state => state.currentUser);
  const userName = user.username
  const firstName = user.first_name
  const lastName = user.last_name
  const avatar = user.avatar

  const text = userName ? (
    <h1>{userName}'s Profile Page</h1>
  ) : (
    <h1>You need to be logged in to see your Profile Page</h1>
  );
  const defaultValue = userName ? (userName) : ("NoOneLoggedIn");
  
    return (
        <div>
            {text}
            <form className={classes.root} noValidate autoComplete="off">
            <div>

            {/* this needs to be add an avatar from camera or phone media */}
            <TextField
              id="standard-read-only-input"
              label="Avatar"
              defaultValue="Add Avatar"
              InputProps={{
                readOnly: true,
              }}
            />
            <TextField disabled id="standard-required" label="Username" defaultValue={ defaultValue} />
            <TextField
              disabled
              id="standard-password-input"
              label="Password"
              type="password"
              autoComplete="current-password"
            />
            
            <TextField disabled id="standard-disabled" label="First" defaultValue="First Name" />
            <TextField
              disabled
              id="standard-read-only-input"
              label="Read Only"
              defaultValue="Last Name" 
              InputProps={{
                readOnly: true,
              }}
            />
          
           
            </div>
            </form>
        </div>
    )
}
export default Profile
