import React, { createContext, ReactNode, useCallback, useContext, useState } from 'react';

interface Props {
  children?: ReactNode;
}

const QueryContext = createContext('');
const SetQueryContext = createContext<(value: string) => void>(() => {});

export const useQueryContext = () => {
  return useContext(QueryContext);
};

export const useSetQueryContext = () => {
  return useContext(SetQueryContext);
};

export const QueryProvider = ({ children }: Props) => {
  const [queryValue, setValue] = useState('');

  const setQueryValue = useCallback((value: string) => setValue(value), []);

  return (
    <QueryContext.Provider value={queryValue}>
      <SetQueryContext.Provider value={setQueryValue}>{children}</SetQueryContext.Provider>
    </QueryContext.Provider>
  );
};
