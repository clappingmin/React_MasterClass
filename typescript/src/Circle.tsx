import { useState } from 'react';
import styled from 'styled-components';

interface ContainerProps {
  bgColor: string;
  borderColor: string;
}

const Container = styled.div<ContainerProps>`
  width: 200px;
  height: 200px;
  background-color: ${(props) => props.bgColor};
  border-radius: 50%;
  border: 10px solid ${(props) => props.borderColor}; // 선택적이 아님
`;

interface CircleProps {
  // TypeScript에게 object shape을 설명해준다.
  bgColor: string; // required
  borderColor?: string; // optional
  text?: string;
}

function Circle({ bgColor, borderColor, text = 'default text' }: CircleProps) {
  const [counter, setCounter] = useState<number | string>(0);

  return (
    <Container bgColor={bgColor} borderColor={borderColor ?? 'yellow'}>
      {text}
    </Container>
  );
}

export default Circle;
