export const throttle = <T extends unknown[]>(
  func: (...args: T) => void,
  ms: number,
) => {
  let throttled = false;
  return (...args: T) => {
    if (!throttled) {
      throttled = true;
      setTimeout(() => {
        func(...args);
        throttled = false;
      }, ms);
    }
  };
};
