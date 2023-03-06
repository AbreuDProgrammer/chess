export default function Square({square, color, started, piece}) {
  return (
    <div key={square} id={square} className={'flex items-center justify-center h-24 w-24 '+color}>{started && piece}</div>
  )
}