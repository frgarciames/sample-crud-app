import React from 'react'
import  { render } from 'enzyme'
import ClientList from '../components/client-list';

it('renders client list empty', () => {
    const wrapper = render(<ClientList clients={[]} />);
    console.log(wrapper.text())
    expect(wrapper.find('.client').length).toBe(0)
})