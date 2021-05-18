import PriorityTodo from './PriorityTodo';

const PriorityContainer = ({todos, setList, priority, setPriority}) => {
    const changePriority = (priority) => {
        setPriority(priority);
    }

    return(
        <div className="priority">
            <div className="priorityContainer">
                <li className={`low ${priority === 'low' ? 'selected' : ''}`} onClick={()=> changePriority('low')}>Low</li>
                <li className={`normal ${priority === 'normal' ? 'selected' : ''}`} onClick={()=> changePriority('normal')}>Normal</li>
                <li className={`high ${priority === 'high' ? 'selected' : ''}`} onClick={()=> changePriority('high')}>High</li>
            </div>

             <ul className="todo-list">
                {todos.map((todo) => (
                    todo.priority === priority && todo.completed ===false ? 
                    <PriorityTodo setList={setList} key={todo.id} text={todo.text} todo={todo} color={
                        todo.list === 0 ? 'red' : todo.list === 1 ? 'blue' : todo.list === 2 ? 'green' : todo.list === 3 ? 'purple' : 'orange'}></PriorityTodo> : ''
                ))}
            </ul>
        </div>
    );
}

export default PriorityContainer