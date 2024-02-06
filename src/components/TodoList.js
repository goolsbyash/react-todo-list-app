import TodoItem from "./TodoItem";
export default function TodoList({todoList}) {
    return(
        <div>
        <h2>Todo List</h2>
        {todoList.map((todo) => <TodoItem todo={todo}/>)}
        </div>
        
    );
}