import React from 'react';
import ReactDOM from 'react-dom'; 
import { Provider } from 'react-redux';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import store from './store';
import Home from './pages/home/index';
import Order from './pages/order/index';
import User from './pages/user/index';
import Dishs from './pages/dishs/index';
import './css/all.styl';
import './utils/rem';

const id = document.getElementById('app');

ReactDOM.render((
    <Provider store={store}>
        <BrowserRouter>
            <div>
                <Route path='/home' component={Home}/>
                <Route path='/order' component={Order}/>
                <Route path='/user' component={User}/>
                <Route path='/dishs' component={Dishs}/>
            </div>
        </BrowserRouter>
    </Provider>
), id);