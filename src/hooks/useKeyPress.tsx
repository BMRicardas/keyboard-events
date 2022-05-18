import { useState } from "react";
import useEventListener from "./useEventListener";

interface KeyInfo {
  code?: string;
  key?: string;
  keyCode?: number;
  shift: boolean;
  ctrl: boolean;
  alt: boolean;
}

const useKeyPress = (): KeyInfo | null => {
  const [keyInfo, setKeyInfo] = useState<KeyInfo | null>(null);

  const handleKeyPress = (event: KeyboardEvent) => {
    event.preventDefault();
    setKeyInfo({
      key: event.key,
      keyCode: event.keyCode,
      code: event.code,
      shift: event.shiftKey,
      ctrl: event.ctrlKey,
      alt: event.altKey,
    });
  };

  const handleKeyUp = (event: KeyboardEvent) => {
    event.preventDefault();
    if (!keyInfo) {
      return;
    }

    setKeyInfo((prevState) => {
      return {
        ...prevState,
        shift: event.shiftKey,
        ctrl: event.ctrlKey,
        alt: event.altKey,
      };
    });
  };

  useEventListener("keydown", handleKeyPress);
  useEventListener("keyup", handleKeyUp);

  return keyInfo;
};

export default useKeyPress;
