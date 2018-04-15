import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { shallow } from 'enzyme';
import { Provider } from 'react-redux';
import store from './store/configureStore'
import clients from './reducers/client-reducer'
import clientList from './components/client-list';

it('renders without crashing', () => {
  const wrapper = shallow(<App />);
  expect(wrapper.text()).toEqual("<Home />");
});
