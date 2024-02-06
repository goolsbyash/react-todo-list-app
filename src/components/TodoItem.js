import { useState } from "react";

export default function TodoItem({todo, dispatch}) {
const [allowEdit, setAllowEdit] = useState(false);
const [deleteTodo, setDeleteTodo] = useState(todo.title);

const handleDelete = (e) => {
    e.preventDefault();
    dispatch({ type: e.target.value, payload: { deleteTodo } });
}

  return (
    <ul>
      <li>
        <p>{todo.title}</p>
        <b> Completed:</b>
        <input type="checkbox" value="TOGGLE_COMPLETE" defaultChecked={todo.completed}/>
        <br/>
        <button type="submit" value="DELETE" onClick={handleDelete}>Delete</button>
      </li>
    </ul>
  );
}
