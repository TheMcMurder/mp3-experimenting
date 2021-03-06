import React, { useContext, useMemo } from 'react';
import { useActor, useSelector } from '@xstate/react';
import { GlobalStateContext } from '../globalStateContext.jsx'


export function useMetadataState () {
  const globalServices = useContext(GlobalStateContext);
  return useActor(globalServices.fileMetadataService);
}

export function useFileMetadataServiceSend() {
  const globalServices = useContext(GlobalStateContext)
  return globalServices.fileMetadataService.send
}

export function usePartMetadataState (selectorFn) {
  const globalServices = useContext(GlobalStateContext);
  return useSelector(globalServices.fileMetadataService, selectorFn)
}

export function useMetadataServiceContext () {
  return usePartMetadataState(metadataServiceContextAccessor)
}

export function isOnState(stateToCheck) {
  const selector = useMemo(() => {
    return (state) => state.matches(stateToCheck)
  }, [stateToCheck])
  return usePartMetadataState(selector)
}

function metadataServiceContextAccessor(state) {
  return state.context
}
