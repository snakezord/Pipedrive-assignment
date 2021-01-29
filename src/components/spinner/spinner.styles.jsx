import styled from 'styled-components'

export const SpinnerOverlay = styled.div`
  height: 70vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const Animation = styled.div`
  width: ${({ overlay }) => overlay ? `3rem` : `1.5rem` };
  height: ${({ overlay }) => overlay ? `3rem` : `1.5rem` };
  border: 2px solid rgba(73, 80, 87, .6);
  border-radius: 50%;
  border-right-color: ${({ color }) => color};
  animation: spin .8s ease-in-out infinite;
  -webkit-animation: spin .8s ease-in-out infinite;
  @keyframes spin {
    to {
      -webkit-transform: rotate(360deg);
    }
  }
  @-webkit-keyframes spin {
    to {
      -webkit-transform: rotate(360deg);
    }
  }
`;