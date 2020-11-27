import { randomBetweenZeroAnd } from '../../utils'
import { axisSystem, shipTypes } from '../../constants'

const getRandomBlock = () => {
  return {
    x: randomBetweenZeroAnd(10),
    y: randomBetweenZeroAnd(10),
  }
}

const getRandomAxis = () => axisSystem[randomBetweenZeroAnd(2)]

export const isValidPosition = ({ x, y }, matrix) => {
  return matrix[y] && matrix[y][x] !== undefined && !matrix[y][x]
}

export const getShipBoilerplate = type => ({
  type: shipTypes[type].label,
  size: shipTypes[type].size,
  positions: [],
  status: null,
})

export const buildShip = (size) => {
  const shipPositions = []
  const firstBlock = getRandomBlock()
  const axis = getRandomAxis()
  const direction = randomBetweenZeroAnd(2) ? 1 : -1

  for(let i = 0; i < size; i += 1) {
    const axisValue = firstBlock[axis] + (i * direction)
    if (axis === 'x')
      shipPositions.push({
        x: axisValue,
        y: firstBlock.y,
        shoot: false,
      })
    if (axis === 'y')
      shipPositions.push({
        x: firstBlock.x,
        y: axisValue,
        shoot: false,
      })
  }

  return shipPositions
}
