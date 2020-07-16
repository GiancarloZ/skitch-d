import React from 'react';
import Routes from './Routes';
import {Switch} from 'react-router-dom'
import TopBar from './Components/TopBar';
import Home from './Pages/Home';


const App = () => {
  return (
    <>
      <Switch>
        <Routes />
      </Switch>
  </>);
};

export default App;