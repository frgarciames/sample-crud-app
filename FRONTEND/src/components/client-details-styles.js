import styled from 'styled-components'

const ContainerDetails = styled.div`
width: 100%;
height: 100%;
position: absolute;
background-color: #ccc;
`;

const ContainerItemDetails = styled.div`
width: 60em;
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
right: 0;
top: 0;
width: 1.7em;
height: 1.5em;
font-size: 1.5em;
text-align: center;
cursor: pointer;
color: black;
padding-top: .3em;
`;

const HtmlLabel = styled.label`
font-weight: bold;
`

const HtmlInput = styled.input`
position: absolute;
left: 10em;
`;

const ContainerInput = styled.div`
display: block;
position: relative;
margin-top: 1em;
`;

const ContainerInputChild = styled.div`
display: block;
margin-left: 2em;
`;

const CustomButton = styled.div`
  background: url(${props => props.background});
  background-position: center;
  background-repeat: no-repeat;
  background-size: 100% 100%;
  border: 0;
  width: 2em;
  height: 2em;
  margin-right: .5em;
  cursor: pointer;
  display: ${props => props.show ? 'block' : 'none'}
`;

const CancelEditButton = styled.button`
  display: ${props => props.show ? 'block' : 'none'}
  border: 2px solid ${props => props.mode === 'bad' ? 'red' : 'green'}
  background-color: ${props => props.mode === 'bad' ? 'red' : 'green'}
  color: white;
  cursor: pointer;
  font-weight:bold;
  padding: .5em;
  border-radius: 5px;
  margin-right: .5em;
`;

export {
  ContainerDetails,
  ContainerInput,
  ContainerItemDetails,
  CloseModal,
  HtmlLabel,
  HtmlInput,
  ContainerInputChild,
  CancelEditButton,
  CustomButton
}