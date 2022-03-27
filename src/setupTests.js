import Enzyme from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';

//enzyme configuration add adapter 

Enzyme.configure({
	adapter:new EnzymeAdapter(),
	disableLifecycleMethods:true
})
