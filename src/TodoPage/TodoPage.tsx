import { useState } from 'react';
import TodoForm from './TodoForm/TodoForm';
import type { TodoItem } from './TodoItem';
import TodoList from './TodoList/TodoList';

function TodoPage() {
    const [todoItems, setTodoItems] = useState<TodoItem[]>([
        { id: 'a', name: 'React lernen' },
        { id: 'b', name: 'Angular lernen' },
    ]);

    const deleteItem = (idToBeDeleted: string) => {
        const newTodoItems = todoItems.filter((item) => item.id !== idToBeDeleted);

        setTodoItems(newTodoItems);
    };

    const addTodoItem = (newTodoItem: TodoItem) => {
        setTodoItems([...todoItems, newTodoItem]);
    };

    return (
        <>
            <h1>Todo List</h1>

            <TodoForm onAddTodoItem={addTodoItem} />

            <TodoList todoItems={todoItems} onItemDeleted={deleteItem} />
        </>
    );
}

export default TodoPage;
