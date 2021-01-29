import styled from 'styled-components'

export const Main = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;  

  padding: 1rem;

  border-bottom: 2px #dee2e6 solid;

  .pic {    
    border-radius: 50%;    
    height: 5rem;
    margin-bottom: 1rem;
  }
  .name {
    text-transform: capitalize;
    font-size: .9rem;
    font-weight: 600;    
  }
  .number {
    font-size: .9rem;
    font-weight: 600;
    color: #42B560;
  }
`

export const Other = styled.ul`
  display: flex;
  flex-direction: column;
  margin: 1rem 0;
`