import { useState } from "react";

const AnswerForm = ({ sendAnswertoParent , getDataAgain }) => {
  const [answer, setAnswer] = useState("");
  const [answerisValid, setAnswerIsValid] = useState(true);
  const addAnswer = (e) => {
    setAnswer(e.target.value);
    setAnswerIsValid(true);
  };
  const sendAnswer = () => {
    console.log(answer);
    if (answer.trim() == "") {
      setAnswerIsValid(false);
      return;
    }
    setAnswerIsValid(true);
    sendAnswertoParent({
      text: answer,
      good: 0,
      bad: 0,
      userName: "میترا طباطبایی",
    });
    setAnswer('')
    getDataAgain()
  };
  return (
    <div className="mt-6">
      <div className="font-extrabold text-2xl mb-5">پاسخ خود را ثبت کنید</div>
      <label className="font-bold text-xs">پاسخ خود را بنویسید</label>
      <textarea
        rows="4"
        required
        value={answer}
        onChange={addAnswer}
        class="mt-3 block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
      ></textarea>
      {!answerisValid && (
        <p className="text-orange-700 text-xs">نوشتن فیلد پاسخ اجباری است</p>
      )}
      <button
        onClick={sendAnswer}
        class="mt-6 bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
      >
        ارسال پاسخ
      </button>
    </div>
  );
};
export default AnswerForm;
