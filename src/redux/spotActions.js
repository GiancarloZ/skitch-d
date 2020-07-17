// API CONSTANTS

const BASE_URL = 'http://localhost:3000';
const HEROKU_URL = "https://skitchd-app-api.herokuapp.com"
const SPOTS_URL = BASE_URL + '/spots';
// const PERSIST_URL = BASE_URL + '/persist';
// const LOGIN_URL = BASE_URL + '/login';
// const SPECIFIC_USER_URL = id => USERS_URL + '/' + id;

// Redux Actions

const loadSpotAction = spotObj => ({
  type: 'LOAD_SPOTS',
  spot: spotObj
});

// const clearUserAction = () => ({
//   type: 'CLEAR_USER'
// });

// Fetch

const loadAllSpots = () => dispatch => {
  const config = {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    },
  };
  fetch(HEROKU_URL + '/spots', config)
    .then(r => r.json())
    .then(data => {
        console.log(data)
      dispatch(loadSpotAction(data));
     
    });
};

const newSpot = spotObj => dispatch => {
  const config = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(spotObj)
  };
  fetch(HEROKU_URL + '/spots', config)
    .then(r => r.json())
    .then(data => {
      console.log(data)
      dispatch(loadAllSpots);
      // localStorage.setItem('token', data.token);
    });
};
export default {
    loadAllSpots,
    newSpot,
  };