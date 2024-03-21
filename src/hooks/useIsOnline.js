import { useEffect, useState } from "react";

export function useIsOnline() {
  const [isOnline, setIsOnline] = useState(null);

  function handleIsOnline(status) {
    setIsOnline(status);
  }

  useEffect(() => {
    handleIsOnline(true);
  });
  return isOnline;
}
