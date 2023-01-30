import {
  ContextProviderProps,
  createContextProvider,
} from '@solid-primitives/context';
import { createUniqueId } from 'solid-js';
import { createStore, SetStoreFunction } from 'solid-js/store';

export type DocumentLine = {
  line: number;
  content: string;
  editing: boolean;
};

export type DocumentState = {
  documentId: string;
  lines: DocumentLine[];
};

export type DocumentApi = {
  set: SetStoreFunction<DocumentState>;
  update: (id: number, data: Partial<DocumentLine>) => void;
};

interface DocumentProps extends ContextProviderProps {
  context?: (props: [DocumentState, DocumentApi]) => void;
  skipComputation?: boolean;
}

const contextFactory = (props: DocumentProps): [DocumentState, DocumentApi] => {
  const [state, set] = createStore<DocumentState>({
    documentId: `document-${createUniqueId()}`,
    lines: [{ line: 0, content: '', editing: true }],
  });

  const Api: DocumentApi = {
    set,
    update: (id: number, data: Partial<DocumentLine>) =>
      set(
        'lines',
        (i) => i.line == id,
        (i) => ({ ...i, ...data }),
      ),
  };

  if (!props.skipComputation) {
  }

  if (props.context) {
    props.context([state, Api]);
  }

  return [state, Api];
};

export const [DocumentContext, useDocumentContext] = createContextProvider(
  contextFactory,
  contextFactory({ skipComputation: true }),
);

// Document
