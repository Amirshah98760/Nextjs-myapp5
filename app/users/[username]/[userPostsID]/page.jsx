'use client'
import {React, use} from 'react'

const userPosts = ({params}) => {
  const resolvedParams = use(params);
  const user = resolvedParams.username;
  const userPostsID = resolvedParams.userPostsID;
  console.log(user, userPostsID);

  
  return (
    <div>
      <h1>Posts for user: {user}</h1>
      <p>Posts ID: {userPostsID}</p>
    </div>
  )
}

export default userPosts