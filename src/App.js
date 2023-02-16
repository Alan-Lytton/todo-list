import './App.css';
import Todo from "./components/Todo";
import {useState} from "react";
import Show from "./components/Show";

function App() {
  const [todoList,setTodoList] = useState([])
  return (
    <div className="App">
      <Todo todoList={todoList} setTodoList={setTodoList}/>
      <Show todoList={todoList} setTodoList={setTodoList}/>
    </div>
  );
}

export default App;
