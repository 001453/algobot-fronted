export interface WebSocketConfig {
    url: string;
    apiKey?: string;
    reconnectAttempts?: number;
  }
  
  export const websocketConfig: WebSocketConfig = {
    url: process.env.REACT_APP_WEBSOCKET_URL || 'wss://your-websocket-server.com',
    apiKey: process.env.REACT_APP_WEBSOCKET_API_KEY,
    reconnectAttempts: 5
  };
  