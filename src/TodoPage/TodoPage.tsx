import { useState } from 'react';
import type { TodoItem } from './TodoItem';

function TodoPage() {
    const [todoItems, setTodoItems] = useState<TodoItem[]>([
        { id: 'a', name: 'React lernen' },
        { id: 'b', name: 'Angular lernen' },
    ]);
    const [newItemName, setNewItemName] = useState('');

    const addButtonClicked = (event: React.SubmitEvent) => {
        event.preventDefault();
        const newTodoItem: TodoItem = { id: crypto.randomUUID(), name: newItemName };

        setTodoItems([...todoItems, newTodoItem]);
    };

    const deleteItemButtonClicked = (idToBeDeleted: string) => {
        const newTodoItems = todoItems.filter((item) => item.id !== idToBeDeleted);

        setTodoItems(newTodoItems);
    };

    return (
        <>
            <h1>Todo List</h1>

            <form onSubmit={addButtonClicked}>
                <label htmlFor="newItemName">New item:</label>
                <input
                    id="newItemName"
                    value={newItemName}
                    onChange={(event) => setNewItemName(event.target.value)}
                />
                <button type="submit">Add</button>
            </form>

            <ul className="todo-list">
                {todoItems.map((todoItem) => {
                    return (
                        <li key={todoItem.id} className="list-item">
                            <span className="list-item-name">{todoItem.name}</span>
                            <button
                                className="list-item-delete-button"
                                onClick={() => deleteItemButtonClicked(todoItem.id)}
                            >
                                X
                            </button>
                        </li>
                    );
                })}
            </ul>
        </>
    );
}

export default TodoPage;
