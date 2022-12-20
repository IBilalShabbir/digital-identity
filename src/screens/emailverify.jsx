import React, { useEffect } from "react";
import { createaccountbg, emailverificationimg } from "../assets";

import { useNavigate } from "react-router-dom";

export default function emailVerify() {
  const navigate = useNavigate();
  useEffect(() => {
    setTimeout(() => {
      navigate("/dashboard");
    }, 1000);
  }, []);
  return (
    <div className="create__account">
      <img src={createaccountbg} alt="Createaccountbg" />
      <div className="create__account__overlay">
        <div className="create__account__form">
          <div className="create__account__form__top">
            <div className="create__account__form__heading">
              Email Verification
            </div>
          </div>
          <div className="create__account__form__email__verification">
            <img
              src={emailverificationimg}
              className="create__account__form__email__verification__img"
              alt="emailverificationimg"
            />
          </div>
          <div className="create__account__form__bottom">
            First verify your email for the next process to be continue
          </div>
        </div>
      </div>
    </div>
  );
}
