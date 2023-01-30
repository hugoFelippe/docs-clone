import type { Component } from 'solid-js';
import { styled } from 'solid-styled-components';
import { DocumentContext } from './document/context';
import { Editor } from './document/editor';

const App: Component = () => {
  return (
    <Wrapper>
      <DocumentContext>
        <Editor />
      </DocumentContext>
    </Wrapper>
  );
};

const Wrapper = styled('div')`
  display: flex;
  justify-content: center;
  background-color: lightblue;
  width: 100%;
  min-height: 100vh;
  overflow: auto;
  padding-top: 50px;
`;

export default App;
