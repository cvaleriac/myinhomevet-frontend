import React from 'react'
import {Route, Link} from 'react-router-dom'
import User from './User' 

//const Users = (props) => {

class Users extends React.Component {

    state = {
        users: '',
        sort: 'asc'
    }

    toggleSort = () => {
        const {users} = this.state;
        this.props.users.sort((a, b) => a.name.localeCompare(b.name) )    
        this.setState({ users })
      }

    render() {

        const{users} = this.state
        
        
        

    return (
    
        <div>{this.props.users.map(user=> 
        <li key={user.id}>
        <Link to={`/users/${user.id}`}>{user.name}</Link>
        </li>)}
        <button onClick = {() => this.toggleSort(users)}>Sort</button>

        <Link to={`/users/new`}></Link>

            </div>
    )
        }

}

export default Users