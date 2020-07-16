import React from 'react'
import {Route, Redirect} from 'react-router-dom'
import Home from './Pages/Home'
import Spot from './Pages/Spot'

 const Routes = () => {
    return (
        <>
        <Redirect exact from="/" to="/feed"  />
        <Route exact path="/:page?" render={props => <Home {...props}/>}/> 
        <Route exact path="/spots/:spotId" render={props => <Spot {...props} />} />
        {/* <Route exact from="/" render={props => <Home {...props} />}/>
        <Route exact path="/elements" render={props => <Elements {...props} />} />
        <Route exact path="/feed" render={props => <Feed {...props} />} />
        <Route exact path="/search" render={props => <Search {...props} />} />
        <Route exact path="/profile" render={props => <Profile {...props} />} />
        <Route exact path="/messages" render={props => <Messages {...props} />} /> */}
        </>
    )
}
export default Routes