import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Layout from "../Layout/default";
import { AnswersCard, QuestionCard, AnswerForm } from "../components/";
import api from "../utils/api_instance";
import { getSpecialQuestion } from "../Api/endpoints";

const QuestionDetail = () => {
  const [question, setQuestion] = useState(null);
  useEffect(() => {
    async function fetchQuestions() {
      let response = await api.get(getSpecialQuestion(id));
      setQuestion(response.data);
    }
    fetchQuestions();
  }, []);
  const { id } = useParams();
  const setGoodNum = async (num , index) => {
    console.log(num);
  };
  return (
    <Layout>
      <div className="container mx-auto">
        {question && <QuestionCard questionData={question} />}
        <div className="text-2xl font-extrabold mt-6">پاسخ ها</div>
        {question &&
          question.answers.map((answer, index) => {
            return (
              <AnswersCard
                data={answer}
                index={index}
                key={index}
                setGoodNum={setGoodNum}
              />
            );
          })}
        <div>
          <AnswerForm />
        </div>
      </div>
    </Layout>
  );
};
export default QuestionDetail;
