import { RotatingLines } from "react-loader-spinner";
import css from "../Loader/Loader.module.css";
export const Loader = () => {
  return (
    <div className={css.loader}>
      <RotatingLines
        visible={true}
        height="96"
        width="96"
        color="grey"
        strokeWidth="5"
        animationDuration="5.75"
        ariaLabel="rotating-lines-loading"
        wrapperStyle={{}}
        wrapperClass=""
      />
    </div>
  );
};
