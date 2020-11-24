const columns = 10
const rows = 10
const startLetter = 65

const Battlefield = () => {
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
              <td key={`${x.toString()}${y.toString()}`} className="w-16 h-16"> </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  )
}

export default Battlefield
