// API CONSTANTS

const BASE_URL = 'http://localhost:3000';
const ELEMENTS_URL = BASE_URL + '/elements';
// const PERSIST_URL = BASE_URL + '/persist';
// const LOGIN_URL = BASE_URL + '/login';
// const SPECIFIC_USER_URL = id => USERS_URL + '/' + id;

// Redux Actions

const loadElementAction = elementObj => ({
  type: 'LOAD_ELEMENTS',
  element: elementObj
});

// const clearUserAction = () => ({
//   type: 'CLEAR_USER'
// });

// Fetch

const loadAllElements = () => dispatch => {
  const config = {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    },
  };
  fetch(ELEMENTS_URL, config)
    .then(r => r.json())
    .then(data => {
        console.log(data)
      dispatch(loadElementAction(data));
     
    });
};

const newElement = elementObj => dispatch => {
  const config = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(elementObj)
  };
  fetch(ELEMENTS_URL, config)
    .then(r => r.json())
    .then(data => {
      console.log(data)
      // dispatch(setUserAction(data.user));
      // localStorage.setItem('token', data.token);
    });
};
export default {
    loadAllElements,
    newElement,
  };