import { useEffect, useRef, useState } from 'react';
import './Chat.css';

type ChatMessage = {
    id: string;
    sender: 'client' | 'server';
    content: string;
};

function Chat() {
    const ws = useRef<WebSocket | null>(null);
    const [isConnected, setIsConnected] = useState(false);
    const [messages, setMessages] = useState<ChatMessage[]>([]);

    useEffect(() => {
        ws.current = new WebSocket('ws://localhost:3000');

        ws.current.onopen = () => {
            setIsConnected(true);
        };

        ws.current.onmessage = (event) => {
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

        return () => {
            if (ws.current) {
                ws.current.close();
                ws.current = null;
                setIsConnected(false);
            }
        };
    }, []);

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
