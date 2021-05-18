import {removeClasses} from './ListNav';

const List = ({color, id, setList, name, todos, setTodos, setListArray, listArray, list}) => {
    const changeColor = (color) => {
        removeClasses();
        setList(color);

        if(color === 0){
            document.getElementsByClassName('todo-color')[0].classList.add('red');
            document.getElementsByClassName('waveColor')[0].classList.add('red-path');
        }
        else if(color === 1){
            document.getElementsByClassName('todo-color')[0].classList.add('blue');
            document.getElementsByClassName('waveColor')[0].classList.add('blue-path');
        }
        else if(color === 2){
            document.getElementsByClassName('todo-color')[0].classList.add('green');
            document.getElementsByClassName('waveColor')[0].classList.add('green-path');
        }
        else if(color === 3){
            document.getElementsByClassName('todo-color')[0].classList.add('purple');
            document.getElementsByClassName('waveColor')[0].classList.add('purple-path');
        }
        else if(color === 4){
            document.getElementsByClassName('todo-color')[0].classList.add('orange');
            document.getElementsByClassName('waveColor')[0].classList.add('orange-path');
        }
    }

    const getTasks = (id) =>{
        let contador = 0;
        todos.map((todo) => {
            if(todo.list === id)
                contador++
        })
        return contador;
    }

    const removeList = (id) =>{
        setListArray(listArray.filter((el) => el.id !== id));
        setTodos(todos.filter((el) => el.list !== id));

        if(list === id){
            removeClasses();
            setList(id - 1);
            if(id === 2){
                document.getElementsByClassName('todo-color')[0].classList.add('blue');
                document.getElementsByClassName('waveColor')[0].classList.add('blue-path');
            }
            else if(id === 3){
                document.getElementsByClassName('todo-color')[0].classList.add('green');
                document.getElementsByClassName('waveColor')[0].classList.add('green-path');
            }
            else if(id === 4){
                document.getElementsByClassName('todo-color')[0].classList.add('purple');
                document.getElementsByClassName('waveColor')[0].classList.add('purple-path');
            }
        }
    }

    return(
    <div className="list">
        <div className="list-background" onClick={() => {changeColor(id)}}>
            <div className="list-color" id={color}></div>
            <div className="list-text">
                <h1 className="list-name">{name}</h1>
                <h2>{getTasks(id)} tasks</h2>
            </div>
            {(id === listArray.length -1 && id > 1) ? <div className="trash-list">
                <button className="trash-btn" onClick={(e) => {e.stopPropagation(); removeList(id)}}><i className= "fas fa-trash"></i></button>
            </div> : <div></div>}
        </div>
    </div>
  )
    
}

export default List