import React from 'react'

import PetsContainer from '../containers/PetsContainer'
import ClinicsContainer from '../containers/ClinicsContainer'

const User = (props) =>{

    let user = props.users[props.match.params.id -1]
     
    return (
        <div>
        <h2> 
        {user ? user.name : null}
        </h2>
        <PetsContainer user ={user}/><br/>
        <ClinicsContainer user = {user}/>
        </div>
    )

}

export default User