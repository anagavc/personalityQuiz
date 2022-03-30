import React, { useState, useEffect } from "react";
import AnswerButton from "../components/UI/Buttons/AnswerButton";
import PrimaryButton from "../components/UI/Buttons/PrimaryButton";
import Heading from "../components/UI/FontStyles/Heading";
import { useDispatch, useSelector } from "react-redux";
import { BodyParagraph } from "../components/UI/FontStyles/Paragraphs";
import { getQuestions } from "../actions/questions";

const Questions = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getQuestions());
  }, [dispatch]);

  // const { questions, isLoading } = useSelector((state) => state.question);
  const questions = [
    {
      questionText: "I feel most energetic and focused:",
      answerOptions: [
        {
          answerText: "During the afternoon",
          isCorrect: false,
        },
        { answerText: "Late at night", isCorrect: false },
        { answerText: "In the morning", isCorrect: true },
        { answerText: "In the early evening", isCorrect: true },
      ],
    },
    {
      questionText: "When I walk, I tend to do it:",
      answerOptions: [
        { answerText: "Fairly fast, with long steps", isCorrect: false },
        { answerText: "Fairly fast, with small steps", isCorrect: true },
        {
          answerText: "Less fast, head up, looking the world in the face",
          isCorrect: false,
        },
        { answerText: "Less fast, head down", isCorrect: false },
      ],
    },
    {
      questionText: "When you speak to people, you tend to:",
      answerOptions: [
        { answerText: "Stand with your arms folded", isCorrect: true },
        { answerText: "Have your hands clasped", isCorrect: false },
        {
          answerText: "Have one or both of your hands on your hips",
          isCorrect: false,
        },
        {
          answerText: "Touch or push the person to whom you are talking",
          isCorrect: false,
        },
      ],
    },
    {
      questionText: "When you find something really funny, you usually give:",
      answerOptions: [
        { answerText: "A big, appreciative laugh", isCorrect: false },
        { answerText: "A laugh, but not a loud one", isCorrect: false },
        { answerText: "A quiet chuckle", isCorrect: false },
        { answerText: "A sheepish smile", isCorrect: true },
      ],
    },
  ];
  const [activeQuestion, setActiveQuestion] = useState(0);
  const [showTrait, setShowTrait] = useState(false);
  const handleAnswerClick = () => {
    const nextQuestion = activeQuestion + 1;
    if (nextQuestion < questions.length) {
      setActiveQuestion(nextQuestion);
    } else {
      setShowTrait(true);
    }
  };
  return (
    <div className="flex justify-center flex-col px-8 lg:px-24  space-y-6 lg:mt-12">
      {showTrait ? (
        <>
          <Heading>Test result:</Heading>
          <BodyParagraph fontSize="text-lg">
            You are a loyal friend
          </BodyParagraph>
          <PrimaryButton path="/">Home</PrimaryButton>
        </>
      ) : (
        <>
          <Heading>{questions[activeQuestion].questionText}</Heading>
          <div className="flex flex-col">
            {questions[activeQuestion].answerOptions.map((answerOption) => (
              <AnswerButton
                id={activeQuestion}
                onClick={() => handleAnswerClick()}
              >
                {answerOption.answerText}
              </AnswerButton>
            ))}
          </div>
          <PrimaryButton path="/">End Quiz</PrimaryButton>
        </>
      )}
    </div>
  );
};

export default Questions;
