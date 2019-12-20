import React from 'react'
import {connect} from 'react-redux'
import {deletePet} from '../actions/deletePet'


const Pets = (props) => {

    const handleDelete = (pet) =>{

        props.deletePet(pet.id, pet.user_id)


    }
    

    return (
        <div>
            {props.pets && props.pets.map(pet =>
            <li key={pet.id}>{pet.name} -{pet.species}- {pet.age} <button onClick={() =>handleDelete(pet)}>Delete</button>
            </li>

            )}

        </div>
    )
 }


export default connect(null,{deletePet})(Pets);
