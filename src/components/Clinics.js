import React from 'react'
import {connect} from 'react-redux'
import {deleteClinic} from '../actions/deleteClinic'
import Button from 'react-bootstrap/Button'

const Clinics = (props) => {

    const handleDelete = (clinic) =>{

        props.deleteClinic(clinic.id, clinic.user_id)
    }
    return (
        
        <div>
            <h3>...And your favorite clinics</h3> 
            {props.clinics && props.clinics.map(clinic =>
            <li key={clinic.id}>{clinic.name} -{clinic.address}- {clinic.services} <Button variant="outline-primary" onClick={() => handleDelete(clinic)}>Delete</Button>

            </li>

            )}

        </div>
        
)

}


export default connect (null, {deleteClinic}) (Clinics)