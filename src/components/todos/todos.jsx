import React from 'react'
import Todo from './Todo.jsx'
const todos = (props) => {
    return (

        <div className = 'todos-list'>
           {
               props.todos.map(todo => {
                   return (
                       <Todo 
                        todo = {todo} 
                        key = {todo.id} 
                        changeTodoCompletion = {props.changeTodoCompletion}
                        deleteTodo = {props.deleteTodo}
                        editTodo = {props.editTodoHandler}
                    />
                   )
               })
           }
           {props.todos.length === 0 ? (
               <h2 className = 'no-todos'>لا يوجد مهام حاليا</h2>
            ) : null}
        </div>
    )
}
export default todos