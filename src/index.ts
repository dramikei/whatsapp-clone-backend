import express from 'express'
import { createServer } from 'http'
import { Server } from 'socket.io'

import { logger } from './utils'

const app = express()
const httpServer = createServer(app)
const io = new Server(httpServer, { /* options */ })

io.on('connection', (socket) => {
    logger.info(socket)
})

const start = () => {
    const port = process.env.SV_PORT || 3000
    httpServer.listen(port, () => {
        logger.info(`Server started at port ${port}`)
    })
}
start()
