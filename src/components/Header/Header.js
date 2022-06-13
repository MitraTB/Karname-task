import clsx from "clsx";
import { useState } from "react";
import avatar from "../../assets/images/avatar.png";
import {AddQuestionForm} from "../../components";
import Plus from "../icons/Plus";
import styles from "./Header.module.scss";
import Triangle from "../icons/Triangle";
const Header = () => {
  const [modalOn, setModalOn] = useState(false);
  const handleModal = (state) => {
    setModalOn(state);
  };
  return (
    <div className={styles["header"]}>
      <div className="container mx-auto flex justify-between items-center">
        <div className="sm:text-lg lg:text-2xl font-extrabold">لیست سوالات</div>
        <div className="flex items-center">
          <button
            onClick={() => handleModal(true)}
            className="flex bg-green-500 hover:bg-blue-700 text-white text-xs py-2 md:px-5 px-1 rounded items-center justify-center "
          >
            <Plus/>
            سوال جدید
          </button>
          <img
            class="w-10 h-10 rounded-full lg:mr-10 mr-4"
            src={avatar}
            alt="Rounded avatar"
          ></img>
          <div
            className={clsx(styles["user"], "md:mr-3 mr-1 font-bold text-sm")}
          >
            الناز شاکردوست
          </div>
          <Triangle/>
        </div>
      </div>
      {modalOn && <AddQuestionForm closeModal={() => handleModal(false)}/>}
    </div>
  );
};
export default Header;
