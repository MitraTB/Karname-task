import clsx from "clsx";
import {useParams} from 'react-router-dom'
import styles from "./AnswersCard.module.scss";
import user from "../../assets/images/user.png";
import Happy from "../icons/Happy";
import Sad from "../icons/Sad";

const AnswersCard = ({data , setGoodNum}) => {
  const {text, bad, good ,userName} = data
  const {id} = useParams
  const modifyGoodNum = ()=>{
    const newAnswer = {
      text:text,
      bad: bad,
      good: good+1,
      userName:userName
    }
    console.log('newAnswerasdadad',newAnswer);
    setGoodNum(newAnswer)
  }
  return (
      <div className="mt-5 mx-auto">
        <div
          className={clsx(
            styles["card"],
            "rounded-lg w-full flex flex-col justify-between pb-4"
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
              <div className="mr-4 font-bold text-base">{userName}</div>
            </div>
            <div className="flex">
              <div className="hidden sm:block">
                <span className={styles["label"]}>ساعت : </span>
                <span className={clsx(styles["time"], "font-bold")}>20:30</span>
              </div>
              <div
                className={clsx(
                  styles["divider"],
                  "w-px h-6 md:mx-3 mx-1 hidden sm:block"
                )}
              ></div>
              <div className="hidden sm:block">
                <span className={styles["label"]}>تاریخ : </span>
                <span className={clsx(styles["time"], "font-bold")}>
                  1400/02/03
                </span>
              </div>
              <div className="md:mr-5 mr-1 flex items-center">
                  <div className="ml-5 flex"><Happy/><span className="mr-1">{good}</span></div>
                  <div className="flex"><Sad/><span className="mr-1">{bad}</span></div>
              </div>
            </div>
          </div>
          <p className="mt-5 mr-4 text-sm">{text}</p>
          <div className="flex mr-auto ml-4 mt-5">
            <button
            onClick={modifyGoodNum}
              type="button"
              class="flex items-center ml-2 inline-block px-2 py-2 border-2 border-green-500 text-green-500 font-medium text-xs leading-tight uppercase rounded-md hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out"
            >
              <Happy />
              پاسخ خوب بود
            </button>
            <button
              type="button"
              class="flex items-center inline-block px-2 py-2 border-2 border-red-500 text-red-500 font-medium text-xs leading-tight uppercase rounded-md hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out"
            >
              <Sad/>
              پاسخ خوب نبود
            </button>
          </div>
        </div>
      </div>
  );
};
export default AnswersCard;