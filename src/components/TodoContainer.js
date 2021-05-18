import React from 'react';
import Todo from './Todo';

const TodoContainer = ({setInputText, inputText, todos, setTodos, list, setStatus, filteredTodos2, setListArray, listArray}) => {    
    
    //Esta funcion se encarga de darle un valor al hook setInputText.
    const inputHandler = (e) => {
        setInputText(e.target.value);
    }

    const submitTodo = (e) => {
        e.preventDefault();
        setTodos ([
            ...todos, {text: inputText, completed: false, list: list, id: (Math.random() *1000), priority: 'normal'}
        ])
        setInputText("");
    }

    const filterTodo = (filter) => {
        const filterButton = document.getElementsByClassName('todo-filters')[0];
        const filterActive = document.getElementsByClassName('filter-active')[0];
        filterActive.classList.remove('filter-active');
        setStatus(filter)

        switch(filter){
            case 'All':
                filterButton.children[0].classList.add('filter-active')
                break;
            case 'Completed':
                filterButton.children[1].classList.add('filter-active')
                break;
            case 'In Progress':
                filterButton.children[2].classList.add('filter-active')
                break;
        }
    }

    const changeNameList = () => {
        setListArray(listArray.map((listName) => {
            if(listName.id === list) {
                return {
                    ...listName, name: document.getElementsByClassName('current-list-name')[0].value
                }
            }
            return listName;
        }))
    }


    return(
        <div className="todo">
            <div className="todo-color">
                <input type="text" className='current-list-name' placeholder="Quick notes" maxLength="14" onChange={changeNameList}></input>      
                
                <form>
                    <input type="text" className="todo-input" maxLength="60" value={inputText} onChange={inputHandler}></input>
                    <button className="todo-button" type="submit" onClick={submitTodo}>Submit</button>
                </form>

                <div className="todo-container">
                    <ul className="todo-list">
                        {filteredTodos2.map((todo) => (
                            <Todo key={todo.id} text={todo.text} status={todo.completed} todo={todo} todos={todos} setTodos={setTodos}></Todo>
                        ))}
                    </ul>
                </div>

                <div className="todo-filters">
                    <button className="all-button filter-active" type="submit" onClick={()=>{filterTodo('All')}}>All</button>
                    <button className="completed-button" type="submit" onClick={()=>{filterTodo('Completed')}}>Completed</button>
                    <button className="progress-button" type="submit" onClick={()=>{filterTodo('In Progress')}}>In Progress</button>
                </div>
            </div>
        </div>
    );
}

export default TodoContainer