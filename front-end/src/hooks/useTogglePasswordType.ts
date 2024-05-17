import { useState } from 'react';

export const useTogglePasswordType = () => {
  const [type, setType] = useState<'text' | 'password'>('password');

  return {
    passwordType: type,
    togglePasswordType() {
      if (type === 'password') setType('text');
      else setType('password');
    },
  };
};
