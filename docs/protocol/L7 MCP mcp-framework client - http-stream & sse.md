# MCP mcp-framework client

## http-stream-client

```ts
/**
 * Basic client for the HTTP Stream Transport
 */
class HttpStreamClient {
  private baseUrl: string;
  private sessionId: string | null = null;
  private eventSource: EventSource | null = null;

  constructor(baseUrl: string) {
    this.baseUrl = baseUrl;
  }

  async initialize() {
    // Create initialization request
    const initRequest = {
      jsonrpc: "2.0",
      id: "init-" + Date.now(),
      method: "initialize",
      params: {
        /* initialization parameters */
      },
    };

    // Send initialize request
    const response = await fetch(this.baseUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json, text/event-stream",
      },
      body: JSON.stringify(initRequest),
    });

    // Get session ID from response headers
    this.sessionId = response.headers.get("Mcp-Session-Id");
    console.log(`Session established: ${this.sessionId}`);

    // Process the response
    if (response.headers.get("Content-Type")?.includes("text/event-stream")) {
      // Handle streaming response
      this.processStream(response);
    } else {
      // Handle JSON response
      const result = await response.json();
      console.log("Initialization result:", result);
    }

    // Open SSE stream for server-to-client messages
    this.openEventStream();
  }

  private openEventStream() {
    const url = new URL(this.baseUrl);
    if (this.sessionId) {
      url.searchParams.append("session", this.sessionId);
    }

    this.eventSource = new EventSource(url.toString());

    this.eventSource.onmessage = event => {
      try {
        const message = JSON.parse(event.data);
        console.log("Received SSE message:", message);
        // Process message...
      } catch (e) {
        console.error("Error parsing SSE message:", e);
      }
    };

    this.eventSource.onerror = error => {
      console.error("SSE connection error:", error);
      this.reconnectEventStream();
    };

    console.log("SSE stream opened");
  }

  private reconnectEventStream() {
    if (this.eventSource) {
      this.eventSource.close();
      this.eventSource = null;
    }

    setTimeout(() => this.openEventStream(), 1000);
  }

  private async processStream(response: Response) {
    const reader = response.body?.getReader();
    if (!reader) return;

    const decoder = new TextDecoder();
    let buffer = "";

    try {
      while (true) {
        const { done, value } = await reader.read();
        if (done) break;

        buffer += decoder.decode(value, { stream: true });

        // Process SSE events in buffer
        const events = buffer.split("\n\n");
        buffer = events.pop() || "";

        for (const event of events) {
          const lines = event.split("\n");
          const data = lines.find(line => line.startsWith("data:"))?.slice(5);

          if (data) {
            try {
              const message = JSON.parse(data);
              console.log("Received stream message:", message);
              // Process message...
            } catch (e) {
              console.error("Error parsing stream message:", e);
            }
          }
        }
      }
    } catch (e) {
      console.error("Error reading stream:", e);
    }
  }

  async sendRequest(method: string, params: any = {}) {
    if (!this.sessionId) {
      throw new Error("Session not initialized");
    }

    const request = {
      jsonrpc: "2.0",
      id: method + "-" + Date.now(),
      method,
      params,
    };

    const response = await fetch(this.baseUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json, text/event-stream",
        "Mcp-Session-Id": this.sessionId,
      },
      body: JSON.stringify(request),
    });

    if (response.headers.get("Content-Type")?.includes("text/event-stream")) {
      // Handle streaming response
      this.processStream(response);
      return null; // Response will be processed asynchronously
    } else {
      // Handle JSON response
      return await response.json();
    }
  }

  async terminate() {
    if (!this.sessionId) return;

    if (this.eventSource) {
      this.eventSource.close();
      this.eventSource = null;
    }

    try {
      await fetch(this.baseUrl, {
        method: "DELETE",
        headers: {
          "Mcp-Session-Id": this.sessionId,
        },
      });
      console.log("Session terminated");
    } catch (e) {
      console.error("Error terminating session:", e);
    }

    this.sessionId = null;
  }
}
```

## usage

```ts
const httpClient = new HttpStreamClient("http://localhost:8080/mcp");

await httpClient.initialize();

const res = await httpClient.sendRequest("tools/call", {
  name: "example_tool",
  arguments: {
    message: "Hello World!",
  },
});

console.log(res[0].result);
```
