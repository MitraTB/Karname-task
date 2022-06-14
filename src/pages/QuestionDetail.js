import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Layout from "../Layout/default";
import { AnswersCard, QuestionCard, AnswerForm } from "../components/";
import api from "../utils/api_instance";
import { getSpecialQuestion } from "../Api/endpoints";

const QuestionDetail = () => {
  const [question, setQuestion] = useState(null);
  const [updateData, setUpdateData] = useState(false)
  useEffect(() => {
    async function fetchQuestions() {
      try {
        let response = await api.get(getSpecialQuestion(id));
        setQuestion(response.data);
        setUpdateData(false)
      } catch (e) {
        console.log(e);
      }
    }
    fetchQuestions();
  }, [updateData]);
  const sendAnswer = (newAnswer) => {
    const res = api.put(getSpecialQuestion(id), {
      title:question.title,
      description:question.description,
      time:'12:00',
      date:'1400/01/26',
      answers: [...question.answers, newAnswer],
    });
  };
  const { id } = useParams();
  const setGoodNum = (index,answerNew) => {
    question.answers[index] = answerNew
    api.put(getSpecialQuestion(id), {
      title:question.title,
      description:question.description,
      time:'12:00',
      date:'1400/01/26',
      answers:question.answers,
    });
    setUpdateData(true)
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
                key={index}
                setGoodNum={(answer)=>setGoodNum(index,answer)}
              />
            );
          })}
        <div>
          <AnswerForm sendAnswertoParent={sendAnswer} getDataAgain={()=>setUpdateData(true)}/>
        </div>
      </div>
    </Layout>
  );
};
export default QuestionDetail;
