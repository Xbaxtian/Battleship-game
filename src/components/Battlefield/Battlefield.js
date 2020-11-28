import { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import { Coordinate } from '../Coordinate'
import { mapNTimes } from '../../utils'
import { getShipBoilerplate, buildShip, isValidPosition } from './service'

const columns = 10
const rows = 10
const startLetter = 65

const getInitialMatrix = () => mapNTimes(rows, () => (
  mapNTimes(columns, () => 0)
))

const getInitialShips = () => [
  getShipBoilerplate('carrier'),
  getShipBoilerplate('crusier'),
  getShipBoilerplate('crusier'),
  getShipBoilerplate('destroyer'),
  getShipBoilerplate('destroyer'),
  getShipBoilerplate('destroyer'),
  getShipBoilerplate('submarine'),
  getShipBoilerplate('submarine'),
  getShipBoilerplate('submarine'),
  getShipBoilerplate('submarine'),
]

const Battlefield = ({ handleTurns, playable, battleNumber }) => {
  const [matrix, setMatrix] = useState(getInitialMatrix())

  const handleShoot = (x, y, shooted) => {
    if(!playable)
      return false;

    handleTurns(shooted)
    return matrix[y][x] ? 'hit' : 'miss'
  };

  useEffect(() => {
    const matrixCopy = getInitialMatrix().map(arr => [...arr])
    const newShips = getInitialShips()

    newShips.map(currentShip => {
      let shipPositions = []
      let canBuild = false

      do {
        shipPositions = buildShip(currentShip.size)
        canBuild = shipPositions.reduce((acc, position) => acc && isValidPosition(position, matrixCopy), true)
      } while (!canBuild);

      const buildedShip = { ...currentShip, positions: shipPositions, status: 'operational' }

      shipPositions.forEach(position => {
        matrixCopy[position.y][position.x] = 1
      })

      return buildedShip
    })

    setMatrix(matrixCopy)
  }, [battleNumber])

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
        {matrix.map((_, y) => (
          <tr key={y.toString()}>
            <th scope="row" className="px-2">{y + 1}</th>
            {matrix[y].map((__, x) => (
              <td key={`${y.toString()}${x.toString()}`} className="w-14 h-14">
                <Coordinate
                  key={`${battleNumber}-${y.toString()}.${x.toString()}`}
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

Battlefield.propTypes = {
  handleTurns: PropTypes.func.isRequired,
  playable: PropTypes.bool.isRequired,
  battleNumber: PropTypes.number.isRequired,
}

export default Battlefield
