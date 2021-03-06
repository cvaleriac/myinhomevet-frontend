import React from 'react'
import {connect} from 'react-redux'
import {addUser} from '../actions/addUser'
import Button from 'react-bootstrap/Button'

class UserInput extends React.Component {

  state = {
    name: ''

  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSubmit = (event) => {
    event.preventDefault()
    this.props.addUser(this.state)
    this.setState({
      name: '',
      
    })
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>User Info: </label>
          <input type='text' placeholder='Name' value={this.state.name} name="name" onChange={this.handleChange}/><br/>
          
          <input type="submit" value="Submit"/>
        </form>
      </div>
    )
  }
}


export default connect(null, {addUser})(UserInput)