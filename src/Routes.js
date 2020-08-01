import React from 'react'
import {Route, Redirect} from 'react-router-dom'
import Home from './Pages/Home'
import Spot from './Pages/Spot'
import Login from './Pages/Login'
import Signup from './Pages/Signup'
import PostTrick from './Pages/PostTrick'
 const Routes = () => {
    return (
        <>
        <Redirect exact from="/" to="/feed"  />
        <Route exact path="/:page?" render={props => <Home {...props}/>}/> 
        <Route exact path="/spots/:spotId" render={props => <Spot {...props} />} />
        <Route exact path="/login" render={props => <Login {...props} />} />
        <Route exact path="/signup" render={props => <Signup {...props} />} />
        <Route exact path="/spots/:spotId/:new" render={props => <PostTrick {...props} />} />
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