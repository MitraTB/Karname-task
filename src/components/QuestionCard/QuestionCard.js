import clsx from "clsx";
import { Link } from 'react-router-dom'
import styles from "./QuestionCard.module.scss";
import user from "../../assets/images/user.png";
import commentIcon from "../../assets/images/comment.png";
const QuestionCard = ({ questionData, detailBtn }) => {
  const { time, date, title, description, answers, id } = questionData;
  return (
    <div className="mt-5">
      <div
        className={clsx(
          styles["card"],
          "rounded-lg w-full pb-4",
          detailBtn && "flex flex-col justify-between"
        )}
      >
        <div
          className={clsx(
            styles["card__header"],
            "rounded-lg w-full bg-white h-12 flex justify-between px-4 items-center"
          )}
        >
          <div className="flex items-center">
            <img class="w-8 h-8 rounded" src={user} alt="a person" />
            <div className="mr-4 font-bold text-base">{title}</div>
          </div>
          <div className="flex">
            <div className="hidden sm:block">
              <span className={styles["label"]}>ساعت : </span>
              <span className={clsx(styles["time"], "font-bold")}>{time}</span>
            </div>
            <div
              className={clsx(
                styles["divider"],
                "w-px h-6 md:mx-3 mx-1 hidden sm:block"
              )}
            ></div>
            <div className="hidden sm:block">
              <span className={styles["label"]}>تاریخ : </span>
              <span className={clsx(styles["time"], "font-bold")}>{date}</span>
            </div>
            <div className="md:mr-5 mr-1 flex items-center">
              <img className="h-4 w-4" src={commentIcon} alt="comment icon" />
              {/* <span className="mr-1 text-xs leading-6">{answers.length || '0'}</span> */}
            </div>
          </div>
        </div>
        <p className="mt-5 mr-4 text-sm">{description}</p>
        {detailBtn && (
          <div className="w-25 mr-auto ml-4">
            <Link to={`./${id}`}>
              <button
                type="button"
                class="w-full inline-block px-2 py-2 border-2 border-green-500 text-green-500 font-medium text-xs leading-tight uppercase rounded-md hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out"
              >
                مشاهده جزئیات
              </button>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};
export default QuestionCard;
