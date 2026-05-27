import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import type { User } from './User';

function UserList() {
    const [users, setUsers] = useState<User[]>([]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users/')
            .then((response) => response.json())
            .then(setUsers);
    }, []);

    return (
        <>
            <ul>
                {users.map((user) => {
                    return (
                        <li key={user.id}>
                            <Link to={`/users/${user.id}`}>{user.name}</Link>
                        </li>
                    );
                })}
            </ul>
        </>
    );
}

export default UserList;
