import React from "react";

const Count = (props) => {
  console.log(`Rendering ${props.text}`);
  return (
    <h2>
      {props.text} : {props.count}
    </h2>
  );
};

export default React.memo(Count);
