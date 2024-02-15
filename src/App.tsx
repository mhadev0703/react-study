import React from 'react';
import { styled } from 'styled-components';

const Container = styled.div`
  background-color: ${props => props.theme.bgColor};
`;

const H1 = styled.h1`
  color: ${(props) => props.theme.textColor};
`;
function App() {
  const onClick = (event:React.MouseEvent<HTMLButtonElement>) => {};

  return (
    <Container>
      <button onClick={onClick}>Click me</button> 
    </Container>
  );
}

export default App;
