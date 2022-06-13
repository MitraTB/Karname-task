import { useEffect, useState } from "react";
import { questionList } from "./Api/endpoints";
import { QuestionCard } from "./components";
import api from "./utils/api_instance";
import Layout from './Layout/default'

function App() {
  const [questions, setQuestions] = useState([]);
  const [fetchAgain , setFetchAgain] = useState(false);
  useEffect(() => {
    async function fetchQuestions() {
      let response = await api.get(questionList());
      setQuestions(response.data);
    }
    fetchQuestions();
    setFetchAgain(false);
  }, [fetchAgain]);
  const qestionCards = questions.map((data, index) => {
    return <QuestionCard questionData={data} key={index} detailBtn fetchApi={()=>setFetchAgain(true)}/>;
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
