import React, {Component} from 'react';
import Content from 'components/content';
import ajax from '../../utils/ajax';

class Dishs extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dishs: [],
        };
    }

    componentDidMount() {
        this.getDishsData();
    }

    getDishsData() {
        const data = {
            url: 'https://api.douban.com/v2/book/search',
            parmas: {
                q: 'node',
                start: 0,
                count: 20,
            }
        };
        //let dishsPromise = ajax(data.type, data.url, data.parmas);
        //console.log(dishsPromise);
        
    }

    render() {
        return (
            <Content>
                <p>this is Dishs pages</p>
            </Content>
        )
    }
}

export default Dishs;