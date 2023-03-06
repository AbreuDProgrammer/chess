import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChessQueen } from '@fortawesome/free-solid-svg-icons'
import Layout from '@/components/layout'
import Table from '@/components/table'
import Button from '@/components/button'
import { useState } from 'react'


export default function Home() {
  
  const [started, gameStarted] = useState(false)

  function ButtonsRow() 
  {
    return (
      <div className='w-full h-16'>
        <Button onClick={StartGame}>Start game</Button>
      </div>
    )
  }

  function StartGame()
  {
    gameStarted(!started)
  }

  return (
    <Layout title='Chess'>

      <ButtonsRow/>
      
      <Table/>

      <FontAwesomeIcon icon={faChessQueen}/>

    </Layout>
  )
}