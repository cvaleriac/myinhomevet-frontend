import React from 'react'
import {connect} from 'react-redux'
import {deletePet} from '../actions/deletePet'
import Button from 'react-bootstrap/Button'


const Pets = (props) => {

    const handleDelete = (pet) =>{

        props.deletePet(pet.id, pet.user_id)


    }
    

    return (
        <div>
            {props.pets && props.pets.map(pet =>
            <li key={pet.id}>{pet.name} -{pet.species}- {pet.age} <Button variant="outline-primary" onClick={() =>handleDelete(pet)}>Delete</Button>
            </li>

            )}

        </div>
    )
 }


export default connect(null,{deletePet})(Pets);
