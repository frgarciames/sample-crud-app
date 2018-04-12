import styled from 'styled-components'

const ContainerItem = styled.div`
  width: 25em;
  padding: 1em;
  box-shadow: 2px 2px 10px #ccc;
  display: flex;
  margin-top:1em;
  position: relative;
  background-color: #fff;
`;

const ContainerImage = styled.div`
  width: 7.5em;
  height: 7em;
`;

const Image = styled.img`
  width: 100%;
  height: 100%
  border-radius: 50%;
  border: 1px solid black;
`;

const ContainerText = styled.div`
  margin-left: 2em;
  margin-top: .7em;
  font-size: .9em;
`;

const Title = styled.div`
  font-weight: bold;
  display: inline-block;
`;

const Value = styled.div`
  display: inline-block;
  margin-left: .5em;
`;

const ContainerButtons = styled.div`
  position: absolute;
  display: flex;
  right: .3em;
  top: .3em;
`;

const CustomButton = styled.div`
  background: url(${props => props.background});
  background-position: center;
  background-repeat: no-repeat;
  background-size: 100% 100%;
  border: 0;
  width: 1.3em;
  height: 1.3em;
  margin-right: .5em;
  cursor: pointer;
`;

const DetailsButton = styled.div`
  position: absolute;
  padding: .3em;
  right: 0;
  bottom: 0;
  cursor: pointer;
  color: grey;
  font-size: .8em;
`;

export {ContainerItem, ContainerImage, ContainerButtons, ContainerText, DetailsButton, CustomButton, Value, Title, Image};