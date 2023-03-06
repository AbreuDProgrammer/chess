import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChessQueen, faChessPawn, faChessRook, faChessBishop, faChessKnight, faChessKing } from '@fortawesome/free-solid-svg-icons'

const pieces = [
  {
    name: 'A2-Pawn',
    initialPosition: 'A2',
    color: 'white',
    piece: <FontAwesomeIcon  size="4x" icon={faChessPawn} color='rgb(148 163 184)'/>
  },
  {
    name: 'C2-Pawn',
    initialPosition: 'C2',
    color: 'white',
    piece: <FontAwesomeIcon  size="4x" icon={faChessPawn} color='rgb(148 163 184)'/>
  },
  {
    name: 'E2-Pawn',
    initialPosition: 'E2',
    color: 'white',
    piece: <FontAwesomeIcon  size="4x" icon={faChessPawn} color='rgb(148 163 184)'/>
  },
  {
    name: 'G2-Pawn',
    initialPosition: 'G2',
    color: 'white',
    piece: <FontAwesomeIcon  size="4x" icon={faChessPawn} color='rgb(148 163 184)'/>
  },
  {
    name: 'B2-Pawn',
    initialPosition: 'B2',
    color: 'white',
    piece: <FontAwesomeIcon  size="4x" icon={faChessPawn} color='rgb(148 163 184)'/>
  },
  {
    name: 'D2-Pawn',
    initialPosition: 'D2',
    color: 'white',
    piece: <FontAwesomeIcon  size="4x" icon={faChessPawn} color='rgb(148 163 184)'/>
  },
  {
    name: 'F2-Pawn',
    initialPosition: 'F2',
    color: 'white',
    piece: <FontAwesomeIcon  size="4x" icon={faChessPawn} color='rgb(148 163 184)'/>
  },
  {
    name: 'H2-Pawn',
    initialPosition: 'H2',
    color: 'white',
    piece: <FontAwesomeIcon  size="4x" icon={faChessPawn} color='rgb(148 163 184)'/>
  },
  {
    name: 'A1-Rook',
    initialPosition: 'A1',
    color: 'white',
    piece: <FontAwesomeIcon  size="4x" icon={faChessRook} color='rgb(148 163 184)'/>
  },
  {
    name: 'H1-Rook',
    initialPosition: 'H1',
    color: 'white',
    piece: <FontAwesomeIcon  size="4x" icon={faChessRook} color='rgb(148 163 184)'/>
  },
  {
    name: 'C1-Bishop',
    initialPosition: 'C1',
    color: 'white',
    piece: <FontAwesomeIcon  size="4x" icon={faChessBishop} color='rgb(148 163 184)'/>
  },
  {
    name: 'F1-Bishop',
    initialPosition: 'F1',
    color: 'white',
    piece: <FontAwesomeIcon  size="4x" icon={faChessBishop} color='rgb(148 163 184)'/>
  },
  {
    name: 'B1-Knight',
    initialPosition: 'B1',
    color: 'white',
    piece: <FontAwesomeIcon  size="4x" icon={faChessKnight} color='rgb(148 163 184)'/>
  },
  {
    name: 'G1-Knight',
    initialPosition: 'G1',
    color: 'white',
    piece: <FontAwesomeIcon  size="4x" icon={faChessKnight} color='rgb(148 163 184)'/>
  },
  {
    name: 'E1-King',
    initialPosition: 'E1',
    color: 'white',
    piece: <FontAwesomeIcon  size="4x" icon={faChessKing} color='rgb(148 163 184)'/>
  },
  {
    name: 'D1-Queen',
    initialPosition: 'D1',
    color: 'white',
    piece: <FontAwesomeIcon  size="4x" icon={faChessQueen} color='rgb(148 163 184)'/>
  },

  {
    name: 'A7-Pawn',
    initialPosition: 'A7',
    color: 'black',
    piece: <FontAwesomeIcon  size="4x" icon={faChessPawn} color='rgb(51 65 85)'/>
  },
  {
    name: 'C7-Pawn',
    initialPosition: 'C7',
    color: 'black',
    piece: <FontAwesomeIcon  size="4x" icon={faChessPawn} color='rgb(51 65 85)'/>
  },
  {
    name: 'E7-Pawn',
    initialPosition: 'E7',
    color: 'black',
    piece: <FontAwesomeIcon  size="4x" icon={faChessPawn} color='rgb(51 65 85)'/>
  },
  {
    name: 'G7-Pawn',
    initialPosition: 'G7',
    color: 'black',
    piece: <FontAwesomeIcon  size="4x" icon={faChessPawn} color='rgb(51 65 85)'/>
  },
  {
    name: 'B7-Pawn',
    initialPosition: 'B7',
    color: 'black',
    piece: <FontAwesomeIcon  size="4x" icon={faChessPawn} color='rgb(51 65 85)'/>
  },
  {
    name: 'D7-Pawn',
    initialPosition: 'D7',
    color: 'black',
    piece: <FontAwesomeIcon  size="4x" icon={faChessPawn} color='rgb(51 65 85)'/>
  },
  {
    name: 'F7-Pawn',
    initialPosition: 'F7',
    color: 'black',
    piece: <FontAwesomeIcon  size="4x" icon={faChessPawn} color='rgb(51 65 85)'/>
  },
  {
    name: 'H7-Pawn',
    initialPosition: 'H7',
    color: 'black',
    piece: <FontAwesomeIcon  size="4x" icon={faChessPawn} color='rgb(51 65 85)'/>
  },
  {
    name: 'A8-Rook',
    initialPosition: 'A8',
    color: 'black',
    piece: <FontAwesomeIcon  size="4x" icon={faChessRook} color='rgb(51 65 85)'/>
  },
  {
    name: 'H8-Rook',
    initialPosition: 'H8',
    color: 'black',
    piece: <FontAwesomeIcon  size="4x" icon={faChessRook} color='rgb(51 65 85)'/>
  },
  {
    name: 'C8-Bishop',
    initialPosition: 'C8',
    color: 'black',
    piece: <FontAwesomeIcon  size="4x" icon={faChessBishop} color='rgb(51 65 85)'/>
  },
  {
    name: 'F8-Bishop',
    initialPosition: 'F8',
    color: 'black',
    piece: <FontAwesomeIcon  size="4x" icon={faChessBishop} color='rgb(51 65 85)'/>
  },
  {
    name: 'B8-Knight',
    initialPosition: 'B8',
    color: 'black',
    piece: <FontAwesomeIcon  size="4x" icon={faChessKnight} color='rgb(51 65 85)'/>
  },
  {
    name: 'G8-Knight',
    initialPosition: 'G8',
    color: 'black',
    piece: <FontAwesomeIcon  size="4x" icon={faChessKnight} color='rgb(51 65 85)'/>
  },
  {
    name: 'E8-King',
    initialPosition: 'E8',
    color: 'black',
    piece: <FontAwesomeIcon  size="4x" icon={faChessKing} color='rgb(51 65 85)'/>
  },
  {
    name: 'D8-Queen',
    initialPosition: 'D8',
    color: 'black',
    piece: <FontAwesomeIcon  size="4x" icon={faChessQueen} color='rgb(51 65 85)'/>
  },
]

export default pieces