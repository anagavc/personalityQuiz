import React from "react";

const AnswerButton = (props) => {
  return (
    <button
      key={props.id}
      onClick={props.onClick}
      className="border border-cyan-800 text-cyan-800 sm:px-8 lg:px-4 py-5  rounded-full mb-4 font-body text-base font-bold hover:bg-cyan-800 hover:text-white transition duration-300"
    >
      {props.children}
    </button>
  );
};

export default AnswerButton;
