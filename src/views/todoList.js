import React , {useState} from 'react'
import Todos from '../components/todos/todos.jsx';
import TodosForm from '../components/todos/todosForm.jsx';
const TodoList = () => {
    const initialState = localStorage.getItem('todos') ? JSON.parse(localStorage.getItem('todos')) : [];
    const [todos , setTodos] = useState(initialState)
    const [mode , setMode] = useState('add');
    const [activeTodo , setActiveTodo] = useState({})
    const setToLocal = (todo) => {
        localStorage.setItem('todos' , JSON.stringify(todo));
    }
    const changeTodoCompletion = (id) => {
        const currentTodos = [...todos]
        const newTodos = currentTodos.map(el => {
            if(el.id === id)
            {
                el.done = !el.done;
                return el;
            }
            return el;
        })
        setToLocal(newTodos)
        setTodos(newTodos);
    }
    const deleteTodo = (id) => {
        const currentTodos = [...todos]
        const newTodos = currentTodos.filter(el => el.id !== id);
        setToLocal(newTodos)
        setTodos(newTodos);
    }
    const addTodoHandler = (title) => {
        if(mode !== 'edit')
        {
            const newTodo = {
                id : Date.now(),
                title,
                done : false
            }
            const newTodos = [...todos , newTodo]
            setToLocal(newTodos)
            setTodos(newTodos);
        } else {
            const curTodos = [...todos];
            const newTodos = curTodos.map(el => {
                if(el.id === activeTodo.id)
                {
                    el.title = title;
                    return el;
                }
                return el; 
            })
            setToLocal(newTodos)
            setTodos(newTodos);
            setActiveTodo({});
            setMode('add');
        }
    }
    const showUncompletedHandler = () => {
        if(mode ===  'not-done')
        {
            setMode('add');
        } else {
            setMode('not-done')
        }
    }
    let currentTodos = [...todos];
    if(mode === 'not-done')
    {
        currentTodos = currentTodos.filter(todo => !todo.done);
    }
    const editTodoHandler = (todo) => {
        setMode('edit');
        setActiveTodo(todo);
    }
    return (
        <main>
            <div className = 'container'>
                <div className = 'todos'>
                    <TodosForm 
                        todos = {mode !== 'edit' ? currentTodos : [activeTodo]}
                        addTodoHandler = {addTodoHandler}
                        showUncompletedHandler = {showUncompletedHandler}
                        mode = {mode}
                    />
                    <Todos 
                        todos = {mode !== 'edit' ? currentTodos : [activeTodo]} 
                        changeTodoCompletion = {changeTodoCompletion}
                        deleteTodo = {deleteTodo}
                        editTodoHandler = {editTodoHandler}
                    />
                </div>
            </div>
        </main>
    )
}
export default TodoList