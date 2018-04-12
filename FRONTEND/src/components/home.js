import React, { Component } from 'react';
import ClientList from './client-list'

class Home extends Component {
  render(){
    return (
      <div>
        <ClientList 
          editClient={this.props.edit}/>
      </div>
    )
  }
}

export default Home;