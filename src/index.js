import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import CounterApp from './CounterApp';
import allReducers from './reducers'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import FormApp from './FormApp';
import HookFormApp from './HookFormApp';

const myStore = createStore(allReducers)

ReactDOM.render(
    <Provider store={myStore}>
      {/* <CounterApp /> */}
      {/* <FormApp /> */}
      <HookFormApp />
    </Provider>,
  document.getElementById('root')
);
