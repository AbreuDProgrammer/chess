export default function Square({square, color, started, piece, onClick}) {
  let hasPiece = piece != null
  return <div onClick={() => onClick(square, hasPiece)} className={'flex items-center justify-center h-24 w-24 '+color}>{started && piece}</div>
}
