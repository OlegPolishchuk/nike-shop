import { SetStateAction, useCallback, useState } from 'react';

import { useLatest } from '@/common/hooks/useLatest';
import { localStorageWrapper, sessionStorageWrapper } from '@/services';

export function useLocalStorageState<T>(key: string, initialValue: T | (() => T)) {
  const [value, setValue] = useState(() => {
    const savedValue = localStorageWrapper.get<T>(key);

    if (typeof savedValue !== 'undefined') {
      return savedValue;
    }

    return isFunction(initialValue) ? initialValue() : initialValue;
  });

  const latestValue = useLatest(value);

  const updateValue = useCallback(
    (newValue: SetStateAction<T>) => {
      setValue(newValue);

      const actualValue = isFunction(newValue) ? newValue(latestValue.current) : newValue;

      localStorageWrapper.set(key, actualValue);
    },
    [key, latestValue],
  );

  return [value, updateValue] as const;
}

export function useSessionStorageState<T>(key: string, initialValue: T | (() => T)) {
  const [value, setValue] = useState(() => {
    const savedValue = sessionStorageWrapper.get<T>(key);
    if (typeof savedValue !== 'undefined') {
      return savedValue;
    }

    return isFunction(initialValue) ? initialValue() : initialValue;
  });

  const latestValue = useLatest(value);

  const updateValue = useCallback(
    (newValue: SetStateAction<T>) => {
      setValue(newValue);

      const actualValue = isFunction(newValue) ? newValue(latestValue.current) : newValue;

      sessionStorageWrapper.set(key, actualValue);
    },
    [key, latestValue],
  );

  return [value, updateValue] as const;
}

type AnyFunction = (...ars: any[]) => any;

function isFunction(value: unknown): value is AnyFunction {
  return typeof value === 'function';
}
