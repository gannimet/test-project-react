import { useState } from 'react';
import { useWebSocket } from '../hooks/use-websocket';
import './Chat.css';

type ChatMessage = {
    id: string;
    sender: 'client' | 'server';
    content: string;
};

function Chat() {
    const [messages, setMessages] = useState<ChatMessage[]>([]);

    const onWebSocketMessage = (event: MessageEvent) => {
        const content = JSON.parse(event.data).message;

        const newMessage: ChatMessage = {
            id: crypto.randomUUID(),
            sender: 'server',
            content,
        };

        setMessages((previousMessages) => {
            return [...previousMessages, newMessage];
        });
    };

    const { isConnected } = useWebSocket({
        url: 'ws://localhost:3000',
        onMessage: onWebSocketMessage,
    });

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
        </>
    );
}

export default Chat;
