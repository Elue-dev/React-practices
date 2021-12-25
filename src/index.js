import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import CounterApp from './CounterApp';
import allReducers from './reducers'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import FormApp from './FormApp';
import HookFormApp from './HookFormApp';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Nav from './Nav/Nav';

const myStore = createStore(allReducers)

ReactDOM.render(
    <Provider store={myStore}>
      <Router>
        <Nav />
        <Routes>
          <Route path='/' element={<CounterApp />} />
          <Route path='/formapp' element={<FormApp />} />
          <Route path='/hookformapp' element={<HookFormApp />} />
        </Routes>
      </Router>
    </Provider>,
  document.getElementById('root')
);
