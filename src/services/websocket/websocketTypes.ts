export interface WebSocketMessage {
    type: string;
    payload: any;
  }
  
  export interface WebSocketConfig {
    url: string;
    reconnectAttempts?: number;
    reconnectInterval?: number;
  }
  