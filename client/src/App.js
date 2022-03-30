import Home from "./pages/Home";
import Questions from "./pages/Questions";
import { Route, Routes } from "react-router-dom";
import UploadQuestions from "./pages/UploadQuestions";
import Layout from "./components/Layout";
function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/question" element={<Questions />} />
        <Route path="/upload" element={<UploadQuestions />} />
      </Routes>
    </Layout>
  );
}

export default App;
