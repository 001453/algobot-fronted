class WebSocketService {
    private socket: WebSocket | null = null;
    private subscribers: Map<string, Function[]> = new Map();
  
    connect(url: string): void {
      if (this.socket) {
        this.socket.close();
      }
  
      this.socket = new WebSocket(url);
      this.setupEventHandlers();
    }
  
    disconnect(): void {
      if (this.socket) {
        this.socket.close();
        this.socket = null;
      }
    }
  
    subscribe(event: string, callback: Function): void {
      if (!this.subscribers.has(event)) {
        this.subscribers.set(event, []);
      }
      this.subscribers.get(event)?.push(callback);
    }
  
    unsubscribe(event: string): void {
      this.subscribers.delete(event);
    }
  
    private setupEventHandlers(): void {
      if (!this.socket) return;
  
      this.socket.onmessage = (event) => {
        const data = JSON.parse(event.data);
        const subscribers = this.subscribers.get(data.type) || [];
        subscribers.forEach(callback => callback(data.payload));
      };
    }
  }
  
  export default WebSocketService;
  