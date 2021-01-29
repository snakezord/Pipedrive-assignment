import { Wrapper } from './form-select.styles'

import Spinner from '../spinner'

const Select = ({ data, isFetching=false, isSuccess=true, register, label }) => {

  return (
    <Wrapper >
      <span className='input-description'>{label}</span>
      {isFetching ? <Spinner overlay={false} /> : 
      <select
        className='input-text' 
        ref={register}
        name={label}
      >
        {
          isSuccess 
          ? data.data.data.map(data => <option key={data.id} value={label==='organization' ? data.id : data.name}>{data.name}</option>)
          : null
        }
      </select>}
    </Wrapper>
  )
}

export default Select