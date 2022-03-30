import React from "react";

export const BodyParagraph = (props) => {
  return (
    <p className={`text-cyan-800 font-body mt-2 ${props.fontSize} text-center`}>
      {props.children}
    </p>
  );
};
