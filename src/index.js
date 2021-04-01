import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'

import rootReducer from './reducers'

import App from './App';
import Menu from './components/Menu';

const store = createStore(
    rootReducer, applyMiddleware(thunk)
  )

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Provider store={store} >
        <App />
      </Provider>
    </Router>
  </React.StrictMode>,
  document.getElementById('wrapper')
);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Menu />
    </Provider>
  </React.StrictMode>,
  document.getElementById('menu')
);
