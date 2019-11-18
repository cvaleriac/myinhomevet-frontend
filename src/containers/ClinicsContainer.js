import React from 'react'
import ClinicInput from '../components/ClinicInput'
import Clinics from '../components/Clinics'

class ClinicsContainer extends React.Component {
    render () {

        return (

            <div>
                <ClinicInput user={this.props.user} />
                <Clinics clinics={this.props.user && this.props.user.clinics}/>
            </div>
        )
    }
}

export default ClinicsContainer