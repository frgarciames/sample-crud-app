import React, { Component } from 'react';
import ClientItem from './client-item'
import { connect } from 'react-redux'
import { addClient, removeClient, editClient } from '../actionCreators'
import styled from 'styled-components'
import ClientDetails from './client-details'
import ClientApi from '../services/client-api'
import ClientNew from './client-new'

const ContainerList = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  width: 90%;
  margin: 0 auto;
`;

const TitleList = styled.p`
  text-align: center;
  text-transform: uppercase;
  font-weight: bold;
`;

const AddClientButton = styled.button`
  background-color: #13890f;
  width: 2em;
  height: 2em;
  border: 0;
  box-shadow: 2px 2px 4px #ccc;
  border-radius: 50%;
  cursor: pointer;
  position: absolute;
  top: 2em;
  right: 2em;
  font-size: 1.5em;
  font-weight: bold;
  color: #fff;
`;

class ClientList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      clients: [],
      showingDetails: false,
      clientDetails: {},
      showingNewClient: false
    }

    this.cancelDetails = this.cancelDetails.bind(this)
    this.cancelNewClient = this.cancelNewClient.bind(this)
  }

  componentWillReceiveProps(props) {
    console.log(props)
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

  cancelDetails() {
    this.setState({
      showingDetails: false,
      clientDetails: {},
      showingNewClient: false
    })
  }

  cancelNewClient() {
    this.setState({
      showingNewClient: false
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
              cancelDetails={this.cancelDetails}
              deleteClient={this.props.remove}
              updateClient={this.props.update} />
          </div> : this.state.showingNewClient ?
            <div>
              <ClientNew 
                cancelNewClient={this.cancelNewClient}
                save={this.props.save} />
            </div> :
            <div>
              <TitleList className='.client-list'>Client list</TitleList>
              <ContainerList>
                <AddClientButton
                  onClick={() => 
                  this.setState({ 
                    showingNewClient: true 
                  })}>
                  +
              </AddClientButton>
                {[...this.state.clients].map(client =>
                  <ClientItem
                    client={client}
                    key={client.id}
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
    save(client) {
      dispatch(addClient(client))
    },
    remove(id) {
      dispatch(removeClient(id))
    },
    update(id, client) {
      dispatch(editClient(id, client));
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ClientList);