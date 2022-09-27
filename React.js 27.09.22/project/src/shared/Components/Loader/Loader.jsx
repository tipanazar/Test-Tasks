import style from "./loader.module.scss";

const Loader = ({ backgrColor }) => {
  return (
    <div
      className={style.ldsDualRing}
      style={{ backgroundColor: backgrColor }}
    ></div>
  );
};

export default Loader;
