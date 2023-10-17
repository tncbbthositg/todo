import { useCallback, useState } from "react";
import { TodoItem } from "./models";
import { TodoTable } from "./molecules";
import { AddTodo } from "./forms";

function App() {
  const [todos, setTodos] = useState<TodoItem[]>([]);

  const handleAdd = useCallback(
    (todo: TodoItem) => {
      const newTodoList = [...todos, todo];
      setTodos(newTodoList);
    },
    [todos]
  );

  const handleDelete = useCallback(
    (todo: TodoItem) => {
      const newTodoList = todos.filter((t) => t.id !== todo.id);
      setTodos(newTodoList);
    },
    [todos]
  );

  const handleToggleCompleted = useCallback(
    (todo: TodoItem) => {
      const newTodoList = [...todos];
      newTodoList.filter(t => t.id === todo.id).forEach(t => t.isComplete = !t.isComplete);
      setTodos(newTodoList);
    },
    [todos]
  );

  return (
    <div className='container bg-white my-10 p-5 mx-auto rounded-xl space-y-6'>
      <h1 className='text-3xl font-bold'>Todo List</h1>
      
      <TodoTable 
        todos={todos} 
        onDelete={handleDelete}
        onToggleComplete={handleToggleCompleted}
      />

      <AddTodo onAdd={handleAdd} />
    </div>
  );
}

export default App
