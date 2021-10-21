import React from 'react';
import ReactDOM from 'react-dom';
import { createBrowserHistory } from 'history';
import {BrowserRouter, Switch, Route,Link} from 'react-router-dom';
import './index.css';
import App from './App';
import Ingredients from './components/Ingredients'
import reportWebVitals from './reportWebVitals';
import Headerz from './components/Header';

ReactDOM.render(
  <BrowserRouter history={createBrowserHistory()}>
      <Switch >
        <Route exact path='/' component={App}></Route>
        <Route path='/ingredients' component={Ingredients}></Route>
        </Switch>
  </BrowserRouter>
  
,document.getElementById("root"));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
