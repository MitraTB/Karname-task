import { useEffect, useState } from "react";
import { questionList } from "./Api/endpoints";
import { QuestionCard } from "./components";
import api from "./utils/api_instance";
import Layout from "./Layout/default";

function App() {
  const [questions, setQuestions] = useState([]);
  useEffect(() => {
    async function fetchQuestions() {
      try {
        let response = await api.get(questionList());
        setQuestions(response.data);
      } catch (e) {
        console.log(e);
      }
    }
    fetchQuestions();
  }, []);
  const qestionCards = questions.map((data, index) => {
    return <QuestionCard questionData={data} key={index} detailBtn />;
  });
  return (
    <Layout>
      <div className="container mx-auto">
        {questions && !!questions.length && qestionCards}
      </div>
    </Layout>
  );
}

export default App;
