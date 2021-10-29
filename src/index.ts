import express from 'express'
import { createServer } from 'http'
import { Server } from 'socket.io'

import { logger } from './utils/utils'

const app = express()
const httpServer = createServer(app)
const io = new Server(httpServer, { /* options */ })

app.get('/', (req, res) => { res.send("Hello World"); });

io.on('connection', (socket) => {
    socket.broadcast.emit('hi');
    
    socket.on('chat message', (msg) => {
        logger.info('message: ' + msg);
    });
    socket.on('broadcast message', (msg) => {
        io.emit('broadcast message', msg);
        logger.info('bro message: ' + msg);

    });



});

const start = () => {
    const port = process.env.SV_PORT || 3000
    httpServer.listen(port, () => {
        logger.info(`Server started at port ${port}`)
    })
}
start()
