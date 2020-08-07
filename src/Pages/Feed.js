import React from 'react'
import { useSelector } from 'react-redux';
const Feed = props => {
    const {history, spots, tricks} = props
    const user = useSelector(state => state.currentUser.username);
    const text = user ? (
      <h1>{user} is currently logged in</h1>
    ) : (
      <h1>Nobody is logged in</h1>
    );
    return (
        <>
            This is Feed
            {text}
            <h3>Spots posted: {spots.length}</h3>
            <h3>Tricks posted: {tricks.length}</h3>
        </>
    )
}
export default Feed