import { Component } from 'solid-js';
import { styled } from 'solid-styled-components';
import { DocumentLine, useDocumentContext } from './context';

export const Line: Component<{ line: DocumentLine }> = (props) => {
  const [, { update }] = useDocumentContext();

  return (
    <Editable
      contentEditable={props.line.editing}
      onInput={(e) => {
        update(props.line.line, { content: e.currentTarget.innerText ?? '' });
        // console.log(window.getSelection());
      }}
      onClick={() => update(props.line.line, { editing: true })}
    >
      {props.line.content}
    </Editable>
  );
};

const Editable = styled('div')`
  outline: none;
  width: 100%;
`;
