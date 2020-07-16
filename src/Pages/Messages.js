import React from 'react'
import { useSelector } from 'react-redux';

const Messages = () => {
    const user = useSelector(state => state.currentUser.username);
    const text = user ? (
      <h1>{user}'s Messages</h1>
    ) : (
      <h1>You need to be logged in to see your Messages</h1>
    );
    return (
        <div>
           {text}
        </div>
    )
}
export  default Messages