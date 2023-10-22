import React, { useLayoutEffect, useRef } from 'react';

export const useLatest = <_, T>(value: T) => {
  const valueRef = useRef(value);

  useLayoutEffect(() => {
    valueRef.current = value;
  }, [value]);

  return valueRef;
};
