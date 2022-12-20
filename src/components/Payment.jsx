import { paypal, visa } from "../assets";

import React from "react";
import { X } from "react-feather";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export function Payment({ setPopup }) {
  const navigate = useNavigate();
  useEffect(() => {
    document.body.style.overflowY = "hidden";
    return () => (document.body.style.overflowY = "auto");
  }, []);
  return (
    <div className="payment__pop__up">
      <div className="payment__pop__up__overlay">
        <div className="payment__pop__up__overlay__card">
          <div className="secure__digital__pop__up__overlay__card__close">
            <button
              onClick={() => {
                setPopup(!true);
              }}
              className="secure__digital__pop__up__overlay__card__closee__ntry"
            >
              <X width={25} color="#ffff" />
            </button>
          </div>
          <div className="secure__digital__pop__up__overlay__card__text__heading">
            Payment
          </div>
          <div className="secure__digital__pop__up__overlay__card__text">
            <a href="#">
              <img src={paypal} alt="paypal" />
            </a>
            <a href="#">
              <img src={visa} alt="visa" />
            </a>
            <a href="#">
              <img src={paypal} alt="paypal" />
            </a>
            <a href="#">
              <img src={visa} alt="visa" />
            </a>
            <a href="#">
              <img src={paypal} alt="paypal" />
            </a>
            <a href="#">
              <img src={visa} alt="visa" />
            </a>
          </div>

          <div className="secure__digital__pop__up__overlay__card__button">
            <button
              onClick={() => {
                setPopup(!true);
              }}
            >
              Back
            </button>
            <button
              onClick={() => {
                navigate("/dashboard");
                window.localStorage.setItem("isNotFirst", true);
                window.scrollTo({
                  top: 0,
                  behavior: "smooth",
                });
              }}
            >
              Proceed
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
