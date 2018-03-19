import React, {Component} from 'react';
import { Link, NavLink } from 'react-router-dom'

class Aside extends Component {
    render() {
        return (
             <div className="app-aside"><ul>
                <li><NavLink to='/home'>首页</NavLink></li>
                <li><NavLink to='/order'>订单</NavLink></li>
                <li><NavLink to='/user'>用户中心</NavLink></li>
             </ul></div>
        )
    }
}

export default Aside;