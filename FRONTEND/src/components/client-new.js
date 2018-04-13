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
  Value,
  Title,
  Image
} from './client-item-styles'
import {
  ContainerDetails,
  ContainerInput,
  ContainerItemDetails,
  CloseModal,
  HtmlLabel,
  CustomButton,
  HtmlInput,
  ContainerInputChild,
  CancelEditButton
} from './client-details-styles'

const ContainerTextDetails = styled.div`
  margin-left: 14em;
  font-size: .9em;
  margin-top: .7em;
`;

const ContainerForm = styled.div`
  width: 60em;
  padding: 1em;
  display: flex;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: #fff;
`;

class ClientNew extends Component {
  constructor(props) {
    super(props);

    this.state = {
      client: {
        name: '',
        username: '',
        email: '',
        phone: '',
        website: '',
        address: {
          street: '',
          suite: '',
          city: '',
          zipcode: '',
          geo: {
            lat: '',
            lng: ''
          }
        },
        company: {
          name: '',
          catchPhrase: '',
          bs: ''
        }
      }
    }
    this.reset = this.reset.bind(this);
  }

  handleChange(key, event) {
    let clientUpdated = this.state.client;
    clientUpdated[key] = event.target.value;
    this.setState({
      client: clientUpdated
    })
  }

  handleChangeCompany(key, event) {
    let clientUpdated = this.state.client;
    clientUpdated.company[key] = event.target.value;
    this.setState({
      client: clientUpdated
    })
  }

  handleChangeAddress(key, event) {
    let clientUpdated = this.state.client;
    clientUpdated.address[key] = event.target.value;
    this.setState({
      client: clientUpdated
    })
  }

  handleChangeGeo(key, event) {
    let clientUpdated = this.state.client;
    clientUpdated.address.geo[key] = event.target.value;
    this.setState({
      client: clientUpdated
    })
  }

  reset() {
    this.setState({
      client: {
        name: '',
        username: '',
        email: '',
        phone: '',
        website: '',
        address: {
          street: '',
          suite: '',
          city: '',
          zipcode: '',
          geo: {
            lat: '',
            lng: ''
          }
        },
        company: {
          name: '',
          catchPhrase: '',
          bs: ''
        }
      }
    })
  }

  render() {
    return (
      <div>
        <ContainerDetails
          onClick={() => this.props.cancelNewClient()}>
        </ContainerDetails>
        <ContainerForm>
          <ContainerItemDetails>
            <CloseModal onClick={() => this.props.cancelNewClient()}>
              X
            </CloseModal>
            <ContainerImage>
              <Image src={imageProfile} alt="user" />
            </ContainerImage>
            <ContainerText>
              {Object.keys(this.state.client).map(key => {
                return (
                  key !== 'address' &&
                    key !== 'company' &&
                    key !== 'id' ?
                    <ContainerInput key={key}>
                      <HtmlLabel>{key.charAt(0).toUpperCase() + key.slice(1)}:</HtmlLabel>
                      <HtmlInput
                        value={this.state.client[key]}
                        onChange={(event) => this.handleChange(key, event)} />
                    </ContainerInput>
                    : ''
                )
              })}
              <ContainerInput>
                <HtmlLabel>Company:</HtmlLabel>
                <ContainerInputChild>
                  {Object.keys(this.state.client.company).map(key => {
                    return (
                      <ContainerInput key={key}>
                        <HtmlLabel>{key.charAt(0).toUpperCase() + key.slice(1)}:</HtmlLabel>
                        <HtmlInput
                          value={this.state.client.company[key]}
                          onChange={(event) => this.handleChangeCompany(key, event)} />
                      </ContainerInput>
                    )
                  })}
                </ContainerInputChild>
              </ContainerInput>
            </ContainerText>
            <ContainerTextDetails>
              <ContainerInput>
                <HtmlLabel>Address:</HtmlLabel>
                <ContainerInputChild>
                  {Object.keys(this.state.client.address).map(key => {
                    return (
                      key !== 'geo' ?
                        <ContainerInput key={key}>
                          <HtmlLabel>{key.charAt(0).toUpperCase() + key.slice(1)}:</HtmlLabel>
                          <HtmlInput
                            value={this.state.client.address[key]}
                            onChange={(event) => this.handleChangeAddress(key, event)} />
                        </ContainerInput>
                        : ''
                    )
                  })}
                  <ContainerInput>
                    <HtmlLabel>Geo</HtmlLabel>
                    <ContainerInputChild>
                      {Object.keys(this.state.client.address).map(key => {
                        return (
                          key == 'geo' ?
                            Object.keys(this.state.client.address[key]).map(keyOfKey => {
                              return (
                                <ContainerInput key={keyOfKey}>
                                  <HtmlLabel>{keyOfKey.charAt(0).toUpperCase() + keyOfKey.slice(1)}:</HtmlLabel>
                                  <HtmlInput
                                    value={this.state.client.address[key][keyOfKey]}
                                    onChange={(event) => this.handleChangeGeo(keyOfKey, event)} />
                                </ContainerInput>
                              )
                            }) : ''
                        )
                      })}
                    </ContainerInputChild>
                  </ContainerInput>
                </ContainerInputChild>
              </ContainerInput>
            </ContainerTextDetails>
            <ContainerButtons>
              <CancelEditButton
                show={true}
                onClick={this.reset}
                mode='bad'>
                Reset
            </CancelEditButton>
              <CancelEditButton
                show={true}
                onClick={() => {
                  this.props.save(this.state.client),
                  this.props.cancelNewClient()
                }}
                mode='nice'>
                Save
            </CancelEditButton>
            </ContainerButtons>
          </ContainerItemDetails>
        </ContainerForm>
      </div>
    );
  }
}

export default ClientNew;