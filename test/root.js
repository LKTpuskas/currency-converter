import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

const testsContext = require.context('.', true, /-test$/);
testsContext.keys().forEach(testsContext);

// front-end
const componentsContext = require.context('../src/components', true, /\.js$/);
componentsContext.keys().forEach(componentsContext);