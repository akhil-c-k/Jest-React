import React from 'react'
import {shallow} from 'enzyme'
import Header from './index.js'

const setUp = (props={}) => {
    const component = shallow(<Header {...props}/>)
    return component;
}



describe('header component',()=>{
  
let component;

beforeEach(() => {
	component = setUp();
})

it('should render without error', () => {
    
     console.log(component.debug())
     const wraper = component.find('.headerComponent');
     expect(wraper.length).toBe(1);
  })


it('should render without error', () => {
    
     console.log(component.debug())
     const logo = component.find('.logoIMG');
     expect(logo.length).toBe(1);
  })
})
