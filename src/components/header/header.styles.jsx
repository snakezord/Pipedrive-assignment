import styled from 'styled-components'

export const Wrapper = styled.header`
  width: 100vw;
  min-height: 2rem;
  
  background: #26292C;

  display: flex;  
  align-items: center;  

  .btn-primary {
    min-height: 2rem;
    margin-left: 1rem;
    padding: 0 .5rem;
    background: #42B560;

    font-size: 1rem;
    color: #ffffff;

    &:hover {
      cursor: pointer;
      background: #42B560E6;
    }
  }
`