import express from "express";
const app = express()


// health-check
app.get('/', (req, res) => {
    res.send('Server/API up & running...')
})

// init server sse
app.get('/stream', (req, res) => {
    // this will be the response headers to signal stream event server-side
    res.setHeader('Content-Type', 'text/event-stream')

    // we need to use write
    // so we can write the SAME HTTP packets

    // data + <ENTER_YOUR_DATA> + \n\n <<< important to signal event
    // \n\n -> this is required at the end (must include)
    res.write('data: ' + "Hello! I am a SSE message sent from the server.\n\n")

    // trigger event/interval
    eventTriggerInterval(res)
})


// leave open connection and send event/interval every second
let i = 0;
function eventTriggerInterval(res) {
    res.write('data: ' + `hello from server (count):${i++} \n\n`)
    setTimeout(() => eventTriggerInterval(res), 1000)
}

// port
const port = 5000

// app listen 
app.listen(port, () => {
  console.log(`Listening on http://localhost:${port}`)
})