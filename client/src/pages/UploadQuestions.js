import React, { useState } from "react";
import PrimaryButton, {
  UploadButton,
} from "../components/UI/Buttons/PrimaryButton";
import { useDispatch } from "react-redux";
import { createQuestion } from "../actions/questions";
import { useNavigate } from "react-router-dom";
import Heading from "../components/UI/FontStyles/Heading";

// import { BodyParagraph } from "../components/UI/FontStyles/Paragraphs";
import Input from "../components/UI/Input/Input";

const UploadQuestions = () => {
  const initialState = {
    question: "",
    option1: "",
    option2: "",
    option3: "",
    option4: "",
  };
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [details, setDetails] = useState(initialState);
  const uploadQuestion = (e) => {
    e.preventDefault();
    console.log(details);
    dispatch(createQuestion(details, navigate));
  };

  const elements = [
    {
      label: "Question",
      placeholder: "Enter a question",
      name: "question",
      value: details.question,
      onChange: (e) =>
        setDetails({ ...details, [e.target.name]: e.target.value }),
    },
    {
      label: "Option 1",
      placeholder: "Enter an option",
      value: details.option1,
      name: "option1",
      onChange: (e) =>
        setDetails({ ...details, [e.target.name]: e.target.value }),
    },
    {
      label: "Option 2",
      placeholder: "Enter an option",
      value: details.option2,
      name: "option2",
      onChange: (e) =>
        setDetails({ ...details, [e.target.name]: e.target.value }),
    },
    {
      label: "Option 3",
      placeholder: "Enter an option",
      name: "option3",
      value: details.option3,
      onChange: (e) =>
        setDetails({ ...details, [e.target.name]: e.target.value }),
    },
    {
      label: "Option 4",
      placeholder: "Enter an option",
      name: "option4",
      value: details.option4,
      onChange: (e) =>
        setDetails({ ...details, [e.target.name]: e.target.value }),
    },
  ];
  return (
    <div>
      <Heading>Upload a personality question</Heading>
      <form
        className="flex flex-col justify-center px-8 w-full mx-auto my-8 space-y-4"
        onSubmit={uploadQuestion}
      >
        {elements.map((element) => (
          <Input
            label={element.label}
            placeholder={element.placeholder}
            name={element.name}
            value={element.value}
            onChange={element.onChange}
          />
        ))}
        <UploadButton path="/">Back</UploadButton>
        <PrimaryButton type="submit">Upload</PrimaryButton>
      </form>
    </div>
  );
};

export default UploadQuestions;
