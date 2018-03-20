import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addTodo } from '../../actions/index';
import Content from 'components/content';

class AppHome extends Component {

    render() {
        const {todos, onTodoClick} = this.props;
        const listItems = todos.todos.map((item, key) => {
            return <li key={key}>{item.text}</li>
        });
        return (
            <Content>
                <ul>{listItems}</ul>
                <button onClick={() => onTodoClick('two')}>add todo</button>  
            </Content>
        )
    }
}
const mapStateToProps = state => {
    return {
        ...state,
    }
};
const mapDispatchToProps = dispatch => {
    return {
        onTodoClick: text => {
            dispatch(addTodo(text))
        }
    }
}
const Home =  connect(mapStateToProps, mapDispatchToProps)(AppHome);
export default Home;