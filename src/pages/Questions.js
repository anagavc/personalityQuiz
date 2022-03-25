import React from "react";

const Questions = () => {
  return (
    <main className="bg-cyan-50 h-screen flex">
      <div className="bg-cyan-800  rounded-2xl px-24  flex flex-col h-4/5 justify-center  my-auto py-16 mx-auto w-4/5">
        <h1 className="font-heading text-white font-bold text-3xl text-center mb-24">
          When you are stressed out, what do you do?
        </h1>
        <div className="flex flex-wrap justify-between">
          <button className="border border-cyan-50 text-cyan-50 px-12 py-4 w-2/5 rounded-full mb-8 font-body text-base font-bold hover:bg-cyan-50 hover:text-cyan-800 transition duration-300">
            Sleep
          </button>
          <button className="border border-cyan-50 text-cyan-50 px-12 py-4 w-2/5 rounded-full mb-8 font-body text-base font-bold hover:bg-cyan-50 hover:text-cyan-800 transition duration-300">
            Sleep
          </button>
          <button className="border border-cyan-50 text-cyan-50 px-12 py-4 w-2/5 rounded-full mb-8 font-body text-base font-bold hover:bg-cyan-50 hover:text-cyan-800 transition duration-300">
            Sleep
          </button>
          <button className="border border-cyan-50 text-cyan-50 px-12 py-4 w-2/5 rounded-full mb-8 font-body text-base font-bold hover:bg-cyan-50 hover:text-cyan-800 transition duration-300">
            Sleep
          </button>
        </div>
      </div>
    </main>
  );
};

export default Questions;
