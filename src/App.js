import { useState ,useEffect} from "react";
import ListNav from "./components/ListNav"
import TodoContainer from "./components/TodoContainer"
import PriorityContainer from "./components/PriorityContainer"

const App = () => {
  //Estas 2 lineas de codigo se corren al cargarse la pagina web (solo una vez), y se encargan de cargar los Todos y las Listas.
  useEffect( () => {getLocalTodos()}, []);
  useEffect( () => {getLocalList()}, []);
  //Variables que guardan datos en tiempo real.
  const [list, setList] = useState(0);
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);
  const [status, setStatus] = useState('All');
  const [priority, setPriority] = useState('normal');
  const [filteredTodos, setFilteredTodos] = useState([]);
  const [filteredTodosPerList, setFilteredTodosPerList] = useState([]);
  const [listArray, setListArray] = useState([]);
  useEffect( () => {saveLocalList()}, [listArray]);
  useEffect( () => {filterHandler()}, [todos, status]);
  useEffect( () => {filterHandler2()}, [filteredTodos, list]);
  useEffect( () => {setLocalTodos()}, [todos, status]);
  useEffect( () => {changeListsName()}, [list, listArray]);
  
  const saveLocalList = () => {
    localStorage.setItem('lists', JSON.stringify(listArray));
  }

  const getLocalList = () => {
    if(localStorage.getItem('lists') === null){
      const newList = [
        {
        color: 'red', 
        id: 0, 
        name: "Quick notes"
        },
        {
          color: 'blue', 
          id: 1, 
          name: "Quick notes"
        },
        {
          color: 'green', 
          id: 2, 
          name: "Quick notes"
        }
      ]
      localStorage.setItem('lists', JSON.stringify(newList));
    }
    let listLocal = JSON.parse(localStorage.getItem('lists'));
    setListArray(listLocal);
  }

  const changeListsName = () => {
    try{
      document.getElementsByClassName('current-list-name')[0].value = document.getElementsByClassName('list-name')[list].innerHTML;
    }catch(error){
      console.log(error);
    }
  }
  
  const filterHandler = () => {
    switch(status){
      case 'Completed':
        setFilteredTodos(todos.filter((todo) => todo.completed === true))
        break;
      case 'In Progress':
        setFilteredTodos(todos.filter((todo) => todo.completed === false))
        break;
      case 'All':
        setFilteredTodos(todos)
        break;

      default:
    }
  }

  const filterHandler2 = () => {
    switch(status){
      case 'Completed':
        setFilteredTodosPerList(filteredTodos.filter((todo) => todo.list === list))
        break;
      case 'In Progress':
        setFilteredTodosPerList(filteredTodos.filter((todo) => todo.list === list))
        break;
      case 'All':
        setFilteredTodosPerList(filteredTodos.filter((todo) => todo.list === list))
        break;

      default:
    }
  }

  const getLocalTodos = () => {
    if(localStorage.getItem('todos') === null){
      localStorage.setItem('todos', JSON.stringify([]));
    }else{
      let todoLocal = JSON.parse(localStorage.getItem('todos'));
      setTodos(todoLocal);
    }
  }
  
  const setLocalTodos = () => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }



  return (
    <div className="App">
      {/* Aqui estoy declarando un SVG, en CSS lo animo cambiando la forma de este mismo. */}
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1320 500">
        <path className="waveColor" d="M0,300 C220,250,440,250,660,300 C880,350,1100,350,1320,300 L1320 500 L0 500"></path>
      </svg>

      <div className="gContainer">
      
      </div>

      <div className="mainContainer">
        <ListNav setList={setList} list2={list} setListArray={setListArray} listArray={listArray} todos={todos} setTodos={setTodos}></ListNav>
        <TodoContainer setInputText={setInputText} inputText={inputText} 
          todos={todos} setTodos={setTodos} list={list} setStatus={setStatus} filteredTodos2={filteredTodosPerList} setListArray={setListArray} listArray={listArray}>
        </TodoContainer>
        <PriorityContainer priority={priority} setPriority={setPriority} todos={todos} setList={setList}></PriorityContainer>
      </div>
    </div>
  );
}

export default App;
