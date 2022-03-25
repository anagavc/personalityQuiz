import React from "react";
import heroImg from "../images/heroImg.png";
const Home = () => {
  return (
    <div className="flex flex-col">
      <header className="bg-cyan-800 text-white font-bold text-center py-4 px-4 font-heading text-xl">
        Quizfaxt personality test
      </header>
      <main className="bg-cyan-50 h-screen flex">
        <div className="bg-cyan-800  rounded-2xl  py-12 h-4/5 my-auto flex flex-col justify-between mx-auto w-4/5">
          <div className="mx-auto text-center">
            <h1 className="font-heading text-white font-bold text-3xl">
              Personality Test
            </h1>
            <p className="text-white font-body mt-2 text-base">
              This personality test will help you determine the kind of friend
              you are to your friends and loved ones.
            </p>
          </div>
          <img src={heroImg} alt="personality" className="w-3/5 mx-auto" />
          <button className="bg-cyan-50 text-cyan-800 px-12 py-4 w-2/5 mx-auto mb-8 font-body text-base font-bold hover:bg-cyan-100 hover:text-slate-600 transition duration-300">
            Start test
          </button>
        </div>
      </main>
      <footer className="bg-cyan-800 text-white font-body py-4 text-center text-sm">
        {" "}
        Made with love by anagavc for Teamway
      </footer>
    </div>
  );
};

export default Home;
