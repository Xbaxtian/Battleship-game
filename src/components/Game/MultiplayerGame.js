import { useState, useEffect } from 'react'
import io from 'socket.io-client'
import { Label } from '../ui';
import Game from './Game'

const MultiplayerGame = () => {
  const [socket, setSocket] = useState(null)
  const [enemyConnected, setEnemyConnected] = useState(false);
  const [haveTurn, setHaveTurn] = useState(false);

  useEffect(() => {
    fetch('/api/socketio').finally(() => {
      const clientSocket = io()

      clientSocket.on('a user connected', () => {
        console.log('enemy connected');
        clientSocket.emit('start game')
      })

      clientSocket.on('game started', () => {
        setEnemyConnected(true)
      })

      clientSocket.on('give turn', () => {
        setHaveTurn(true)
      })

      setSocket(clientSocket)
    })
  }, [])

  const handleShoot = (position) => {
    setHaveTurn(false)
    socket.emit('player shoots', position)
  }

  return (
    <>
      {enemyConnected
        ? <Game propTurns={999999} standBy={!haveTurn} handleTurnsCallback={handleShoot} isMultiplayer />
        : <Label className="text-center mt-4">Waiting for enemy...</Label>}
    </>
  )
}

export default MultiplayerGame
