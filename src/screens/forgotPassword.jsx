import { Link } from "react-router-dom";
import React from "react";
import { createaccountbg } from "../assets";

export default function forgotPassword() {
  return (
    <div className="create__account">
      <img src={createaccountbg} alt="Createaccountbg" />
      <div className="create__account__overlay">
        <div className="create__account__form">
          <div className="create__account__form__top">
            <div className="create__account__form__heading">
              Forget password
            </div>
            <div className="otp__page__form__subheading">
              Enter your email address and we will send link here
            </div>
          </div>
          <div className="create__account__form__data__entry">
            <label className="create__account__form__data__entry__input">
              <input type="text" placeholder="Email" />
              <div className="create__account__form__data__entry__input__error"></div>
            </label>
          </div>

          <Link
            to="/emailVerify"
            className="create__account__form__data__submit"
          >
            Send
          </Link>
        </div>
      </div>
    </div>
  );
}
