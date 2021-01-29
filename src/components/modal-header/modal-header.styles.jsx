import styled from 'styled-components'

export const Wrapper = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;

  background: #f1f3f5;

  border-bottom: 1px #dee2e6 solid;
  
  .header-label {
    font-size: 1rem;
    font-weight: 600;
  }
  .icon-container {
    display: flex;
    align-items: center;
    justify-content: center;

    padding: .1rem;
    border-radius: 4px;
    
    cursor: pointer;
    &:hover{                
      background: #e9ecef;
    }
  }
`