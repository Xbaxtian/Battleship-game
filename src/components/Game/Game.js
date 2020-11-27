import { useState } from 'react'
import { Battlefield } from '../Battlefield'
import { Label } from '../ui'

const Game = () => {
  const [turns, setTurns] = useState(30)

  const handleTurns = () => {
    setTurns(turns - 1)
  }

  return (
    <>
      <h1 className="my-6 text-4xl text-center font-bold">Let's Play</h1>
      <div className="flex">
        <div className="mr-8">
          <Battlefield handleTurns={handleTurns} />
        </div>
        <div className="py-8">
          <Label>
            Turnos:
            <span className="text-2xl">{` ${turns}`}</span>
          </Label>
        </div>
      </div>
    </>
  )
}

export default Game;
