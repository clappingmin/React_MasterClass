import styled, { keyframes } from 'styled-components';

const Wrapper = styled.div`
  display: flex;
`;

const rotationAnimation = keyframes`
  0% {
    transform: rotate(0deg);
    border-radius: 0px;
  } 
  50% {
    transform: rotate(360deg);
    border-radius: 100px;
  }
  100% {  
    transform: rotate(0deg);
    border-radius: 0px;
  }
`;

const Emoji = styled.span`
  font-size: 36px;
`;

const Box = styled.div`
  background-color: tomato;
  width: 100px;
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  animation: ${rotationAnimation} 1s linear infinite;

  ${Emoji} {
    &:hover {
      font-size: 100px;
    }
  }
`;

function App() {
  return (
    <Wrapper as="header">
      <Box>
        <Emoji>🤩</Emoji>
      </Box>
    </Wrapper>
  );
}

export default App;
