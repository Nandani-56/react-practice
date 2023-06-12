import { useCallback, useMemo, useState } from "react";

const UseMemoExample = () => {
  const [count, setCount] = useState(0);
  const [count2, setCount2] = useState(0);

  const incrementCount = () => {
    setCount((count) => count + 1);
  };

  const incrementCountTwo = () => {
    setCount2((count2) => count2 + 1);
  };

  //useMemo return a value
  const isEven = useMemo(() => {
    let i = 0;
    while (i < 1000000000) i++;
    return count % 2 === 0;
  }, [count]);

  //useCallback returns a function
  const isOdd = useCallback(() => {
    let i = 0;
    while (i < 10000) i++;
    return count % 2 === 0;
  }, [count]);

  // console.log(isEven, "even");
  // console.log(isOdd, "odd");

  return (
    <div>
      <p>
        {count} : {isEven ? "even" : "odd"}
      </p>
      <button onClick={incrementCount}>Increment Count</button>
      <p>{count2}</p>
      <button onClick={incrementCountTwo}>Increment Count</button>
    </div>
  );
};

export default UseMemoExample;
