import { useState } from "react";

export default function TodoItem({todo, dispatch}) {
const {title, id, completed} = todo;
const [allowEdit, setAllowEdit] = useState(false);
const [newTitle, setNewTitle] = useState("");
const [deleteTodo, setDeleteTodo] = useState(id);
const [markComplete, setMarkComplete] = useState(completed);

const handleDelete = (e) => {
    e.preventDefault();
    dispatch({ type: e.target.value, payload: { deleteTodo } });
}

const handleComplete = (e) => {
    setMarkComplete((markComplete) => !markComplete);
    dispatch({ type: e.target.value, payload: { markComplete, id} });
}

const handleEdit = (e) => {
setAllowEdit((allowEdit) => !allowEdit);
}

  return (
    <ul>
      <li>
        <div>{allowEdit ? (<><input type="text" placeholder="Edit Task"/><button type="submit">Save</button></>) : (<>{title} <button type="submit" onClick={handleEdit}>Edit</button></>)}</div> 
        <b> Completed:</b>
        <input type="checkbox" value="TOGGLE_COMPLETE" defaultChecked={markComplete} onChange={handleComplete}/>
        <br/>
        {/* conditional render; delete should only be available if task is marked completed */}
        {markComplete && <button type="submit" value="DELETE" onClick={handleDelete}>Delete</button>}
      </li>
    </ul>
  );
}
