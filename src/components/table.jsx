import Table from '@/styles/table.module.css'
import Text from '@/styles/text.module.css'

export default function table() {

  const cols = ['A','B','C','D','E','F','G','H']
  const rows = [8, 7, 6, 5, 4, 3, 2, 1]

  const squares = rows.map((row, index) => {
    return cols.map(col => {
      let square = col+row
      let color = getColor(col, row)
      let reverseColor = color == Table.white ? Text.black : Text.white
      return <div key={square} id={square} className={'flex items-center justify-center '+color+' '+reverseColor}></div>
    })
  })

  const colsText = cols.map(col => {
    return <div className='flex items-center justify-center' key={col}><h1 className='text-2xl'>{col}</h1></div>
  })

  const rowsText = rows.map(row => {
    return <div className='flex items-center justify-center w-10' key={row}><h1 className='text-2xl'>{row}</h1></div>
  })

  return (
    <div className='flex flex-row'>
      <div className='h-table w-encapsulation grid grid-rows-8 grid-cols-1'>
        {rowsText}
      </div>
      <div>
        <div className="w-table h-table grid grid-cols-8 grid-rows-8 border-4 border-black">
          {squares}
        </div>
        <div className='w-table h-encapsulation grid grid-cols-8 grid-rows-1'>
          {colsText}
        </div>
      </div>
    </div>
  )
}

function getColor(col, row)
{
  const rowNumber = ['A','B','C','D','E','F','G','H'].indexOf(col)
  let color = isEven(rowNumber) ? isEven(row) ? Table.white : Table.black : isEven(row) ? Table.black : Table.white
  return color
}

function isEven(number)
{
  return number % 2 == 0
}