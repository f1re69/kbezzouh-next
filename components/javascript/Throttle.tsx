import React from "react";

interface ThrottleProps {
  func: () => void;
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
  let timeout: NodeJS.Timeout | null;
  let previous = 0;

  const throttledFunction = function (this: typeof Throttle) {
    const now: number = new Date().getTime();
    if (!previous && !leading) previous = now;
    const remaining = wait - (now - previous);
    if (remaining <= 0) {
      if (timeout !== null) {
        clearTimeout(timeout);
        timeout = null;
      }
      previous = now;
      func.apply(this);
    } else if (!timeout && trailing) {
      timeout = setTimeout(function (this: typeof Throttle) {
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
