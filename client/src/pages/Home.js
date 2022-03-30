import React from "react";
import PrimaryButton, {
  UploadButton,
} from "../components/UI/Buttons/PrimaryButton";
import Heading from "../components/UI/FontStyles/Heading";
import { BodyParagraph } from "../components/UI/FontStyles/Paragraphs";
import heroImg from "../images/heroImg.png";
const Home = () => {
  return (
    <>
      <div className="items-center justify-center text-center px-4 lg:px-40">
        <Heading>Personality Test</Heading>
        <BodyParagraph fontSize="text-base">
          This personality test will help you determine the kind of friend you
          are to your friends and loved ones.
        </BodyParagraph>
      </div>
      <img src={heroImg} alt="personality" className="w-3/5 mx-auto" />
      <UploadButton path="/upload">Upload a new question</UploadButton>
      <PrimaryButton path="/question">Start the quiz</PrimaryButton>
    </>
  );
};

export default Home;
