import React from 'react'
import {shallow} from 'enzyme'
import Header from './index.js'
import {findByTestArr} from '../../../Utils'


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
     const wraper = findByTestArr(component,'headerComponent');
     expect(wraper.length).toBe(1);
  })


it('should render without error', () => {
    
     console.log(component.debug())
     const logo = findByTestArr(component,'logoIMG');
     expect(logo.length).toBe(1);
  })
})
