import React from 'react'
import {connect} from 'react-redux'
import {addPet} from '../actions/addPet'


class PetInput extends React.Component {

    state = {
        name: '',
        species: '',
        age: ''
    }

    handleChange = (event) => {
        this.setState({
          [event.target.name]: event.target.value
        })
      }
    
      handleSubmit = (event) => {
        event.preventDefault()
        this.props.addPet(this.state, this.props.user.id)
        this.setState({
          name: '',
          species: '',
          age: ''
          
        })
      }

    render() {

        return (
            <section class="container">
            <div class="two">
                <h3> You can add a new pet:</h3>
              <form onSubmit={this.handleSubmit}>
              <label>New Pet Info: </label>
              <input type='text' placeholder='Name' name = "name" value = {this.state.name} onChange={this.handleChange}/><br/>
              <input type='text' placeholder='Species' name = "species" value = {this.state.species} onChange={this.handleChange}/><br/>
              <input type='text' placeholder='Age' name = "age" value = {this.state.age} onChange={this.handleChange}/><br/>  
              <input type="submit" value="Submit"/><br/>
             </form> <br/>
            </div>
            </section>
        )
    }
}

export default connect(null, {addPet}) (PetInput)