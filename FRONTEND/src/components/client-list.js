import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ClientItem from './client-item'
import { connect } from 'react-redux'
import { addClient, removeClient, editClient } from '../actionCreators'
import styled from 'styled-components'
import ClientDetails from './client-details'
import ClientApi from '../services/client-api'

const ContainerList = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  width: 90%;
  margin: 0 auto;
`;

class ClientList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      clients: [],
      showingDetails: false,
      clientDetails: {}
    }

    this.cancelDetails = this.cancelDetails.bind(this)
  }

  componentWillReceiveProps(props) {
    this.setState({
      clients: props.clients
    })
  }

  getById(id) {
    ClientApi.getById(id)
      .then(data => this.setState({
        showingDetails: true,
        clientDetails: data
      }))
  }

  cancelDetails(){
    this.setState({
      showingDetails: false,
      clientDetails: {}
    })
  }

  render() {
    return (
      <div>
        {this.state.showingDetails ?
          <div>
            <ClientDetails
              client={this.state.clientDetails}
              showing={this.state.showingDetails}
              cancelDetails={this.cancelDetails} /> </div> :
          <div>
            <button onClick={() => this.props.save({ id: '2323' })}> new client</button>
            <p>ClientListComponent</p>
            <ContainerList>
              {[...this.state.clients].map(client =>
                <ClientItem
                  client={client}
                  key={client.id}
                  deleteClient={this.props.remove}
                  editClient={this.editClient}
                  getById={() => this.getById(client.id)} />
              )}
            </ContainerList>
          </div>
        }
      </div>
    );
  }
}

const mapStateToProps = state => {
  if (state.clients.response) {
    return {
      clients: state.clients.response
    }
  }
  return {
    clients: state.clients
  }

}

const mapDispatchToProps = dispatch => {
  return {
    remove(id) {
      dispatch(removeClient(id))
    },
    save(client) {
      dispatch(addClient(client))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ClientList);