import React from 'react';
import { mount, shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import Login from '../components/Login';

it('Login component should render as expected',() =>{
    const component = shallow(<Login />);
    const tree = toJson(component);
    expect(tree).toMatchSnapshot();
});


