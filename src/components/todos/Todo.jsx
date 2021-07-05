import React from 'react'
const Todo = (props) => {
    let {id , title , done} = props.todo;
    return (
        <div className = {done ? 'todos-todo done' : 'todos-todo'}>
            <div className="todos-todo_icon" onClick = {() => props.changeTodoCompletion(id)}>
                <i className= {done ? "far fa-check-circle" : "far fa-circle"}></i>
            </div>
            <div className="todos-todo_text">{title}</div>
            <div className="todos-todo_cta">
                <div className="todos-todo_cta-edit" onClick = {() => props.editTodo(props.todo)}>
                    <i className="far fa-edit"></i>
                </div>
                <div className="todos-todo_cta-delete" onClick = {() => props.deleteTodo(id)}>
                    <i className="fas fa-trash"></i>
                </div>
            </div>
        </div>
    )
}
export default Todo