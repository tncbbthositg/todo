import { FormEvent, FunctionComponent, useState } from 'react';
import { TodoItem } from '../models';

type AddTodoProps = {
  onAdd: (todo: TodoItem) => void;
};

export const AddTodo: FunctionComponent<AddTodoProps> = (props) => {
  const { onAdd } = props;

  const [description, setDescription] = useState('');

  const handleAdd = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const newTodo: TodoItem = {
      id: crypto.randomUUID(),
      isComplete: false,
      description,
    };

    setDescription('');
    onAdd(newTodo);
  };

  return (
    <form className='flex gap-x-2' onSubmit={handleAdd}>
      <input
        type='text'
        className='py-2 w-full border-b border-b-teal-500 outline-none'
        placeholder='New Todo'
        value={description}
        onChange={(e) => setDescription(e.target.value)} 
      />

      <button className='py-2 px-4 bg-teal-500 rounded text-white hover:opacity-75'>
        Save
      </button>
    </form>
  );
}