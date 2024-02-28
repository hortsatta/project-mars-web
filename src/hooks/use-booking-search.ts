import { useCallback } from 'react';

type Result = {
  handleSubmit: () => Promise<null>;
};

export function useBookingSearch(): Result {
  const handleSubmit = useCallback(async () => null, []);

  return {
    handleSubmit,
  };
}
