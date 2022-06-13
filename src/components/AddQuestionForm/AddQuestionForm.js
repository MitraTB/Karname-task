import { useEffect, useState } from "react";
import Close from "../icons/Close";
import api from '../../utils/api_instance'
import {questionList} from '../../Api/endpoints'
const AddQuestionForm = (props) => {
  const { closeModal , fetchApi } = props;
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const handleSubmit = async() => {
    console.log('dadadas');
    const form = {
      title: title,
      description:description,
      time:'12:30',
      date:'1400/03/10',
      answers:[],
      badAnswer: 0,
      goodAnswer: 0,
    }
    const res =await api.post(questionList , form)
    console.log(res);
    closeModal()
  };
  const addTitle = (e) =>{
    setTitle(e.target.value)
  }
  const addDescription = (e) =>{
    setDescription(e.target.value)
  }
  return (
    <>
      <div className="bg-gray-500 opacity-90 fixed inset-0 z-100">
        <div className="flex h-screen justify-center items-center">
          <div className="flex-col justify-center md:w-1/2 w-full shadow  bg-white rounded-xl text-black">
            <div className="h-12 bg-white rounded-xl shadow-2xl px-6 py-3 flex justify-between">
              <div className="text-black">ایجاد سوال جدید</div>
              <div>
                <button onClick={closeModal}>
                  <Close />
                </button>
              </div>
            </div>
            <div className="text-lg text-black mb-10 px-6 py-5">
              <div>
                <label
                  for="question"
                  class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                >
                  موضوع
                </label>
                <input
                  type="text"
                  id="question"
                  value={title}
                  onChange={addTitle}
                  class="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  required
                />
                <label
                  for="questionText"
                  class="block mb-2 mt-3 text-sm font-medium text-gray-900 dark:text-gray-300"
                >
                  متن سوال
                </label>
                <textarea
                  type="text"
                  id="questionText"
                  onChange={addDescription}
                  value={description}
                  class="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  required
                />
              </div>
              <div className="flex float-left my-6">
                <button
                  type="button"
                  onClick={closeModal}
                  class="inline-block px-6 py-2.5 bg-transparent text-green-600 font-medium text-xs leading-tight uppercase rounded hover:text-blue-700 hover:bg-gray-100 focus:bg-gray-100 focus:outline-none focus:ring-0 active:bg-gray-200 transition duration-150 ease-in-out"
                >
                  انصراف
                </button>
                <button
                  type="button"
                  onClick={handleSubmit}
                  class="inline-block px-6 py-2.5 bg-green-500 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-green-600 hover:shadow-lg focus:bg-green-600 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-green-700 active:shadow-lg transition duration-150 ease-in-out"
                >
                  ایجاد سوال
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default AddQuestionForm;
