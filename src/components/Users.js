import React from 'react'

const Users = (props) => {
    return (
        <div>{props.users.map(user => <li key={user.id}>{user.username} - {user.clinics}</li> )}
            </div>
    )

}

export default Users