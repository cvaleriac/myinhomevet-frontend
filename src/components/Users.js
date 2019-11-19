import React from 'react'
import {Route, Link} from 'react-router-dom'
import User from './User' 

const Users = (props) => {
    
    return (
        <div>{props.users.map(user=> 
        <li key={user.id}>
        <Link to={`/users/${user.id}`}>{user.name}</Link>
        </li>)}

        <Link to={`/users/new`}></Link>

            </div>
    )

}

export default Users