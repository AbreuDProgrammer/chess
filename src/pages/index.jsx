import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChessQueen } from '@fortawesome/free-solid-svg-icons'
import Layout from '@/components/layout'
import Table from '@/components/table'
import Button from '@/components/button'


export default function Home() {
  return (
    <Layout title='Chess'>

      <ButtonsRow/>

      <Table/>

      <FontAwesomeIcon icon={faChessQueen}/>

    </Layout>
  )
}

function ButtonsRow() {
  return (
    <div className='w-full h-16'>
      <Button>Start game</Button>
    </div>
  )
}