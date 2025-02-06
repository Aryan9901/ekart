/**
 * @format
 */

// import React from 'react';
// import ReactTestRenderer from 'react-test-renderer';
// import App from '../src/App';

// test('renders correctly', async () => {
//   await ReactTestRenderer.act(() => {
//     ReactTestRenderer.create(<App />);
//   });
// });

import 'react-native';
import React from 'react';
import App from '../src/App';

import {it} from '@jest/globals';

import renderer from 'react-test-renderer';

it('renders correctly', () => {
  renderer.create(<App />);
});
