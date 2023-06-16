import { useCallback, useState } from "react";
import Count from "./count";
import CounterButton from "./counterButton";
import Title from "./title";

const UseCallBackExample = () => {
  const [age, setAge] = useState(10);
  const [salary, setSalary] = useState(1000);

  // const incrementAge = useCallback(() => {
  //   setAge((age) => age + 1);
  // }, [age]);

  // const incrementSalary = useCallback(() => {
  //   setSalary((salary) => salary + 1000);
  // }, [salary]);

  const incrementSalary = () => {
    setSalary((salary) => salary + 1000);
  };

  const incrementAge = () => {
    setAge((age) => age + 10);
  };
  return (
    <div>
      <Title />
      <Count text="Age" count={age} />
      <CounterButton handleClick={incrementAge}>Increment Age</CounterButton>
      <Count text="Salary" count={salary} />
      <CounterButton handleClick={incrementSalary}>
        Increment Salary
      </CounterButton>
    </div>
  );
};

export default UseCallBackExample;
