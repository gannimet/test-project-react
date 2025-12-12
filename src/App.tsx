import { useState } from "react";
import "./App.css";
import Chat from "./Chat/Chat";

function App() {
  const [randomNumber, setRandomNumber] = useState(0);

  const fetchRandomRumber = async () => {
    const url = "http://localhost:3000/randomnumber";

    const response = await fetch(url);

    if (response.ok) {
      const result = await response.json();
      setRandomNumber(result.value);
    }
  };

  return (
    <>
      <div className="main-content">
        <button onClick={() => fetchRandomRumber()}>Get random number</button>
        <p>{randomNumber}</p>
        <p>
          <code>
            npm create vite@latest test-project-react -- --template react-ts
          </code>
        </p>
      </div>

      <aside className="sidebar">
        <Chat />
      </aside>
    </>
  );
}

export default App;
