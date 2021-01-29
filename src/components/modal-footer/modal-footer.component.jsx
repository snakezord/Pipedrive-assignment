import { Wrapper } from './modal-footer.styles'

import Spinner from '../spinner'


const ModalFooter = ({ setShowModal, btnSecondaryText='Back', btnPrimary=true, handleSubmit, isFetching=false }) => {

  return (
    <Wrapper>
      <button className='btn-secondary' onClick={() => setShowModal(false)}>{btnSecondaryText}</button>
      {btnPrimary
      ? <button className='btn-primary'
          disabled={isFetching}
          onClick={() => handleSubmit()}>{isFetching ? <Spinner overlay={false} color='#fff'/> : 'Save'}</button>
      : null}   
    </Wrapper>
  )
}

export default ModalFooter