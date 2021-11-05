import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import HomePage from './components/HomePage';
import TwoPlayerBoard from './components/TwoPlayerBoard'
import OnePlayerBoard from './components/OnePlayerBoard';
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import reducers from './reducers/reducers';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Rules from './components/Rules';

const store = createStore(reducers);

ReactDOM.render(
  <Provider store={store} >
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />}/>
        <Route path="/free_play" element={<OnePlayerBoard />}/>
        <Route path="/normal_play" element={<TwoPlayerBoard />}/>
        <Route path="/rules" element={<Rules />} />
      </Routes>
    </Router>
    {/* <OnePlayerBoard /> */}
  </Provider>,
  document.getElementById('root')
);
