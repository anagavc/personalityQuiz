import mongoose from "mongoose";
const Schema = mongoose.Schema;
const questionSchema = new Schema({
  question: String,
  option1: String,
  option2: String,
  option3: String,
  option4: String,
});
export default mongoose.model("Question", questionSchema);
