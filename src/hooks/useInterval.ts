import { useEffect, useRef } from "react";

/**
 * setInterval을 이용하여 일정시간마다 콜백함수를 실행시키는 hook입니다.
 * @param callback 일정 시간마다 실행될 콜백 함수
 * @param delay 콜백함수를 실행시킬 일정한 시간
 */
const useInterval = (callback: () => void, delay: number | null): void => {
  const savedCallback = useRef<(() => void) | null>(null);

  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  useEffect(() => {
    const executeCallback = () => {
      savedCallback.current && savedCallback.current();
    };

    if (delay !== null) {
      const timerId = setInterval(executeCallback, delay);
      return () => clearInterval(timerId);
    }
  }, [delay]);
};

export default useInterval;
