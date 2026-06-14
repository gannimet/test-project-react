import { useRef, useState } from 'react';
import { useWebSocket } from '../hooks/use-websocket';
import './Chat.css';

type ChatMessage = {
    id: string;
    sender: string;
    content: string;
};

function Chat() {
    const [messages, setMessages] = useState<ChatMessage[]>([]);
    const chatInputRef = useRef<HTMLInputElement>(null);
    const [currentChatMessage, setCurrentChatMessage] = useState('');

    const onWebSocketMessage = (event: MessageEvent) => {
        const { content, sender } = JSON.parse(event.data);

        const newMessage: ChatMessage = {
            id: crypto.randomUUID(),
            sender,
            content,
        };

        setMessages((previousMessages) => {
            return [...previousMessages, newMessage];
        });
    };

    const { socket, isConnected } = useWebSocket({
        url: 'ws://localhost:3000',
        onMessage: onWebSocketMessage,
    });

    const sendMessage = (event: React.SubmitEvent) => {
        event.preventDefault();
        socket?.send(currentChatMessage);
    };

    return (
        <>
            <div>Status: {isConnected ? '🟢 Verbunden' : '🔴 Getrennt'}</div>

            <ul className="message-list">
                {messages.map(({ id, sender, content }) => {
                    return (
                        <li className="message-item" key={id}>
                            <span className="message-sender">{sender}:</span>
                            <span className="message-content">{content}</span>
                        </li>
                    );
                })}
            </ul>

            <form className="chat-input" onSubmit={sendMessage}>
                <input
                    ref={chatInputRef}
                    value={currentChatMessage}
                    onChange={(event) => setCurrentChatMessage(event.target.value)}
                />
                <button>Send</button>
            </form>
        </>
    );
}

export default Chat;
