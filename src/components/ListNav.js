import React from 'react';
import List from './List'

  //Esta funcion remueve todas las clases que se encargan de los colores.
export const removeClasses =() =>{
  document.getElementsByClassName('todo-color')[0].classList.remove('red');
  document.getElementsByClassName('todo-color')[0].classList.remove('blue');
  document.getElementsByClassName('todo-color')[0].classList.remove('green');
  document.getElementsByClassName('todo-color')[0].classList.remove('orange');
  document.getElementsByClassName('todo-color')[0].classList.remove('purple');
  document.getElementsByClassName('waveColor')[0].classList.remove('red-path');
  document.getElementsByClassName('waveColor')[0].classList.remove('blue-path');
  document.getElementsByClassName('waveColor')[0].classList.remove('green-path');
  document.getElementsByClassName('waveColor')[0].classList.remove('purple-path');
  document.getElementsByClassName('waveColor')[0].classList.remove('orange-path');
}

const ListNav = ({setList, list2, setListArray, listArray, todos, setTodos}) => {
  const newAddList = (color, number) => {
      setListArray ([
          ...listArray, {color: color, id: number, name: "Quick notes", numElements: 0}
      ])
  }

  const addList = () => {
    const navDiv =  document.getElementsByClassName('nav')[0];
    
    if(navDiv.childElementCount === 3){
      newAddList('green', 2);
    }
    else if(navDiv.childElementCount === 4){
      newAddList('purple', 3);
    }
    else if(navDiv.childElementCount === 5){
      newAddList('orange', 4);
    }
  }

  return (
    <div className="nav">
      {listArray.map((list) => (
        <List color={list.color} key={list.id} id={list.id} name={list.name} setList={setList} list={list2} setTodos={setTodos} todos={todos} todos={todos} setListArray={setListArray} listArray={listArray}></List>
      ))}

      <div className="list">
        <div className="list-background add-button" onClick={addList}>
          <h1>+ Create new list</h1>
        </div>
      </div>
    </div>
  );
}

export default ListNav