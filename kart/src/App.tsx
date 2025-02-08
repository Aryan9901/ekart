import Navigation from '@navigation/Navigation';
import React from 'react';
import {Provider} from 'react-redux';
import {store} from '@store/store';

function App(): React.JSX.Element {
  return (
    <Provider store={store}>
      <Navigation />
    </Provider>
  );
}

export default App;
