import styled from 'styled-components'

export const Wrapper = styled.label`
  display: flex;
  flex-direction: column;
  
  .input-description {
    margin: .5rem 0;
    font-size: .8rem;      
    color: #868e96;
    text-transform: capitalize;
  }
  .input-text {      
    padding: .4rem;    
    font-size: .8rem;
    &:focus{        
      outline: none;
      border: 1px #42B560 solid;        
    }
  }
`