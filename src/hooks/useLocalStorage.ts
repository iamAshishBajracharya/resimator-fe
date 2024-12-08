import { useState } from 'react';

function useLocalStorage<T>(key: string, initialValue: T) {
  // Try to get the stored value from localStorage or use the initial value
  const storedValue = localStorage.getItem(key);
  const parsedValue = storedValue ? JSON.parse(storedValue) : initialValue;
  
  const [value, setValue] = useState<T>(parsedValue);

  const setStoredValue = (newValue: T) => {
    // Save the new value to localStorage and update the state
    localStorage.setItem(key, JSON.stringify(newValue));
    setValue(newValue);
  };

  return [value, setStoredValue] as const;
}

export default useLocalStorage;
