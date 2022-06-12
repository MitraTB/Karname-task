import styles from "./Header.module.scss";
import clsx from "clsx";
import avatar from "../assets/images/avatar.png";
const Header = () => {
  return (
    <div className={styles["header"]}>
      <div className="container mx-auto flex justify-between items-center">
        <div className="sm:text-lg lg:text-2xl font-extrabold">لیست سوالات</div>
        <div className="flex items-center">
          <button className="flex bg-green-500 hover:bg-blue-700 text-white text-xs py-2 md:px-5 px-1 rounded items-center justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fill-rule="evenodd"
                d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z"
                clip-rule="evenodd"
              />
            </svg>
            سوال جدید
          </button>
          <img
            class="w-10 h-10 rounded-full lg:mr-10 mr-4"
            src={avatar}
            alt="Rounded avatar"
          ></img>
          <div className={clsx(styles["user"], "md:mr-3 mr-1 font-bold text-sm")}>
            الناز شاکردوست
          </div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-5 w-5 md:mr-4 mr-1"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fill-rule="evenodd"
              d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
              clip-rule="evenodd"
            />
          </svg>
        </div>
      </div>
    </div>
  );
};
export default Header;
