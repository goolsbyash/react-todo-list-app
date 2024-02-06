export default function TodoItem({todo}) {
  return (
    <ul>
      <li>
        <p>{todo.title}</p>
        <b>Mark Completed:</b>
        <input type="checkbox" />
        <br/>
        <button type="submit">Delete</button>
      </li>
    </ul>
  );
}
