import React, {Component} from 'react';
import {connect} from 'react-redux';
import Content from 'components/content';

class AppHome extends Component {
    state = {

    }
    render() {
        return (
            <Content>
                <p>this is home pages</p>
                <p></p>
                <button onclick={() => onTodoClick('two')}>add todo</button>  
            </Content>
        )
    }
}
const mapStateToProps = state => {
    return {
        todos: [{
            text: 'one',
            completed: true,
        }]
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