const Todo = ({text, status, todo, todos, setTodos}) => {

    const deleteHandler = () => {
        setTodos(todos.filter((el) => el.id !== todo.id));
    }

    const completeHandler = () => {
        setTodos(todos.map((item) => {
            if(item.id === todo.id){
                return {
                    ...item, completed: !item.completed
                }
            }
            return item;
        }))
    }

    const changePriority = (priority) => {
        setTodos(todos.map((item) => {
            if(item.id === todo.id){
                return {
                    ...item, priority: priority
                }
            }
            return item;
        }))
    }

    return(
        <div className={`new-todo ${todo.completed ? "completed" : ''}`}>
            <div>
                <li className={`todo-item`}>{text}</li>
                <div className="priorityContainer">
                    <li className={`low ${todo.priority === 'low' ? "selected" : ''}`} onClick={() => {changePriority('low')}}>Low</li>
                    <li className={`normal ${todo.priority === 'normal' ? "selected" : ''}`} onClick={() => {changePriority('normal')}}>Normal</li>
                    <li className={`high ${todo.priority === 'high' ? "selected" : ''}`} onClick={() => {changePriority('high')}}>High</li>
                </div>
            </div>
            <button className="complete-btn" onClick={() => {completeHandler()}}><i className= "fas fa-check"></i></button>
            <button className="trash-btn"onClick={() => {deleteHandler()}}><i className= "fas fa-trash"></i></button>
        </div>
    )
}

export default Todo