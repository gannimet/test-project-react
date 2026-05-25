import { useState } from 'react';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import './App.css';
import Chat from './Chat/Chat';
import ColorPicker from './ColorPicker/ColorPicker';
import TodoPage from './TodoPage/TodoPage';

function App() {
    const [randomNumber, setRandomNumber] = useState(0);

    const fetchRandomRumber = async () => {
        const url = 'http://localhost:3000/randomnumber';

        const response = await fetch(url);

        if (response.ok) {
            const result = await response.json();
            setRandomNumber(result.value);
        }
    };

    return (
        <>
            <BrowserRouter>
                <nav>
                    <ul>
                        <li>
                            <Link to="/chat">Chat</Link>
                        </li>
                        <li>
                            <Link to="/color-picker">Color Picker</Link>
                        </li>
                        <li>
                            <Link to="/todos">Todo List</Link>
                        </li>
                    </ul>
                </nav>

                <div className="main-content">
                    <button onClick={() => fetchRandomRumber()}>Get random number</button>
                    <p>{randomNumber}</p>
                    <p>
                        <code>
                            npm create vite@latest test-project-react -- --template react-ts
                        </code>
                    </p>
                </div>

                <Routes>
                    <Route path="/chat" element={<Chat />} />
                    <Route path="/color-picker" element={<ColorPicker />} />
                    <Route path="/todos" element={<TodoPage />} />
                </Routes>
            </BrowserRouter>
        </>
    );
}

export default App;
