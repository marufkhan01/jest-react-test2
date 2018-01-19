import React from 'react';
import { mount, shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import App from '../components/App';

it('App component should render as expected',() =>{
    const component = shallow(<App />);
    const tree = toJson(component);
    expect(tree).toMatchSnapshot();
});



