import React, {Component} from 'react';
import Header from './header';
import Aside from './aside';

class Content extends Component {
    render() {
        return (
            <div className="app-container">
                <Header />
                <Aside />
                <div className="app-content">{this.props.children}</div>
            </div>
        )
    }
}

export default Content;