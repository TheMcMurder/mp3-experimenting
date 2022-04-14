import React, { createContext } from 'react';
import { useInterpret } from '@xstate/react';
import { fileMetadataMachine } from './state-machine';

export const GlobalStateContext = createContext({});

export const GlobalStateProvider = (props) => {
  const fileMetadataService = useInterpret(fileMetadataMachine);

  return (
    <GlobalStateContext.Provider value={{ fileMetadataService }}>
      {props.children}
    </GlobalStateContext.Provider>
  );
};
