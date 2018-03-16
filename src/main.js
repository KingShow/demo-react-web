import React from 'react';
import ReactDOM from 'react-dom'; 
import { Provider } from 'react-redux';
import { BrowserRouter, Route} from 'react-router-dom';
import Routes from './routes';
import Home from './pages/home';
const id = document.getElementById('app');
ReactDOM.render(<BrowserRouter><Route path="/" component={Home} /></BrowserRouter>, id);