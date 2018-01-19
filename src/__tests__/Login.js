import React from 'react';
import { mount } from 'enzyme';
import Login from '../components/Login';

it('simulate login failed', () => {
  const fakeLogin = jest.fn();
  const wrapper = mount(<Login loginSuccessful={fakeLogin} />);
  const emailEvent = {target:{name:"email", value:"mmhkhan@kth.se"}};
  const passwordEvent = {target:{name:"password", value:"khan"}};
  wrapper.find('input[name="email"]').simulate('change', emailEvent);
  wrapper.find('input[name="password"]').simulate('change', passwordEvent);
  wrapper.find('[data-test="form"]').simulate('submit');
  expect(wrapper.find('.error').exists()).toBeTruthy();

});

it('simulate login success', () => {
  const fakeLogin = jest.fn();
  const wrapper = mount(<Login loginSuccessful={fakeLogin} />);
  const emailEvent = {target:{name:"email", value:"mmhkhan@kth.se"}};
  const passwordEvent = {target: {name: "password", value: "ValidateMe8"}};
  wrapper.find('input[name="email"]').simulate('change', emailEvent);
  wrapper.find('input[name="password"]').simulate('change', passwordEvent);
  wrapper.find('[data-test="form"]').simulate('submit');
  expect(wrapper.find('.success').exists()).toBeTruthy();

});