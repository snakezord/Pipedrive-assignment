//import { useState } from 'react'
import { useForm } from "react-hook-form";
import { Form } from './form.styles'
import { useQuery, useMutation, useQueryClient } from 'react-query'
import { API } from '../../API/api.js'
import { CUSTOM_FIELDS_KEYS } from '../../API/custom-fields.js'

import ModalFooter from '../modal-footer'
import ModalHeader from '../modal-header'
import Input from '../form-input'
import Select from '../form-select'

const CreatePersonForm = ({ setShowModal, headerLabel, btnSecondaryText }) => { 

  const { register, handleSubmit, errors } = useForm()

  const getOrganizations = useQuery('organizations', () => API.get('/organizations'), {
    //onSuccess: data => console.log('organizations: ', data.data),
    onError: error => console.log(error)
  })
    
  const queryClient = useQueryClient() 
  const cachedPersons = queryClient.getQueryData('persons')
  //console.log(cachedPersons)
  
  const createPerson = useMutation(newPerson => API.post('/persons', newPerson), {
    onSuccess: () => {
      queryClient.invalidateQueries('persons')
      setShowModal(false)
    },
    onError: error => console.log(error)
  })  
  
  const onSubmit = handleSubmit(data => createPerson.mutate({
    name: data.name,
    phone: data.phone,
    email: data.email,
    org_id: data.organization,
    [CUSTOM_FIELDS_KEYS.assistant]: data.assistant,
    [CUSTOM_FIELDS_KEYS.groups]: data.groups,
    [CUSTOM_FIELDS_KEYS.location]: data.location,
  }))

  return (
    <>
      <ModalHeader setShowModal={setShowModal} headerLabel={headerLabel} />
      <Form>
        <Input name='name' isFetching={'todo'} register={register({ required: true })} />
        {errors.name && <span style={{color: 'red'}}>This field is required</span>}
        <Select 
          data={getOrganizations.data} 
          isFetching={getOrganizations.isFetching}
          isSuccess={getOrganizations.isSuccess}
          register={register}
          label='organization'
        />
        <Input name='email' register={register}/>
        <Input name='phone' register={register}/>
        <Select 
          data={cachedPersons} 
          register={register}
          label='assistant'
        />
        <Input name='groups' register={register}/>
        <Input name='location' register={register}/>
      </Form>
      <ModalFooter
        setShowModal={setShowModal} 
        handleSubmit={onSubmit}
        isFetching={createPerson.isLoading}
        btnSecondaryText={btnSecondaryText}/>
    </>
  ) 
}

export default CreatePersonForm