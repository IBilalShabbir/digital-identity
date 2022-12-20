import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { X } from "react-feather";
import { Payment } from "./Payment";

export function VerifyPopup({ setPopup }) {
  const [payment, setPayment] = useState(false);
  useEffect(() => {
    document.body.style.overflowY = "hidden";
    return () => (document.body.style.overflowY = "auto");
  }, []);
  return (
    <>
      <div className="secure__digital__pop__up">
        <div className="secure__digital__pop__up__overlay">
          <div className="secure__digital__pop__up__overlay__card">
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
            <div className="secure__digital__pop__up__overlay__card__text">
              Are you sure to create secure digital identity
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
                  setPayment(!false);
                  setTimeout(() => {
                    setIdentity(true);
                    window.localStorage.setItem("isNotFirst", true);
                  }, 100);
                }}
              >
                Proceed
              </button>
            </div>
          </div>
        </div>
      </div>
      {payment ? <Payment setPopup={setPayment} /> : null}
    </>
  );
}
