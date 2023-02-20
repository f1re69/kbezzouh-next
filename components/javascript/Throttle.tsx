import React, { useRef } from "react";

interface ThrottleProps {
  func: (...args: any[]) => void;
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
  let timeout: NodeJS.Timeout | null = null;
  let previous: number = 0;

  const throttledFunction = function (this: any) {
    let now: number = new Date().getTime();
    if (!previous && !leading) previous = now;
    let remaining = wait - (now - previous);
    if (remaining <= 0) {
      if (timeout !== null) {
        clearTimeout(timeout);
        timeout = null;
      }
      previous = now;
      func.apply(this);
    } else if (!timeout && trailing) {
      timeout = setTimeout(function (this: any) {
        previous = new Date().getTime();
        timeout = null;
        func.apply(this);
      }, remaining);
    }
  };

  return <ThrottleWrapper throttledFunction={throttledFunction} />;
};

const ThrottleWrapper = (props: any) => <></>;

export default Throttle;
