import express from "express";
const app = express()


// health-check
app.get('/', (req, res) => {
    res.send('Server/API up & running...')
})


/* 
! Be sure to start server (base/home route => '/') first then open a web browser console and type the following:
* let sse = new EventSource('http://localhost:5000/stream');
* sse.onmessage = console.log
*/

// init server sse
app.get('/stream', (req, res) => {
    // this will be the response headers to signal stream event server-side
    res.setHeader('Content-Type', 'text/event-stream')

    // we need to use write
    // so we can write the SAME HTTP packets

    // data + <ENTER_YOUR_DATA> + \n\n <<< important to signal event
    // \n\n -> this is required at the end (must include)
    res.write('data: ' + "Hello! I am a SSE message sent from the server.\n\n")

    // if you want to send another event send again 
    // res.write('data: ' + "hello")

    //! uncomment below to  trigger event/interval
    // eventTriggerInterval(res)
})


// leave open connection and send event/interval every second
//! uncomment belelow to create a reocurring sse event
// let i = 0;
// const eventTriggerInterval = (res) => {
//     res.write('data: ' + `hello from server (count):${i++} \n\n`)

//     setTimeout(() => eventTriggerPerSecond(res), 1000)
// }

// port
const port = 5000

// app listen 
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})