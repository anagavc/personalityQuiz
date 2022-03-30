import React from "react";

const Heading = (props) => {
  return (
    <h1 className="font-heading text-cyan-800 font-bold text-3xl text-center">
      {props.children}
    </h1>
  );
};

export default Heading;
