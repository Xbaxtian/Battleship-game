import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import { Battlefield } from '../Battlefield'
import { Label, Button } from '../ui'

const Game = () => {
  const router = useRouter()
  const [turns, setTurns] = useState(0)
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

  useEffect(() => {
    const configuredTurns = router.query.turns

    if(!configuredTurns && !parseInt(configuredTurns, 10))
      router.push('/')

    
    setTurns(parseInt(configuredTurns, 10))
  }, [router])

  return (
    <>
      <h1 className="my-6 text-4xl text-center font-bold">Let's Play</h1>
      <div className="flex justify-center">
        <div className="mr-8">
          <Battlefield handleTurns={handleTurns} playable={!gameOver} battleNumber={gameNumber} />
        </div>
        <div className="py-8">
          <div className="mb-4">
            <Label>
              <span>Turns:</span>
              <span className="ml-2 text-2xl">{` ${turns}`}</span>
            </Label>
          </div>

          <div className="mb-4">
            <Label className="flex items-center justify-between">
              <span className="w-32">1 Carrier:</span>
              <div className="w-14 h-14 bg-gray-500 inline-block mr-4" />
              <span>x4</span>
            </Label>
          </div>

          <div className="mb-4">
            <Label className="flex items-center justify-between">
              <span className="w-32">2 Crusier:</span>
              <div className="w-14 h-14 bg-gray-500 inline-block mr-4" />
              <span>x2</span>
            </Label>
          </div>

          <div className="mb-4">
            <Label className="flex items-center justify-between">
              <span className="w-32">3 Destroyer:</span>
              <div className="w-14 h-14 bg-gray-500 inline-block mr-4" />
              <span>x2</span>
            </Label>
          </div>

          <div className="mb-8">
            <Label className="flex items-center justify-between">
              <span className="w-32">4 Submarine:</span>
              <div className="w-14 h-14 bg-gray-500 inline-block mr-4" />
              <span>x1</span>
            </Label>
          </div>

          <Button label="Reset" onClick={resetGame} />
        </div>
      </div>
    </>
  )
}

export default Game;
