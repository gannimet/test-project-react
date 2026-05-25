import { useRef, useState } from 'react';
import type { TodoItem } from '../TodoItem';
import './TodoForm.css';

export type TodoFormProps = {
    onAddTodoItem: (todoItem: TodoItem) => void;
};

function TodoForm({ onAddTodoItem }: TodoFormProps) {
    const [newItemName, setNewItemName] = useState('');
    const inputField = useRef<HTMLInputElement>(null);

    const addButtonClicked = (event: React.SubmitEvent) => {
        event.preventDefault();
        const newTodoItem: TodoItem = { id: crypto.randomUUID(), name: newItemName };

        onAddTodoItem(newTodoItem);
        setNewItemName('');
        inputField.current?.focus();
    };

    return (
        <form onSubmit={addButtonClicked} className="todo-form">
            <label htmlFor="newItemName">New item:</label>
            <input
                id="newItemName"
                ref={inputField}
                value={newItemName}
                onChange={(event) => setNewItemName(event.target.value)}
            />
            <button type="submit">Add</button>
        </form>
    );
}

export default TodoForm;
