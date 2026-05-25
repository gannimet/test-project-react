import type { TodoItem } from '../TodoItem';
import './TodoList.css';

export type TodoListProps = {
    todoItems: TodoItem[];
    onItemDeleted: (id: string) => void;
};

function TodoList({ todoItems, onItemDeleted }: TodoListProps) {
    return (
        <ul className="todo-list">
            {todoItems.map((todoItem) => {
                return (
                    <li key={todoItem.id} className="list-item">
                        <span className="list-item-name">{todoItem.name}</span>
                        <button
                            className="list-item-delete-button"
                            onClick={() => onItemDeleted(todoItem.id)}
                        >
                            Löschen
                        </button>
                    </li>
                );
            })}
        </ul>
    );
}

export default TodoList;
