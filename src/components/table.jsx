export default function Table() {

  const cols = ['A','B','C','D','E','F','G','H']
  const rows = [1, 2, 3, 4, 5, 6, 7, 8]

  const squares = cols.map(col => {
    return rows.map(row => {
      return <div key={col+row} id={col+row}></div>
    })
  })

  return (
    <div className="w-table h-table bg-black">
      
    </div>
  )
}