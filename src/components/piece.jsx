import { useState } from 'react'

export default function Piece({name, initialPosition, piece, color}) {

  const [isAlive, setAlive] = useState(true)

  const [position, setPosition] = useState(initialPosition)

  return (
    <div>{piece}</div>
  )
}