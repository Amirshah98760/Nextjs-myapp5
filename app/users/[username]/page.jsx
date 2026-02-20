"use client"
import React from 'react'
import { use } from 'react';

const  userParams= ({params}) => {
  const resolveParams = use(params);
  const username = resolveParams.username;
  console.log(username)
  return (
    <div>
      <h1>username : {username} </h1>

    </div>
  )
}

export default userParams