const AddQuestionForm = (props) => {
    const {closeModal} = props
  return (
    <>
      <div className="bg-gray-700 opacity-90 md:opacity-80 fixed inset-0">
        <div className="flex h-screen justify-center items-center">
          <div className="flex-col justify-center md:w-1/2 w-full  bg-gray-100 rounded-xl text-black">
            <div className="h-12 bg-white rounded-xl shadow-2xl px-6 py-3 flex justify-between">
              <div className="text-black">ایجاد سوال جدید</div>
              <div>
                <button onClick={closeModal}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-5 w-5"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                      clip-rule="evenodd"
                    />
                  </svg>
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
                  type="questionText"
                  id="email"
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
