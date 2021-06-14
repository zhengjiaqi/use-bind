import {useState} from 'react';

export interface IBind<T> {
  value: T;
}

export function useBind<T>(initialValue: T): IBind<T> {
  const [value, setValue] = useState(initialValue);
  return {
      get value() {
          return value;
      },
      set value(val) {
          setValue(val);
      },
  };
}