import { Link } from "react-router-dom";
import React from "react";
import { createaccountbg } from "../assets";

export default function enterOtp() {
  return (
    <div className="create__account">
      <img src={createaccountbg} alt="Createaccountbg" />
      <div className="create__account__overlay">
        <div className="create__account__form">
          <div className="create__account__form__top">
            <div className="create__account__form__heading">Enter OTP</div>
            <div className="otp__page__form__subheading">
              Enter four digit verification code which is send to your email
            </div>
          </div>
          <div className="create__account__form__data__entry">
            <label className="create__account__form__data__entry__input">
              <input type="text" placeholder="OTP" />
              <div className="create__account__form__data__entry__input__error"></div>
            </label>
            <div className="create__account__form__otp__entry__resend">
              <div className="create__account__form__otp__entry__resend__time">
                your code expires in 00:23
              </div>
              <button className="create__account__form__otp__entry__resend__code">
                Resend Code
              </button>
            </div>
          </div>

          <Link
            to="/emailVerify"
            className="create__account__form__data__submit"
          >
            Verify
          </Link>
        </div>
      </div>
    </div>
  );
}
