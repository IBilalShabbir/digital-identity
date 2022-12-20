import React from "react";
import { useState } from "react";

export default function ProfileFileUploader({ heading, img, svg }) {
  const [data, setData] = useState(null);
  return (
    <div className="profile__file__uploader">
      <div className="information__form__overlay__bio__matric__section__entry__heading">
        {heading}
      </div>
      <div className="information__form__overlay__bio__matric__section__entry__btns__upload">
        <div className="information__form__overlay__bio__matric__section__entry__svg">
          {data === null ? svg : <img src={img} alt="" typeof="" />}
        </div>
      </div>
    </div>
  );
}
