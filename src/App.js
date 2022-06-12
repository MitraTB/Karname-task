import QuestionCard from "./components/QuestionCard";
import { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [questins, setQuestions] = useState([]);
  useEffect(() => {
    async function fetchQuestions() {
      let response = await axios.get("http://localhost:3000/questions");
      setQuestions(response.data);
    }
    fetchQuestions();
  }, []);
  const qestionCards = questins.map((data, index) => {
    return  <QuestionCard questionData={data} key={index}/>
  });
  return (
    <div className="container mx-auto">
      {questins && qestionCards}
    </div>
  );
}

export default App;
