import React from "react";

interface ThrottleProps {
  func: (...args: unknown[]) => void;
  wait: number;
  leading?: boolean;
  trailing?: boolean;
}

const Throttle: React.FC<ThrottleProps> = ({
  func,
  wait,
  leading = false,
  trailing = false,
}) => {
  const throttledFunction = function (this: HTMLElement, ...args: unknown[]) {
    let timeout: NodeJS.Timeout | null = null;
    let previous = 0;

    const invokeFunc = function () {
      previous = new Date().getTime();
      timeout = null;
      func.apply(this, args);
    };

    const shouldInvoke = function (now: number) {
      if (!previous && !leading) previous = now;
      const remaining = wait - (now - previous);
      return leading || (remaining <= 0 && remaining > -wait);
    };

    return function (this: HTMLElement) {
      const now = new Date().getTime();
      if (shouldInvoke(now)) {
        if (timeout) {
          clearTimeout(timeout);
          timeout = null;
        }
        previous = now;
        func.apply(this, args);
      } else if (!timeout && trailing) {
        timeout = setTimeout(invokeFunc.bind(this), wait);
      }
    };
  };

  return <ThrottleWrapper throttledFunction={throttledFunction} />;
};

interface ThrottleWrapperPropos {
  throttledFunction: () => void;
}

const ThrottleWrapper: React.FC<ThrottleWrapperPropos> = ({
  throttledFunction,
}) => <></>;

export default Throttle;
