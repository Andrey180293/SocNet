import React from "react";
import "../Preloader/Preloader.scss";

let Preloader = () => {
  return (
    <div class="preloader">
      <div class="preloader__row">
        <div class="preloader__item"></div>
        <div class="preloader__item"></div>
      </div>
    </div>
  );
};
export default Preloader;
//<img src={preloader}/>
