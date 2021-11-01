import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import TwoPlayerBoard from './components/TwoPlayerBoard'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import reducers from './reducers/reducers';

const store = createStore(reducers);

ReactDOM.render(
  <Provider store={store} >
    <TwoPlayerBoard />
  </Provider>,
  document.getElementById('root')
);
