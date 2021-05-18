import {removeClasses} from './ListNav';

const PriorityTodo = ({todo, setList, color, text}) => {
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

    return(
        <div className={`new-todo`}>
            <div className="list-background" onClick={() => {changeColor(todo.list)}}>
                <div className="list-color" id={color}></div>
                <h1 className="todo-item">{text}</h1>
            </div>
        </div>
    )
}

export default PriorityTodo