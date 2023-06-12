import React from "react";
const CounterButton = (props) => {
  console.log(`Rendering button`, props.children);
  return <button onClick={props.handleClick}>{props.children}</button>;
};

export default React.memo(CounterButton);
