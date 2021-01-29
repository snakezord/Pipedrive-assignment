import { Wrapper } from './form-input.styles'

const Input = ({ name, register }) => {
  return (
    <Wrapper>
      <span className='input-description'>{name}</span>
      <input className='input-text' ref={register} type="text" name={name}/>
    </Wrapper>
  )
}

export default Input