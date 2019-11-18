import React from 'react'

const Clinics = (props) => {

    return (
        <div>
            {props.clinics && props.clinics.map(clinic =>
            <li key={clinic.id}>{clinic.name} -{clinic.address}- {clinic.services}

            </li>

            )}

        </div>
)

}


export default Clinics