import React from "react";

const Scroll = (subcomponent) => {
  return <div style={{overflowY:'scroll',height:'500px',border:"none"}}>{subcomponent.children}</div>;
};

export default Scroll;
