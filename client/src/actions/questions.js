import * as api from "../api";
import {
  START_LOADING,
  END_LOADING,
  FETCH_ALL,
  CREATE,
} from "../constants/actionTypes";
export const getQuestions = () => async (dispatch) => {
  try {
    dispatch({ type: START_LOADING });
    const { data } = await api.getQuestions();
    dispatch({ type: FETCH_ALL, payload: data });
    console.log("jajk");

    dispatch({ type: END_LOADING });
  } catch (error) {
    console.log(error);
  }
};

export const createQuestion = (question, navigate) => async (dispatch) => {
  try {
    dispatch({ type: START_LOADING });
    const { data } = await api.createQuestion(question);
    console.log(question);
    navigate("/");
    dispatch({ type: CREATE, payload: data });
    dispatch({ type: END_LOADING });
  } catch (error) {
    console.log(error);
  }
};
