import React from 'react';
import {connect} from 'react-redux'
import UsersContainer from './containers/UsersContainer'

class App extends React.Component{

    componentDidMount() {
        
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
