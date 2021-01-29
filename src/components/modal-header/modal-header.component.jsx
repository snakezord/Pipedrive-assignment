import { Wrapper } from './modal-header.styles'
import { MdClear, MdDelete } from "react-icons/md";

import Spinner from '../spinner'

const ModalHeader = ({ isLoading, handleClick, headerLabel, setShowModal, clearIcon=true }) => {

  return (
    <Wrapper> 
      <span className='header-label'>{headerLabel}</span>            
      <div className='icon-container'>
        {clearIcon 
        ? <MdClear size={20} onClick={() => setShowModal(false)}/>
        : isLoading 
          ? <Spinner overlay={false}/>
          : <MdDelete size={20} onClick={handleClick}/> 
        }
      </div>
    </Wrapper>
  )
}

export default ModalHeader