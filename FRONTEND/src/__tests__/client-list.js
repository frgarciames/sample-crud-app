import React from 'react'
import  { shallow } from 'enzyme'
import ConnectedClientList from '../components/client-list';
import configureStore from '../store/configureStore'
import ClientItem from '../components/client-item';

const store = configureStore();

store.dispatch({
  type: "LOAD_CLIENTS",
  clients: [{id: 1, name: 'test'}]
});

it('renders client list empty', () => {
    const wrapper = shallow(<ConnectedClientList store={store}/>);
    expect(wrapper.find(ClientItem).length).toBe(0)
})