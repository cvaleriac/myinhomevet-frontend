import React from 'react'
import {connect} from 'react-redux'
import {addClinic} from '../actions/addClinic'

class ClinicInput extends React.Component {

    state = {
        name: '',
        address: '',
        services: ''
    }

    handleChange = (event) => {
        this.setState({
          [event.target.name]: event.target.value
        })
      }
    
      handleSubmit = (event) => {
        event.preventDefault()
        this.props.addClinic(this.state, this.props.user.id)
        this.setState({
          name: '',
          address: '',
          services: ''
          
        })
      }

    render() {

        return (
            <div>
              <form onSubmit={this.handleSubmit}>
              <label>New Clinic Info: </label>
              <input type='text' placeholder='Name' name = "name" value = {this.state.name} onChange={this.handleChange}/><br/>
              <input type='text' placeholder='Address' name = "address" value = {this.state.species} onChange={this.handleChange}/><br/>
              <input type='text' placeholder='Services' name = "services" value = {this.state.age} onChange={this.handleChange}/><br/>  
              <input type="submit" value="Submit"/><br/>
             </form> <br/>
            </div>
        )
    }
}

export default connect(null, {addClinic}) (ClinicInput)