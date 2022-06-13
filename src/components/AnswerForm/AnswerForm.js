const AnswerForm = () => {
  return (
    <div className="mt-6">
      <div className="font-extrabold text-2xl mb-5">پاسخ خود را ثبت کنید</div>
      <label className="font-bold text-xs">پاسخ خود را بنویسید</label>
      <textarea
        rows="4"
        class="mt-3 block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
      ></textarea>
      <button class="mt-6 bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
        ارسال پاسخ
      </button>
    </div>
  );
};
export default AnswerForm;
