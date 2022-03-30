import React from "react";

const Layout = (props) => {
  return (
    <main className="lg:bg-cyan-800 bg-cyan-100 flex flex-col justify-center items-center min-h-screen">
      <div className="lg:bg-cyan-100  rounded-2xl  lg:py-10 w-full lg:w-3/5 h-4/5 lg:px-12 flex flex-col">
        {props.children}
      </div>
    </main>
  );
};

export default Layout;
