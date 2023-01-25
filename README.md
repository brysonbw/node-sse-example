# SSE (Sever-Side-Events): Simple Example Using Node JS

## Install 
```bash
npm install
```

## Start Server
```bash
npm run dev
```

## What is SSE (Sever-Side-Events)?
A one-way connection, the server sending data to the client.

### How Does SSE (Server-Side-Events) Work?
Server/Response sends the ‘text’ through the headers to client
> Node JS Example: 
```javaScript
app.use('/stream', (req, res) => {
res.setHeader('Content-Type', 'text/event-stream')
res.write('data: ' + '<ENTER_YOUR_DATA_TO_SEND>\n\n')
})
```

### SSE (Server-Side-Events) Components
- HTTP 1 and/or HTTP 2

### Reciving Events From The Server (Client-Side)
The server-sent event (browser) API is contained in the [EventSource](https://developer.mozilla.org/en-US/docs/Web/API/Server-sent_events/Using_server-sent_events#creating_an_eventsource_instance) interface.