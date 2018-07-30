import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import reducers from './reducers';

const createStoreWithMiddleware = applyMiddleware()(createStore);

//import 'bootstrap/dist/css/bootstrap.css';
import './style/main.scss';

import Layout from './components/layout';

import signup from './components/auth/signup';
import signin from './components/auth/signin';

function main() {
  ReactDOM.render(
    <Provider store={createStoreWithMiddleware(reducers)}>
      <BrowserRouter>
        <Switch>
          <Layout>
            <Route path='/' exact component={signin}/>
            <Route path='/signin' component={signin}/>
            <Route path='/signup' component={signup}/>
          </Layout>
        </Switch>
      </BrowserRouter>
    </Provider>
    , document.querySelector('.app-wrapper'));
}

document.addEventListener('DOMContentLoaded', main);
