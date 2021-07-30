import { h } from 'preact';
import Home from '../src/components/home';
// See: https://github.com/preactjs/enzyme-adapter-preact-pure
import { shallow } from 'enzyme';

describe('Initial Test of the Home component', () => {
	test('Home component renders TV Bland header', () => {
		const context = shallow(<Home />);
		expect(context.find('h1').text()).toBe('TV Bland');
	});
});
