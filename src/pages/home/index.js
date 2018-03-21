import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { addTodo } from '../../actions/index';
import { Input } from 'antd';
import Content from 'components/content';

class AppHome extends Component {
    static propTypes = {
        appStates: PropTypes.object.isRequired,
        addTodo: PropTypes.func.isRequired,
    }
    state = {
        input_text: '',
    }
    handleInputChange = (e) => {
        this.setState({
          input_text: e.target.value,
        });
    }
    onTodoClick = () => {
        this.props.addTodo(this.state.input_text);
    }
    render() {
        const {appStates} = this.props;
        const listItems = appStates.todos.map((item, key) => {
            return <li key={key}>{item.text}</li>
        });
        return (
            <Content>
                <ul>{listItems}</ul>
                <Input 
                placeholder="基本使用" 
                value={this.state.input_text} 
                onChange={this.handleInputChange}/>
                <button onClick={this.onTodoClick}>add</button>  
            </Content>
        )
    }
}
const Home =  connect(state => ({
    ...state,
}), {
    addTodo,
})(AppHome);
export default Home;