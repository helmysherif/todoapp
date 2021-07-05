import React , {useState} from 'react'
const TodosForm = (props) => {
    const [newTitle , setNewTitle] = useState('');
    const [editRender , setEditRender] = useState(false);
    if(props.mode === 'edit' && !editRender)
    {
        setNewTitle(props.todos[0].title);
        setEditRender(true);
    }
    const newTitleHandler = (e) => {
        setNewTitle(e.target.value);
    }
    const addNewTitleHandler = (title) => {
        let nTitle = newTitle;
        setNewTitle('');
        setEditRender(false);
        return props.addTodoHandler(nTitle)
    }
    let btnString = 'إضافة';
    if(props.mode === 'edit')
    {
        btnString = 'تعديل';
    }
    return (
        <div className = 'todos-form'>
            <div className = 'todos-form_icon' onClick = {props.showUncompletedHandler}>
                <i className="far fa-circle"></i>
            </div>
            <div className = 'todos-form_form'>
                <input type="text" placeholder = 'أضف مهمة جديدة...' onChange = {newTitleHandler} value = {newTitle} required/>
            </div>
            <div className = 'todos-form_submit'>
                <button 
                    className = 'btn' 
                    onClick = {addNewTitleHandler}
                    disabled = {newTitle.trim() ? false : true}
                >{btnString}</button>
            </div>
        </div>
    )
}
export default TodosForm