import styled from 'styled-components'

export const Background = styled.div`  
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;  

  background: #00000080;

  display: flex;
  justify-content: center;
  align-items: center;
`

export const Wrapper = styled.div`
  background: #fff;

  min-width: 20rem;
  z-index: 10;

  display: flex;
  flex-direction: column;


  & > * {
    padding: 1rem;
  }  

  .content {
    display: flex;
    flex-direction: column;
    align-items: center;     

    border-bottom: 1px #dee2e6 solid;

    & > * {
      width: 100%;
    }

  }
`
