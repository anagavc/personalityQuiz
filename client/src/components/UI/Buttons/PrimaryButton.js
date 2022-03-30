import React from "react";
import { NavLink } from "react-router-dom";

const PrimaryButton = (props) => {
  return props.path ? (
    <NavLink
      to={{ pathname: props.path }}
      className="bg-cyan-800 text-white px-12 py-4 w-4/5 mx-auto mb-8 text-center font-body text-base font-bold hover:bg-cyan-600 hover:text-white transition duration-300"
    >
      {props.children}
    </NavLink>
  ) : (
    <button className="bg-cyan-800 text-white px-12 py-4 w-5/6 mx-auto mb-8 text-center font-body text-base font-bold hover:bg-cyan-600 hover:text-white transition duration-300">
      {props.children}
    </button>
  );
};
export const UploadButton = (props) => {
  return (
    <NavLink
      to={{ pathname: props.path }}
      className="text-cyan-800 px-12 py-4 w-4/5 mx-auto mb-4 text-center font-body text-base font-bold hover:bg-cyan-600 hover:text-white transition duration-300"
    >
      {props.children}
    </NavLink>
  );
};
export default PrimaryButton;
