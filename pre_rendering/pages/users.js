import React, { Component } from 'react'
import User from '../components/User.js'

function UserList({users}) {
  return (
    <>
        <h1>List of users</h1>
        <hr/>
        {
            users.map(user => {
                return <div key={user.id} >
                    <User user={user}/>
                </div>
            })
        }
    </>   
  )
}

export default UserList;

//this function runs at the server and creates a static pre-rendered html and then sent to client.
export async function getStaticProps(){

    const response = await fetch('https://jsonplaceholder.typicode.com/users')
    const data = await response.json()
    // console.log(data);

    return {
        props : {
            users: data
        }
    }
}