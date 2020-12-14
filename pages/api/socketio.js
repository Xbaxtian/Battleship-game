import { Server } from 'socket.io'

const ioHandler = (req, res) => {
  if (!res.socket.server.io) {
    console.log('*First use, starting socket.io')

    const io = new Server(res.socket.server)

    io.on('connection', socket => {
      socket.broadcast.emit('a user connected')

      socket.on('start game', () => {
        io.emit('game started')
        socket.broadcast.emit('give turn')
      })

      socket.on('player shoots', (data) => {
        console.log('data', data)
        socket.broadcast.emit('enemy move', data)
        socket.broadcast.emit('give turn')
      })
    })

    res.socket.server.io = io
  } else {
    console.log('socket.io already running')
  }
  res.end()
}

export const config = {
  api: {
    bodyParser: false
  }
}

export default ioHandler
