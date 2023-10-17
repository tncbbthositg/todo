import { FunctionComponent } from 'react';
import { TodoItem } from '../models';
import { IconTrash } from '.';
import cn from 'mxcn';

export type TodoRowHandlers = {
  onDelete: (todo: TodoItem) => void;
  onToggleComplete: (todo: TodoItem) => void;
};

type TodoRowProps = TodoRowHandlers & {
  todo: TodoItem;
};

export const TodoRow: FunctionComponent<TodoRowProps> = (props) => {
  const { todo, onDelete, onToggleComplete } = props;

  const { description, isComplete } = todo;

  const descriptionClasses = cn(
    'w-full',
    { 'line-through': isComplete }
  );

  return (
    <div className='space-x-2 flex items-center px-2 rounded hover:bg-slate-100'>
      <input type='checkbox' checked={isComplete} value='complete' onChange={() => onToggleComplete(todo)} />
      <div className={descriptionClasses}>
        { description } 
      </div>
      <button type='button' className='text-pink-800' onClick={() => onDelete(todo)}>
        <IconTrash />
      </button>
    </div>
  );
}