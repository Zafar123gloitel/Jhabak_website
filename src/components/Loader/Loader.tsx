import { useState, useCallback } from 'react';

function useLoading() {
  const [isLoading, setLoading] = useState(false);

  // Function to set loading state to true
  const startLoading = useCallback(() => {
    setLoading(true);
  }, []);

  // Function to set loading state to false
  const stopLoading = useCallback(() => {
    setLoading(false);
  }, []);

  return {
    isLoading,
    startLoading,
    stopLoading,
  };
}

export default useLoading;
