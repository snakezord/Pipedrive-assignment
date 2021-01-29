import React, {useEffect, useCallback } from 'react'
import { Background, Wrapper } from './modal.styles'
import { useSpring, animated } from 'react-spring'
//import { CUSTOM_FIELDS_KEYS } from '../../API/custom-fields.js'

export const Modal = ({ showModal, setShowModal, children }) => {  

  const animation = useSpring({
    config: {
      duration: 150,      
    },
    opacity: showModal ? 1 : .2,
    transform: showModal ? `translateY(-10%)` : `translateY(-100%)`
  })  

  const keyPress = useCallback(e => {
    if(e.key === 'Escape' && showModal) setShowModal(false)
  }, [showModal, setShowModal])

  useEffect(() => {
    document.addEventListener('keydown', keyPress)
    return () => document.removeEventListener('keydown', keyPress)
  }, [keyPress])
  

  // const childrenWithExtraProp = React.Children.map(children, child =>
  //   React.cloneElement(child, {
  //     setName,
  //     setOrg,
  //     setEmail,
  //     setPhone,
  //     setAssistant,
  //     setGroups,
  //     setLocation
  //   }))

  return showModal ? (
    <Background>
      <animated.div style={animation} >
        <Wrapper>          
          {children}                    
        </Wrapper>
      </animated.div>
    </Background>
  ) : null
}

export default Modal