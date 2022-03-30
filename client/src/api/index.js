import axios from "axios";
const API = axios.create({
  baseURL: "https://personalityquizapp.herokuapp.com/",
});
export const getQuestions = () => API.get("/questions");
export const createQuestion = (newQuestion) =>
  API.post("/questions", newQuestion);
