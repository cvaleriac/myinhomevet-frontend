import React from 'react';
import {connect} from 'react-redux'
import UsersContainer from './containers/UsersContainer'

class App extends React.Component{

    componentDidMount() {
    fetch('http://localhost:3000/api/v1/users')
    .then(response => response.json())
    .then(data => console.log(data))
        
    }
    
  render(){

  return (
    <div className="App">
      <UsersContainer/>
    </div>
  );
 }
} 


export default App;
