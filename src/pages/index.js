import Layout from '@/components/layout'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChessQueen } from '@fortawesome/free-solid-svg-icons'

export default function Home() {
  return (
    <>
      <Layout title='Chess'>
        <div className='text-black text-3xl'>
          <FontAwesomeIcon icon={faChessQueen}/>
        </div>
      </Layout>
    </>
  )
}
