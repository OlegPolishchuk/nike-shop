import React, { createContext, ReactNode, useContext } from 'react';

import { usePreviousRoute } from '@/common/hooks/usePreviousRoute';

interface Props {
  children?: ReactNode;
}

const PrevRouteContext = createContext('');

export const usePrevRoute = () => useContext(PrevRouteContext);

export const PrevRouteProvider = ({ children }: Props) => {
  const previousRoute = usePreviousRoute();

  // const [prevRoute, setPrevRoute] = useState(previousRoute);
  // console.log('previousRoute =', previousRoute);

  return <PrevRouteContext.Provider value={previousRoute}>{children}</PrevRouteContext.Provider>;
};
