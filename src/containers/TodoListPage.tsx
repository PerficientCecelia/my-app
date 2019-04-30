import TodoList from '../components/TodoList';
import AddTodo from '../components/AddTodo';
import {ADD_TODO} from '../actions/todoItemAction';
import {connect } from 'react-redux';
import PropTypes from 'prop-types';
import React from 'react';

const TodoListPage=(props:any)=>{
    return (
    <div>
    <AddTodo onAddTodo={props.OnAddTodo} />
    <TodoList items={props.TodoList} />
    </div>
    );
}


function mapStateToProps(state:any){
    if(state){       
        return {
            TodoList:state.TodoItemsReducer.todoList
        }
    }
}

function mapDispatchToProps(dispatch:any){
   return {
       OnAddTodo:(item:any)=>dispatch(ADD_TODO(item))
   }
}

TodoListPage.propTypes={
    TodoList:PropTypes.arrayOf(
        PropTypes.shape({
            id:PropTypes.number.isRequired,
            text:PropTypes.string.isRequired,
            completed:PropTypes.bool.isRequired
        }).isRequired
    ).isRequired
}
export default connect(mapStateToProps,mapDispatchToProps)(TodoListPage);

