import Table from '@/styles/table.module.css'
import Pieces from '../../lib/local/pieces'
import Square from '@/components/square'
import Piece from '@/components/piece'

export default function table({ started }) {

  const cols = ['A','B','C','D','E','F','G','H']
  const rows = [8, 7, 6, 5, 4, 3, 2, 1]

  let pieces = Pieces.map(piece => {
    return <Piece key={piece.name} name={piece.name} initialPosition={piece.initialPosition} piece={piece.piece} color={piece.color} >{piece.piece}</Piece>
  })

  console.log(pieces);

  const squares = rows.map((row) => {
    return cols.map((col) => {
      let square = col+row
      let color = getColor(col, row)
      return <Square key={square} square={square} color={color} started={started} onClick={squareClicked}></Square>
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
        <div className="w-table h-table grid grid-cols-8 grid-rows-8">
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

function squareClicked(square, hasPiece, piece)
{
  console.log(square, hasPiece)
}