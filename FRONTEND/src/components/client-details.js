import React, { Component } from 'react';
import imageProfile from '../assets/profile.png'
import imageDelete from '../assets/delete-icon.png';
import imageEdit from '../assets/edit-icon.png'
import {
  ContainerImage,
  ContainerButtons,
  ContainerText,
  Image,
  ContainerTextDetails
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
import ClientApi from '../services/client-api'


class ClientDetails extends Component {
  constructor(props) {
    super(props)

    this.state = {
      client: {},
      clientNotUpdated: {},
      editMode: false
    }
    this.cancelEdit = this.cancelEdit.bind(this)
    this.cancelEditMode = this.cancelEditMode.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.renderClient = this.renderClient.bind(this)
  }

  componentWillMount() {
    this.setState({
      client: this.props.client
    })
  }

  renderClient() {
    ClientApi.getById(this.state.client.id)
      .then(data => this.setState({
        client: data
      }))
  }

  cancelEditMode() {
    this.renderClient();
    this.setState({
      editMode: !this.state.editMode
    })
  }

  cancelEdit() {
    this.setState({
      editMode: !this.state.editMode
    })
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

  render() {
    return (
      <div>
        <ContainerDetails onClick={() => this.props.cancelDetails()}>
        </ContainerDetails>
        <ContainerItemDetails>
          <CloseModal onClick={() => this.props.cancelDetails()}>
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
                      onChange={(event) => this.handleChange(key, event)}
                      disabled={!this.state.editMode} />
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
                        onChange={(event) => this.handleChangeCompany(key, event)}
                        disabled={!this.state.editMode} />
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
                          onChange={(event) => this.handleChangeAddress(key, event)}
                          disabled={!this.state.editMode} />
                      </ContainerInput>
                      : ''
                  )
                })}
                <ContainerInput>
                  <HtmlLabel>Geo</HtmlLabel>
                  <ContainerInputChild>
                    {Object.keys(this.state.client.address).map(key => {
                      return (
                        key === 'geo' ?
                          Object.keys(this.state.client.address[key]).map(keyOfKey => {
                            return (
                              <ContainerInput key={keyOfKey}>
                                <HtmlLabel>{keyOfKey.charAt(0).toUpperCase() + keyOfKey.slice(1)}:</HtmlLabel>
                                <HtmlInput
                                  value={this.state.client.address[key][keyOfKey]}
                                  onChange={(event) => this.handleChangeGeo(keyOfKey, event)}
                                  disabled={!this.state.editMode} />
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
            <CustomButton
              background={imageEdit}
              onClick={this.cancelEdit}
              show={!this.state.editMode}>
            </CustomButton>
            <CancelEditButton
              show={this.state.editMode}
              onClick={this.cancelEditMode}
              mode='bad'>
              Cancel
            </CancelEditButton>
            <CancelEditButton
              show={this.state.editMode}
              onClick={() => {
                this.props.updateClient(this.state.client.id, this.state.client)
                this.props.cancelDetails()
              }}
              mode='nice'>
              Save
            </CancelEditButton>
            <CustomButton
              show={!this.state.editMode}
              background={imageDelete}
              onClick={() => {
                this.props.deleteClient(this.state.client.id)
                this.props.cancelDetails()
              }}>
            </CustomButton>
          </ContainerButtons>
        </ContainerItemDetails>
      </div>
    )
  }
}

export default ClientDetails;