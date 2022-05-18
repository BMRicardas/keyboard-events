import { useEffect } from "react";

const useEventListener = (eventType: string, eventListener: any): void => {
  useEffect(() => {
    window.addEventListener(eventType, eventListener);

    return () => {
      window.removeEventListener(eventType, eventListener);
    };
  }, [eventListener, eventType]);
};

export default useEventListener;
