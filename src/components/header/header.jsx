import { useState } from 'react'
import { ReactComponent as Logo } from '../../assets/logo.svg'
import { Wrapper } from './header.styles'

import Modal from '../modal'
import Form from '../form'

const Header = () => {
  const [showModal, setShowModal] = useState(false)
  return (
    <>
      <Wrapper>
        <Logo fill='#fff' height={50}/>
        <button className='btn-primary' onClick={() => setShowModal(modal => !modal)}>+ Person</button>        
      </Wrapper>
      <Modal showModal={showModal} setShowModal={setShowModal} >
        <Form setShowModal={setShowModal} headerLabel='Add person' btnSecondaryText='Cancel'/>
      </Modal>
    </>
  )
}

export default Header