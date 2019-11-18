import React from 'react'

const Pets = (props) => {

    return (
        <div>
            {props.pets && props.pets.map(pet =>
            <li key={pet.id}>{pet.name} -{pet.species}- {pet.age}

            </li>

            )}

        </div>
    )
}


export default Pets