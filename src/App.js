import axios from "axios";
import { useEffect, useState } from "react";
import { questionList } from "./Api/endpoints";
import {QuestionCard} from "./components";
import api from "./utils/api_instance";

function App() {
  const [questions, setQuestions] = useState([]);
  useEffect(() => {
    async function fetchQuestions() {
      let response = await api.get(questionList);
      setQuestions(response.data);
    }
    fetchQuestions();
  }, []);
  const qestionCards = questions.map((data, index) => {
    return  <QuestionCard questionData={data} key={index}/>
  });
  return (
    <div className="container mx-auto">
      {questions && !! questions.length && qestionCards}
    </div>
  );
}

export default App;
