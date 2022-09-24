/**
 * @jest-environment isdom
 */

import { shallow } from "enzyme"
import React from "react"
import { Dropdown } from "../Dropdown"
import Enzyme from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
Enzyme.configure({ adapter: new Adapter() });

describe('Dropdown', () => {
  test('showld render', () => {
    const wrapper = shallow(<Dropdown children={<div/>} button={<button />}></Dropdown>)
    expect(wrapper).toBeDefined();
    expect(wrapper.find('div.container').isEmptyRender()).toBeFalsy();
  })
  test('should render (snapshot)', () => {
    const wrapper = shallow(<Dropdown children={<div/>} button={<button />}></Dropdown>)
    expect(wrapper).toMatchSnapshot()
  })
})