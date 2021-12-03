import React from 'react';
import renderer from 'react-test-renderer';
import {InfoImage} from '../src/common';

test('renders correctly', () => {
  const tree = renderer.create(<InfoImage isPortrait={false} />).toJSON();
  expect(tree).toMatchSnapshot();
});
