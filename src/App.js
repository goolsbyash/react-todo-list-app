import "./App.css";
import { useState, useReducer } from "react";
import {initialState} from "./data/todoList.js";
import TodoList from "./components/TodoList.js";
import { todoReducer } from "./reducers/todoReducer.js";

function App() {
  const [todoList, dispatch] = useReducer(todoReducer, initialState);
  const [todoItem, setTodoItem] = useState("");

  const handleAdd = (e) => {
    e.preventDefault();
    dispatch({type: e.target.value, payload: {todoItem}});
  };

  return (
    <div className="App">
      <h1>Todo List App</h1>
        <input
          type="text"
          value={todoItem}
          onChange={(e) => setTodoItem(e.target.value)}
          placeholder="Thing to do"
        />
        <button type="submit" value="ADD" onClick={handleAdd}>Add</button>
      <TodoList todoList={todoList} dispatch={dispatch}/>
    </div>
  );
}

export default App;
