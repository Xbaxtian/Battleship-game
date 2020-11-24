const columns = 10
const rows = 10
const startLetter = 65

const Battlefield = () => {
  return (
    <table>
      <thead>
        <th scope="column"> </th>
        {[...Array(columns)].map((_, i) => (
          <th scope="column">{String.fromCharCode(startLetter + i)}</th>
        ))}
      </thead>
      <tbody>
        {[...Array(rows)].map((_, x) => (
          <tr>
            <th scope="row">{x + 1}</th>
            {[...Array(columns)].map((__, y) => (
              <td x={x} y={y}> </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  )
}

export default Battlefield
