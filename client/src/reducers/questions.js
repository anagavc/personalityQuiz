import {
  START_LOADING,
  END_LOADING,
  FETCH_ALL,
  CREATE,
} from "../constants/actionTypes";

const question = (
  state = { isLoading: true, questions: [], question: [] },
  action
) => {
  switch (action.type) {
    case START_LOADING:
      return { ...state, isLoading: true };
    case END_LOADING:
      return { ...state, isLoading: false };

    case FETCH_ALL:
      return { ...state, questions: action.payload.data };
    case CREATE:
      return { ...state, question: action.payload };
    default:
      return state;
  }
};
export default question;
