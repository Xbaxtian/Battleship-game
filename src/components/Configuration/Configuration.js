import { useState } from 'react'
import { useRouter } from 'next/router'
import { infinite, defaultLevels } from '../../constants'
import { Button } from '../ui'

const Configuration = () => {
  const [turns, setTurns] = useState(infinite)
  const router = useRouter()

  const handleSubmit = (event) => {
    event.preventDefault();

    router.push({
      pathname: '/game',
      query: { turns }
    })
  }

  const handleLevelChange = ({ target }) => {
    if(target.value > 0)
      setTurns(target.value)
  }

  return (
    <div className="container mx-auto px-4">
      <h1 className="my-6 text-4xl text-center font-bold">BattleShip Game</h1>

      <form onSubmit={handleSubmit} className="mx-auto w-64">
        <label htmlFor="level" className="flex items-center justify-between mb-4">
          <span className="mr-2 w-20 inline-block">Deficulty</span>
          <select
            id="level"
            name="level"
            onChange={handleLevelChange}
            className="mt-1 w-32 py-2 pl-3 pr-7 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
          >
            {defaultLevels.map(level => (
              <option key={level.id} value={level.turns}>{level.name}</option>
            ))}
          </select>
        </label>
              
        <label htmlFor="turns" className="flex items-center justify-between mb-4">
          <span className="mr-2 w-20 inline-block">Turns</span>
          <input
            type="number"
            id="turns"
            name="turns"
            value={turns}
            onChange={handleLevelChange}
            className="mt-1 w-32 py-1 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
          />
        </label>

        <Button label="Play!" type="submit" />
      </form>
    </div>
  )
}

export default Configuration
