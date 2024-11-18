import { useState, useEffect } from 'react';

export const useScrollLock = () => {
  const [isLocked, setIsLocked] = useState(false);
  
  useEffect(() => {

    if (isLocked) {
      document.body.classList.add('no-scroll');
    } else {
      document.body.classList.remove('no-scroll');
    }
  }, [isLocked]);

  return setIsLocked;
};
