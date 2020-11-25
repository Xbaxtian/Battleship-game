import { useState, useEffect } from 'react'
import { Coordinate } from '../Coordinate'
import { mapNTimes, randomBetweenZeroAnd } from '../../utils'

const columns = 10
const rows = 10
const startLetter = 65

const initialMatrix = mapNTimes(rows, () => (
  mapNTimes(columns, () => 0)
))

const axisSystem = ['x', 'y']

const Battlefield = () => {
  const [matrix] = useState(initialMatrix)

  const getRandomBlock = () => {
    return {
      x: randomBetweenZeroAnd(rows),
      y: randomBetweenZeroAnd(columns),
    }
  }

  const getRandomAxis = () => axisSystem[randomBetweenZeroAnd(2)]

  const isValidPosition = ({ x, y }) => {
    return matrix[y] && matrix[y][x] !== undefined && !matrix[y][x]
  }

  const areValidNextPositions = ({ x, y }, axis, direction, blocksNumber) => {
    let areValid = true

    for(let i = 1; i <= blocksNumber; i += 1) {
      if (axis === 'x')
        areValid = areValid && isValidPosition({y, x: x + (i * direction)})
      if (axis === 'y')
        areValid = areValid && isValidPosition({x, y: y + (i * direction)})
    }

    return areValid || false
  }

  const getPosibleAxisAndDirection = (startBlock, size) => {
    let axis = getRandomAxis()
    let direction = randomBetweenZeroAnd(2) ? 1 : -1
    if (areValidNextPositions(startBlock, axis, direction, size-1))
      return { isPosible: true, axis, direction }
  
    direction *= -1
    if (areValidNextPositions(startBlock, axis, direction, size-1))
      return { isPosible: true, axis, direction }
        
    axis = axis === 'x' ? 'y' : 'x'
    direction *= -1
    if (areValidNextPositions(startBlock, axis, direction, size-1))
      return { isPosible: true, axis, direction }

    direction *= -1
    if (areValidNextPositions(startBlock, axis, direction, size-1))
      return { isPosible: true, axis, direction }

    return { isPosible: false, axis, direction }
  }

  const buildShip = (size) => {
    if (size < 1)
      return

    let firstBlock
    let isBuilded = false

    do {
      firstBlock = getRandomBlock()

      if (isValidPosition(firstBlock)) {
        const { isPosible, axis, direction } = size > 1
          ? getPosibleAxisAndDirection(firstBlock, size)
          : { isPosible: true, axis: 'x', direction: 1 } // This are default values

        if (isPosible) {
          for(let i = 0; i < size; i += 1) {
            const axisValue = firstBlock[axis] + (i * direction)
            if (axis === 'x')
              matrix[firstBlock.y][axisValue] = 1
            if (axis === 'y')
              matrix[axisValue][firstBlock.x] = 1
          }

          isBuilded = true
        }
      }
    } while (!isBuilded)
  }

  const handleShoot = (x, y) => {
    return matrix[y][x] ? 'hit' : 'miss'
  };

  useEffect(() => {
    buildShip(4)
    
    buildShip(3)
    buildShip(3)
    
    buildShip(2)
    buildShip(2)
    buildShip(2)
    
    buildShip(1)
    buildShip(1)
    buildShip(1)
    buildShip(1)
  })

  return (
    <table className="table-auto">
      <thead>
        <tr>
          <th scope="column"> </th>
          {mapNTimes(columns, (_, i) => (
            <th scope="column" key={i.toString()}>{String.fromCharCode(startLetter + i)}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {mapNTimes(rows, (_, y) => (
          <tr key={y.toString()}>
            <th scope="row" className="px-2">{y + 1}</th>
            {mapNTimes(columns, (__, x) => (
              <td key={`${x.toString()}${y.toString()}`} className="w-14 h-14">
                <Coordinate
                  x={x}
                  y={y}
                  handleShoot={handleShoot}
                />
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  )
}

export default Battlefield
