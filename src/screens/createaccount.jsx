import { Link, useNavigate } from "react-router-dom";

import React from "react";
import { createaccountbg } from "../assets";

export default function createAccount() {
  const navigate = useNavigate();
  return (
    <div className="create__account">
      <img src={createaccountbg} alt="Createaccountbg" />
      <div className="create__account__overlay">
        <div className="create__account__form">
          <div className="create__account__form__top">
            <div className="create__account__form__heading">Create Account</div>
            <div className="create__account__form__subheading">
              Already have an account?
              <Link
                to="/signIn"
                className="create__account__form__subheading__btn"
              >
                Login
              </Link>
            </div>
          </div>
          <div className="create__account__form__data__entry">
            <label className="create__account__form__data__entry__input">
              <input type="text" placeholder="Email" />
              <div className="create__account__form__data__entry__input__error"></div>
            </label>
            <label className="create__account__form__data__entry__input">
              <input type="password" placeholder="Password" />
              <div className="create__account__form__data__entry__input__error"></div>
            </label>
            <label className="create__account__form__data__entry__input">
              <input type="password" placeholder="Confirm Password" />
              <div className="create__account__form__data__entry__input__error"></div>
            </label>
          </div>
          <Link
            to="/dashboard"
            onClick={() => {
              window.localStorage.clear("isNotFirst");
            }}
            className="create__account__form__data__submit"
          >
            Sign up
          </Link>
        </div>
      </div>
    </div>
  );
}
