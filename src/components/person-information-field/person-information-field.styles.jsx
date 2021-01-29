import styled from 'styled-components'

export const Wrapper = styled.li`
  display: flex; 
  align-items: center;

  margin: .5rem 0;

  .field-container {
    width: 35%;
    margin-right: 1.5rem;
    .field {
      float: right;
      font-size: .8rem;
      font-weight: 600;
      color: #343a40;
      text-transform: capitalize;    
    }
  }

  .value-container {
    width: 65%;
    .value {
      font-size: .7rem;
      font-weight: 500;
      color: #868e96;
    }
  }

`