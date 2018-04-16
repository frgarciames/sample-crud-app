import React, { Component } from 'react';
import PropTypes from 'prop-types';
import imageProfile from '../assets/profile.png'
import { 
  ContainerItem, 
  ContainerImage, 
  ContainerText, 
  DetailsButton, 
  Value, 
  Title, 
  Image } from './client-item-styles'

class ClientItem extends Component {
  constructor(props) {
    super(props);

    this.state = {
      client: {}
    }
  }

  componentWillMount() {
    this.setState({
      client: this.props.client
    })
  }

  componentWillReceiveProps(props) {
    this.setState({
      client: props.client
    })
  }

  render() {
    return (
      <div className='client'>
        <ContainerItem>
          <DetailsButton
            onClick={() => this.props.getById()}>
            View details...
          </DetailsButton>
          <ContainerImage>
            <Image src={imageProfile} alt="user" />
          </ContainerImage>
          <ContainerText>
            {Object.keys(this.state.client).map(key => {
              return (
                key !== 'id' ?
                  <div key={key}>
                    <Title>
                      {key.charAt(0).toUpperCase() + key.slice(1)}:
                  </Title>
                    <Value>
                      {this.state.client[key]}
                    </Value>
                  </div>
                  : ''
              )
            })}
          </ContainerText>
        </ContainerItem>
      </div>
    );
  }
}

ClientItem.propTypes = {
  clients: PropTypes.array,
  deleteClient: PropTypes.func,
  editClient: PropTypes.func,
  getById: PropTypes.func
}

export default ClientItem;