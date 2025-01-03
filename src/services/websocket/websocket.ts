class WebSocketService {
    private socket: WebSocket | null = null;
    private subscribers = new Map<string, Function[]>();
  
    constructor(private url: string) {}
  
    connect() {
      this.socket = new WebSocket(this.url);
      this.setupEventHandlers();
    }
  
    private setupEventHandlers() {
      if (!this.socket) return;
  
      this.socket.onmessage = (event) => {
        const data = JSON.parse(event.data);
        const subscribers = this.subscribers.get(data.type) || [];
        subscribers.forEach(callback => callback(data.payload));
      };
    }
  
    subscribe(type: string, callback: Function) {
      const subscribers = this.subscribers.get(type) || [];
      subscribers.push(callback);
      this.subscribers.set(type, subscribers);
    }
  
    unsubscribe(type: string, callback: Function) {
      const subscribers = this.subscribers.get(type) || [];
      const index = subscribers.indexOf(callback);
      if (index > -1) {
        subscribers.splice(index, 1);
        this.subscribers.set(type, subscribers);
      }
    }
  
    send(data: any) {
      if (this.socket?.readyState === WebSocket.OPEN) {
        this.socket.send(JSON.stringify(data));
      }
    }
  }
  
  export default WebSocketService;
  