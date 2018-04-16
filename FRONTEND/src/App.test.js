import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { render } from 'enzyme';
import { Provider } from 'react-redux';
import clients from './reducers/client-reducer'
import configureStore from './store/configureStore'
import clientList from './components/client-list';
import { loadClients } from './actionCreators'

const store = configureStore();

store.dispatch({
  type: "LOAD_CLIENTS",
  clients: []
});


it('renders without crashing', () => {
  const wrapper = render(<Provider store={store}>
    <App />
  </Provider>);
  expect(wrapper.find(".client-list").length).not.toBe(-1);
});
