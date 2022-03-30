import Question from "../models/question.js";

export const createQuestion = async (req, res) => {
  const question = req.body;
  const newQuestion = new Question({ ...question });
  try {
    await newQuestion.save();
    res.status(201).json(newQuestion);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};

export const getQuestions = async (req, res) => {
  try {
    const questions = await Question.find();

    res.status(200).json({
      data: questions,
    });
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};
