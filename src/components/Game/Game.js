import { useState } from 'react'
import { Battlefield } from '../Battlefield'
import { Label, Button } from '../ui'

const Game = () => {
  const [turns, setTurns] = useState(30)
  const [gameOver, setGameOver] = useState(false)
  const [gameNumber, setGameNumber] = useState(1)

  const handleTurns = (clicked) => {
    if (clicked)
      return

    const turnsLeft = turns - 1
    setTurns(turnsLeft)
    if (!turnsLeft)
      setGameOver(true)
  }

  const resetGame = () => {
    setTurns(30)
    setGameOver(false)
    setGameNumber(gameNumber + 1)
  }

  return (
    <>
      <h1 className="my-6 text-4xl text-center font-bold">Let's Play</h1>
      <div className="flex">
        <div className="mr-8">
          <Battlefield handleTurns={handleTurns} playable={!gameOver} battleNumber={gameNumber} />
        </div>
        <div className="py-8">
          <Label>
            Turnos:
            <span className="text-2xl">{` ${turns}`}</span>
          </Label>

          <Button label="Reset" onClick={resetGame} />
        </div>
      </div>
    </>
  )
}

export default Game;
