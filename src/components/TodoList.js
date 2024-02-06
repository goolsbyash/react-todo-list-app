import TodoItem from "./TodoItem";
import { useState } from "react";

export default function TodoList({ todoList, dispatch }) {
  const [title, setTitle] = useState("");

  
  const handleAdd = (e) => {
    e.preventDefault();
    dispatch({ type: e.target.value, payload: { title } });
    setTitle(""); // reset state of form
  };

  return (
    <div>
      <h2>Add More Tasks</h2>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Thing to do"
      />
      <button type="submit" value="ADD" onClick={handleAdd}>
        Add
      </button>
      <hr />
      <h2>Todo List</h2>

      {todoList.map((todo) => (
        <TodoItem todo={todo} key={todo.id} dispatch={dispatch} />
      ))}
    </div>
  );
}
