import { Wrapper, Main, Other } from './person-information.styles'
import Field from '../person-information-field'
import Avatar from 'react-avatar';
import { useMutation, useQueryClient } from 'react-query'
import { API } from '../../API/api.js'
import { CUSTOM_FIELDS_KEYS } from '../../API/custom-fields.js'

import ModalHeader from '../modal-header'
import ModalFooter from '../modal-footer'

const Information = ({ setShowModal, user, picture, clearIcon, headerLabel, btnPrimary }) => {

  const { id, name, org_name, phone, email } = user

  const queryClient = useQueryClient()
  
  const deletePerson = useMutation(() => API.delete(`/persons/${id}`), {
    onSuccess: () => {
      queryClient.invalidateQueries('persons')
      setShowModal(false)
    },
    onError: error => console.log(error)
  })
  
  return (
    <>
      <ModalHeader 
        clearIcon={clearIcon} 
        isLoading={deletePerson.isLoading} 
        handleClick={deletePerson.mutate} 
        headerLabel={headerLabel} 
        btnPrimary={btnPrimary}
      />
      <Wrapper>
        <Main>
          {picture 
          ? <img src={ picture } alt='profile' className='pic'/> 
          : <Avatar name={name} size={'5rem'} className='pic'/>}
          <span className='name'>{name}</span>
          <span className='number'>{phone[0].value}</span>
        </Main>
        <Other>
          <Field field='email' value={email[0].value}/>
          <Field field='Organization' value={org_name}/>
          <Field field='Assistant' value={user[CUSTOM_FIELDS_KEYS.assistant]}/>
          <Field field='Groups' value={user[CUSTOM_FIELDS_KEYS.groups]}/>
          <Field field='Location'
            value={user[`${CUSTOM_FIELDS_KEYS.location}_formatted_address`] 
              || user[CUSTOM_FIELDS_KEYS.location]}
            />
        </Other>
      </Wrapper>
      <ModalFooter setShowModal={setShowModal} btnPrimary={btnPrimary}/>
    </>
  )
}

export default Information