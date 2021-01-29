import { useState } from 'react'
import { Wrapper } from './person.styles'
import { MdBusiness } from "react-icons/md";
import Avatar from 'react-avatar';
import { Draggable } from "react-beautiful-dnd";

import Modal from '../modal'
import Information from '../person-information'

const Person = (props) => {
  const [showModal, setShowModal] = useState(false)

  const { name, org_name, picture_id } = props
  const { id, index } = props

  const picture = picture_id?.pictures['128']

  return (
  <>
    <Draggable key={id} draggableId={String(id)} index={index}>
      {(provided, snapshot) => (
        <Wrapper 
          ref={provided.innerRef} 
          {...provided.draggableProps} 
          {...provided.dragHandleProps}
          isDragging={snapshot.isDragging}        
          onClick={() => setShowModal(modal => !modal)}
        >
          <div className='summary'>
            <span className='name'>{ name }</span>
            <div className='org'>
              <MdBusiness size={16} fill='#495057' className='icon'/>
              <span className='org-name'>{ org_name }</span>
            </div>
          </div>
          {picture 
          ? <img src={ picture } alt='profile' className='pic'/> 
          : <Avatar name={name} size={50} className='pic'/>}
        </Wrapper>
      )}
    </Draggable> 
    <Modal showModal={showModal} setShowModal={setShowModal} >
      <Information setShowModal={setShowModal} user={props} picture={picture} clearIcon={false} headerLabel='Person Information' btnPrimary={false}/>
    </Modal>     
  </>
  )
}

export default Person