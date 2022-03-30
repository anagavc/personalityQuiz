import React from "react";

const Input = (props) => {
  return (
    <div>
      <label
        className="text-cyan-800 text-base font-bold font-heading"
        htmlFor="question"
        // key={Math.random()}
      >
        {props.label}
      </label>
      <input
        // key={Math.random()}
        id={props.label}
        type="text"
        value={props.value}
        placeholder={props.placeholder}
        onChange={props.onChange}
        name={props.name}
        className="px-6 py-2 w-full  rounded focus:outline-none focus:border-cyan-800 focus:ring-cyan-800 focus:ring-1 transition duration-300"
      />
    </div>
  );
};

export default Input;
