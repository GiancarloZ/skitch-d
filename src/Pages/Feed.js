import React from 'react'
import { useSelector } from 'react-redux';
const Feed = () => {
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
        </>
    )
}
export default Feed