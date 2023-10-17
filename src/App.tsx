import { useCallback } from 'react';
import { useLocalStorage } from 'usehooks-ts';
import { TodoItem } from './models';
import { TodoTable } from './molecules';
import { AddTodo } from './forms';

function App() {
  const [todos, setTodos] = useLocalStorage<TodoItem[]>('todos', []);

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
    <div className='container my-6 mx-auto sm:rounded-xl space-y-2'>
      <h1 className='text-3xl font-bold text-white'>Todo List</h1>

      <div className='bg-white p-5 sm:rounded-xl space-y-6'>
        <TodoTable
          todos={todos}
          onDelete={handleDelete}
          onToggleComplete={handleToggleCompleted}
        />

        <AddTodo onAdd={handleAdd} />
      </div>
    </div>
  );
}

export default App
