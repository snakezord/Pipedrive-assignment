import styled from 'styled-components'

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  background: #fff;

  margin: .25rem;
  padding: 1rem;
  border: 1px #dee2e6 solid;  
  
  &:hover{
    background: #f1f3f5;
  }  

  ${({isDragging}) => isDragging ? 
    `
    zoom: 1.02;
    box-shadow:
    0 2.8px 2.2px rgba(0, 0, 0, 0.034),
    0 6.7px 5.3px rgba(0, 0, 0, 0.048),
    0 12.5px 10px rgba(0, 0, 0, 0.06),
    0 22.3px 17.9px rgba(0, 0, 0, 0.072),
    0 41.8px 33.4px rgba(0, 0, 0, 0.086),
    0 100px 80px rgba(0, 0, 0, 0.12)
    ;    
    ` : ``
  }

  .summary {
    display: flex;
    flex-direction: column;
    align-items: flex-start;

    text-transform: capitalize;
    
    .name {      
      font-size: .9rem;
      color: #343a40;
    }

    .org {      
      display: flex;
      align-items: center;

      &-name {
        font-size: .8rem;
        color: #868e96; 
        margin-left: .3rem;
      }
    }
  }
  .pic {
    border-radius: 50%;
    height: 50px;    
  }
`