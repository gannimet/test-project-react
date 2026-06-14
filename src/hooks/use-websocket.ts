import { useEffect, useRef, useState } from 'react';

export type UseWebSocketOptions = {
    url: string;
    onMessage: (event: MessageEvent) => void;
};

export function useWebSocket({ url, onMessage }: UseWebSocketOptions) {
    const ws = useRef<WebSocket | null>(null);
    const [isConnected, setIsConnected] = useState(false);

    useEffect(() => {
        ws.current = new WebSocket(url);

        ws.current.onopen = () => {
            setIsConnected(true);
        };

        ws.current.onclose = () => {
            setIsConnected(false);
        };

        ws.current.onmessage = (event) => {
            onMessage(event);
        };

        return () => {
            if (ws.current) {
                ws.current.close();
                ws.current = null;
            }
        };
    }, [url]);

    return {
        socket: ws.current,
        isConnected,
    };
}
