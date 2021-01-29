import styled from 'styled-components'

export const Wrapper = styled.footer`
  display: flex;
  align-items: center;
  justify-content: flex-end;

  background: #f1f3f5;

  padding: .5rem 1rem;

  .btn-primary {
    display: flex;
    align-items: center;
    justify-content: center;
    
    min-height: 2rem;
    min-width: 4rem;
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

  .btn-secondary {
    min-height: 2rem; 
    padding: .5rem 1.5rem;
    border: 1px #dee2e6 solid;      
    cursor: pointer;
    background: #fff;
    &:hover{
      background: #e9ecef;
    }
  }
`