import "./App.css";
import { useState, useReducer } from "react";
import {initialState} from "./data/todoList.js";
import TodoList from "./components/TodoList.js";
import { todoReducer } from "./reducers/todoReducer.js";

function App() {
  const [todoList, dispatch] = useReducer(todoReducer, initialState);
  
  return (
    <div className="App">
      <h1>Todo List App</h1>
      <TodoList todoList={todoList} dispatch={dispatch}/>
    </div>
  );
}

export default App;
