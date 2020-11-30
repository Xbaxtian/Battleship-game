import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import Image from 'next/image'
import { Battlefield } from '../Battlefield'
import { Label, Button } from '../ui'
import GameOverModal from './GameOverModal'

const Game = () => {
  const router = useRouter()
  const [turns, setTurns] = useState(0)
  const [gameOver, setGameOver] = useState(false)
  const [gameNumber, setGameNumber] = useState(1)
  const [isDialogOpen, setIsDialogOpen] = useState(false)
  const [won, setWon] = useState(false)

  const handleTurns = (clicked, hitsCount) => {
    if (clicked)
      return

    const turnsLeft = turns - 1
    setTurns(turnsLeft)
    if (!turnsLeft) {
      setGameOver(true)
      setIsDialogOpen(true)
    }

    if (hitsCount === 20) {
      setGameOver(true)
      setWon(true)
      setIsDialogOpen(true)
    }
  }

  const resetGame = () => {
    const configuredTurns = router.query.turns
    setTurns(parseInt(configuredTurns, 10))
    setGameOver(false)
    setGameNumber(gameNumber + 1)
    setWon(false)
    setIsDialogOpen(false)
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
      <GameOverModal isOpen={isDialogOpen}>
        <div className="px-4 pt-5 pb-4 text-center">
          <Image
            src={won ? '/check.svg' : '/delete.svg'}
            width={60}
            height={60}
          />
          <h2 className={`${won ? 'text-green-600' : 'text-red-600'} text-2xl my-6`}>
            You
            {' '}
            {won ? 'Won' : 'Lose'}
            !!!
          </h2>
          <div className="sm:max-w-xs mx-auto">
            <Button label="Play again" onClick={resetGame} />
          </div>
        </div>
      </GameOverModal>
    </>
  )
}

export default Game;
