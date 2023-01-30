import { Component, For } from 'solid-js';
import { styled } from 'solid-styled-components';
import { useDocumentContext } from './context';
import { Line } from './line';

export const Editor: Component = () => {
  const [document] = useDocumentContext();

  return (
    <Page>
      <For each={document.lines}>{(line) => <Line line={line} />}</For>
    </Page>
  );
};

const Page = styled('div')`
  width: 70vw;
  background-color: whitesmoke;
`;
