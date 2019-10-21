import React from 'react';
import { shallow, mount } from 'enzyme';

import App from '../../src/components/app';

const setup = (extraProps = {}) => {
  const props = {
    ...extraProps
  }
  return {
    props,
    wrapper: shallow(<App {...props}/>)
  }
}

describe('<App />', function() {
  it('should render the App ', () => {
    const { wrapper } = setup();
    expect(wrapper.length).toBe(1)
  })
});