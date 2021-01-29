import { Wrapper } from './person-information-field.styles'

const PersonField = ({ field, value }) => {
  return (
    <Wrapper>
      <div className='field-container'>
        <span className='field'>{field}</span>
      </div>
      <div className='value-container'>
        <span className='value'>{value}</span>
      </div>
    </Wrapper>
  )
}

export default PersonField