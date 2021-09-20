import React from "react";
import style from "./style.module.scss";

const Loader = () => {
  return <div className={style.loader}>
    <div></div>
    <div className={style.loaderBottom}></div>
  </div>;
};

export default Loader;