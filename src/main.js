import React from 'react';
import ReactDOM from 'react-dom'; 
//import { Provider } from 'react-redux';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import routes from './routes';
import Home from './pages/home/index';
import Order from './pages/order/index';
import User from './pages/User/index';
import './css/all.styl';

const id = document.getElementById('app');

ReactDOM.render((
    <BrowserRouter>
        <div>
            <Route path='/home' component={Home}/>
            <Route path='/order' component={Order}/>
            <Route path='/user' component={User}/>
        </div>
    </BrowserRouter>
), id);