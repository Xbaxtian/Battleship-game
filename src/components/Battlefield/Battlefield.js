const { Coordinate } = require("../Coordinate")

const columns = 10
const rows = 10
const startLetter = 65

const Battlefield = () => {
  const handleShoot = () => {
    return 'miss';
  };

  return (
    <table className="table-auto">
      <thead>
        <tr>
          <th scope="column"> </th>
          {[...Array(columns)].map((_, i) => (
            <th scope="column" key={i.toString()}>{String.fromCharCode(startLetter + i)}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {[...Array(rows)].map((_, x) => (
          <tr key={x.toString()}>
            <th scope="row">{x + 1}</th>
            {[...Array(columns)].map((__, y) => (
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
