import React, { Component } from 'react';
import ClientList from './client-list'
import styled from 'styled-components'
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
  Image
} from './client-item-styles'

const ContainerDetails = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  background-color: #ccc;
`;

const ContainerItemDetails = styled.div`
  width: 40em;
  padding: 1em;
  display: flex;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: #fff;
`;

const CloseModal = styled.span`
  position: absolute;
  right: -1em;
  top: -1em;
  width: 1.7em;
  height: 1.5em;
  border-radius: 50%;
  border: 2px solid grey;
  font-size: 1.5em;
  text-align: center;
  cursor: pointer;
  color: white;
  background-color: grey;
  padding-top: .3em;
`;

const HtmlLabel = styled.label`
  font-weight: bold;
`

const HtmlInput = styled.input`
  position: absolute;
  left: 20em;
`;

const ContainerInput = styled.div`
  display: block;
  margin-top: 1em;
`;

const ContainerInputChild = styled.div`
  display: block;
  margin-left: 2em;
`;

class ClientDetails extends Component {
  constructor(props) {
    super(props)

    this.state = {
      client: {},
      clientUpdated: {}
    }
  }

  componentWillMount() {
    this.setState({
      client: this.props.client
    })
  }

  render() {
    return (
      <div>
        <ContainerDetails>
        </ContainerDetails>
        <ContainerItemDetails>
          <CloseModal onClick={() => this.props.cancelDetails()}>
            X
            </CloseModal>
          <ContainerImage>
            <Image src={imageProfile} alt="user" />
          </ContainerImage>
          <ContainerText>
            <ContainerInput>
              <HtmlLabel>Name:</HtmlLabel>
              <HtmlInput value={this.state.client.name} />
            </ContainerInput>
            <ContainerInput>
              <HtmlLabel>Username:</HtmlLabel>
              <HtmlInput value={this.state.client.username} />
            </ContainerInput>
            <ContainerInput>
              <HtmlLabel>Email:</HtmlLabel>
              <HtmlInput value={this.state.client.email} />
            </ContainerInput>
            <ContainerInput>
              <HtmlLabel>Phone:</HtmlLabel>
              <HtmlInput value={this.state.client.phone} />
            </ContainerInput>
            <ContainerInput>
              <HtmlLabel>Website:</HtmlLabel>
              <HtmlInput value={this.state.client.website} />
            </ContainerInput>
            <ContainerInput>
              <HtmlLabel>Address:</HtmlLabel>
              <ContainerInputChild>
                <ContainerInput>
                  <HtmlLabel>Street:</HtmlLabel>
                  <HtmlInput value={this.state.client.address.street} />
                </ContainerInput>
                <ContainerInput>
                  <HtmlLabel>Suite:</HtmlLabel>
                  <HtmlInput value={this.state.client.address.suite} />
                </ContainerInput>
                <ContainerInput>
                  <HtmlLabel>City:</HtmlLabel>
                  <HtmlInput value={this.state.client.address.city} />
                </ContainerInput>
                <ContainerInput>
                  <HtmlLabel>Zipcode:</HtmlLabel>
                  <HtmlInput value={this.state.client.address.zipcode} />
                </ContainerInput>
                <ContainerInput>
                  <HtmlLabel>Geo:</HtmlLabel>
                  <ContainerInputChild>
                    <ContainerInput>
                      <HtmlLabel>Latitude:</HtmlLabel>
                      <HtmlInput value={this.state.client.address.geo.lat} />
                    </ContainerInput>
                    <ContainerInput>
                      <HtmlLabel>Longitude:</HtmlLabel>
                      <HtmlInput value={this.state.client.address.geo.lng} />
                    </ContainerInput>
                  </ContainerInputChild>
                </ContainerInput>
              </ContainerInputChild>
            </ContainerInput>
            <ContainerInput>
              <HtmlLabel>Company:</HtmlLabel>
              <ContainerInputChild>
                <ContainerInput>
                  <HtmlLabel>Name:</HtmlLabel>
                  <HtmlInput value={this.state.client.company.name} />
                </ContainerInput>
                <ContainerInput>
                  <HtmlLabel>Catch-Phrase:</HtmlLabel>
                  <HtmlInput value={this.state.client.company.catchPhrase} />
                </ContainerInput>
                <ContainerInput>
                  <HtmlLabel>Bs:</HtmlLabel>
                  <HtmlInput value={this.state.client.company.bs} />
                </ContainerInput>
              </ContainerInputChild>
            </ContainerInput>
          </ContainerText>
          <ContainerButtons>
            <CustomButton background={imageEdit}></CustomButton>
            <CustomButton background={imageDelete} onClick={() => this.props.deleteClient(this.state.client.id)}></CustomButton>
          </ContainerButtons>
        </ContainerItemDetails>
      </div>
    )
  }
}

export default ClientDetails;