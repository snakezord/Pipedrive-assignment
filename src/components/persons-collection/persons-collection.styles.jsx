import styled from 'styled-components'

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;

  .collection-header {
    display: flex;
    padding: 1rem;    
    border-bottom: 1px #dee2e6 solid;

    .title {
      font-size: 1rem;
      margin-right: 2rem;
    }    
  }

  .collection {
      display: flex;
      flex-direction: column;
      margin: .5rem;
  }
`