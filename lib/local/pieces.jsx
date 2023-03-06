import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChessQueen, faChessPawn, faChessRook, faChessBishop, faChessKnight, faChessKing } from '@fortawesome/free-solid-svg-icons'

const pieces = [
  {
    name: 'Pawn',
    initialPosition: 'A2',
    color: 'white',
    piece: <FontAwesomeIcon className='text-7xl' icon={faChessPawn} color='rgb(148 163 184)'/>
  },
  {
    name: 'Pawn',
    initialPosition: 'C2',
    color: 'white',
    piece: <FontAwesomeIcon className='text-7xl' icon={faChessPawn} color='rgb(148 163 184)'/>
  },
  {
    name: 'Pawn',
    initialPosition: 'E2',
    color: 'white',
    piece: <FontAwesomeIcon className='text-7xl' icon={faChessPawn} color='rgb(148 163 184)'/>
  },
  {
    name: 'Pawn',
    initialPosition: 'G2',
    color: 'white',
    piece: <FontAwesomeIcon className='text-7xl' icon={faChessPawn} color='rgb(148 163 184)'/>
  },
  {
    name: 'Pawn',
    initialPosition: 'B2',
    color: 'white',
    piece: <FontAwesomeIcon className='text-7xl' icon={faChessPawn} color='rgb(148 163 184)'/>
  },
  {
    name: 'Pawn',
    initialPosition: 'D2',
    color: 'white',
    piece: <FontAwesomeIcon className='text-7xl' icon={faChessPawn} color='rgb(148 163 184)'/>
  },
  {
    name: 'Pawn',
    initialPosition: 'F2',
    color: 'white',
    piece: <FontAwesomeIcon className='text-7xl' icon={faChessPawn} color='rgb(148 163 184)'/>
  },
  {
    name: 'Pawn',
    initialPosition: 'H2',
    color: 'white',
    piece: <FontAwesomeIcon className='text-7xl' icon={faChessPawn} color='rgb(148 163 184)'/>
  },
  {
    name: 'Rook',
    initialPosition: 'A1',
    color: 'white',
    piece: <FontAwesomeIcon className='text-7xl' icon={faChessRook} color='rgb(148 163 184)'/>
  },
  {
    name: 'Rook',
    initialPosition: 'H1',
    color: 'white',
    piece: <FontAwesomeIcon className='text-7xl' icon={faChessRook} color='rgb(148 163 184)'/>
  },
  {
    name: 'Bishop',
    initialPosition: 'C1',
    color: 'white',
    piece: <FontAwesomeIcon className='text-7xl' icon={faChessBishop} color='rgb(148 163 184)'/>
  },
  {
    name: 'Bishop',
    initialPosition: 'F1',
    color: 'white',
    piece: <FontAwesomeIcon className='text-7xl' icon={faChessBishop} color='rgb(148 163 184)'/>
  },
  {
    name: 'Knight',
    initialPosition: 'B1',
    color: 'white',
    piece: <FontAwesomeIcon className='text-7xl' icon={faChessKnight} color='rgb(148 163 184)'/>
  },
  {
    name: 'Knight',
    initialPosition: 'G1',
    color: 'white',
    piece: <FontAwesomeIcon className='text-7xl' icon={faChessKnight} color='rgb(148 163 184)'/>
  },
  {
    name: 'King',
    initialPosition: 'E1',
    color: 'white',
    piece: <FontAwesomeIcon className='text-7xl' icon={faChessKing} color='rgb(148 163 184)'/>
  },
  {
    name: 'Queen',
    initialPosition: 'D1',
    color: 'white',
    piece: <FontAwesomeIcon className='text-7xl' icon={faChessQueen} color='rgb(148 163 184)'/>
  },

  {
    name: 'Pawn',
    initialPosition: 'A7',
    color: 'black',
    piece: <FontAwesomeIcon className='text-7xl' icon={faChessPawn} color='rgb(51 65 85)'/>
  },
  {
    name: 'Pawn',
    initialPosition: 'C7',
    color: 'black',
    piece: <FontAwesomeIcon className='text-7xl' icon={faChessPawn} color='rgb(51 65 85)'/>
  },
  {
    name: 'Pawn',
    initialPosition: 'E7',
    color: 'black',
    piece: <FontAwesomeIcon className='text-7xl' icon={faChessPawn} color='rgb(51 65 85)'/>
  },
  {
    name: 'Pawn',
    initialPosition: 'G7',
    color: 'black',
    piece: <FontAwesomeIcon className='text-7xl' icon={faChessPawn} color='rgb(51 65 85)'/>
  },
  {
    name: 'Pawn',
    initialPosition: 'B7',
    color: 'black',
    piece: <FontAwesomeIcon className='text-7xl' icon={faChessPawn} color='rgb(51 65 85)'/>
  },
  {
    name: 'Pawn',
    initialPosition: 'D7',
    color: 'black',
    piece: <FontAwesomeIcon className='text-7xl' icon={faChessPawn} color='rgb(51 65 85)'/>
  },
  {
    name: 'Pawn',
    initialPosition: 'F7',
    color: 'black',
    piece: <FontAwesomeIcon className='text-7xl' icon={faChessPawn} color='rgb(51 65 85)'/>
  },
  {
    name: 'Pawn',
    initialPosition: 'H7',
    color: 'black',
    piece: <FontAwesomeIcon className='text-7xl' icon={faChessPawn} color='rgb(51 65 85)'/>
  },
  {
    name: 'Rook',
    initialPosition: 'A8',
    color: 'black',
    piece: <FontAwesomeIcon className='text-7xl' icon={faChessRook} color='rgb(51 65 85)'/>
  },
  {
    name: 'Rook',
    initialPosition: 'H8',
    color: 'black',
    piece: <FontAwesomeIcon className='text-7xl' icon={faChessRook} color='rgb(51 65 85)'/>
  },
  {
    name: 'Bishop',
    initialPosition: 'C8',
    color: 'black',
    piece: <FontAwesomeIcon className='text-7xl' icon={faChessBishop} color='rgb(51 65 85)'/>
  },
  {
    name: 'Bishop',
    initialPosition: 'F8',
    color: 'black',
    piece: <FontAwesomeIcon className='text-7xl' icon={faChessBishop} color='rgb(51 65 85)'/>
  },
  {
    name: 'Knight',
    initialPosition: 'B8',
    color: 'black',
    piece: <FontAwesomeIcon className='text-7xl' icon={faChessKnight} color='rgb(51 65 85)'/>
  },
  {
    name: 'Knight',
    initialPosition: 'G8',
    color: 'black',
    piece: <FontAwesomeIcon className='text-7xl' icon={faChessKnight} color='rgb(51 65 85)'/>
  },
  {
    name: 'King',
    initialPosition: 'E8',
    color: 'black',
    piece: <FontAwesomeIcon className='text-7xl' icon={faChessKing} color='rgb(51 65 85)'/>
  },
  {
    name: 'Queen',
    initialPosition: 'D8',
    color: 'black',
    piece: <FontAwesomeIcon className='text-7xl' icon={faChessQueen} color='rgb(51 65 85)'/>
  },
]

export default pieces