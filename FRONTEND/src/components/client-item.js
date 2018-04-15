import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import imageProfile from '../assets/profile.png'
import imageDelete from '../assets/delete-icon.png';
import imageEdit from '../assets/edit-icon.png'
import { 
  ContainerItem, 
  ContainerImage, 
  ContainerButtons, 
  ContainerText, 
  DetailsButton, 
  CustomButton, 
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