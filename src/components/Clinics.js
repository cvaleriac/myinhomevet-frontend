import React from 'react'
import {connect} from 'react-redux'
import {deleteClinic} from '../actions/deleteClinic'

const Clinics = (props) => {

    const handleDelete = (clinic) =>{

        props.deleteClinic(clinic.id, clinic.user_id)
    }
    return (
        <div>
            {props.clinics && props.clinics.map(clinic =>
            <li key={clinic.id}>{clinic.name} -{clinic.address}- {clinic.services} <button onClick={() => handleDelete(clinic)}>Delete</button>

            </li>

            )}

        </div>
)

}


export default connect (null, {deleteClinic}) (Clinics)