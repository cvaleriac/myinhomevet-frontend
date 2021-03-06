import React from 'react'
import PetInput from '../components/PetInput'
import Pets from '../components/Pets'

class PetsContainer extends React.Component {
    render () {

        return (

            <div>
                <PetInput user={this.props.user}/>
                <Pets pets = {this.props.user && this.props.user.pets}/>
            </div>
        )
    }
}

export default PetsContainer