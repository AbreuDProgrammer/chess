export default function Square({color, started, piece, onClick}) {
  return <div onClick={onClick} className={'flex items-center justify-center h-24 w-24 '+color}>{started && piece}</div>
}