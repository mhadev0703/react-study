import styled from 'styled-components';
import React from 'react';
import Circle from "./Circle";

function App() {
  return (
    <div>
      <Circle borderColor="yellow" bgColor="teal" />
      <Circle text="I'm here" bgColor="tomato" />
    </div>
  );
}

export default App;
