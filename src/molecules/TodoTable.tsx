import { FunctionComponent } from 'react';
import { TodoItem } from '../models';
import { TodoRow, TodoRowHandlers } from '../atoms';

type TodoTableProps = TodoRowHandlers & {
  todos: TodoItem[];
};

export const TodoTable: FunctionComponent<TodoTableProps> = (props) => {
  const { todos, onDelete, onToggleComplete } = props;

  return (
    <div className='space-y-1 -mx-2'>
      {
        todos.map((todo) => (
          <TodoRow key={todo.id} todo={todo} onDelete={onDelete} onToggleComplete={onToggleComplete} />
        ))
      }
    </div>
  );
}