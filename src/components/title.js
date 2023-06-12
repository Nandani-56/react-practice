import React, { useEffect } from "react";

const Title = () => {
  useEffect(() => {
    console.log("Title Called!!");
  });
  return <h3>UseCallBackExample</h3>;
};

export default React.memo(Title);
