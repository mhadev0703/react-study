import React, { useState } from 'react';
import { styled } from 'styled-components';

const Container = styled.div`
  background-color: ${props => props.theme.bgColor};
`;

const H1 = styled.h1`
  color: ${(props) => props.theme.textColor};
`;

interface DummyProps {
  text: string;
  active?: boolean;
}

function Dummy({ text, active = false }: DummyProps) {
  return <H1>{text}</H1>
}

function App() {
  const onClick = (event:React.MouseEvent<HTMLButtonElement>) => {
    
  };

  return (
    <Container>
      <Dummy active text="Hello" />
      <button onClick={onClick}>Click me</button> 
    </Container>
  );
}

export default App;
