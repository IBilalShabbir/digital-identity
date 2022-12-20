import React from "react";
import { useState } from "react";

export default function DateofBirth() {
  const [show, setShow] = useState(true);
  const [date, setDate] = useState("");
  console.log(date);
  return (
    <label className="information__form__overlay__data__entry__input">
      {show ? (
        <div className="information__form__overlay__data__entry__input_label">
          Date of Birth
        </div>
      ) : null}
      <input
        type="date"
        placeholder="date of Birth"
        onFocus={() => {
          setShow(false);
        }}
        onBlur={() => {
          if (date === "") {
            setShow(true);
          } else {
            setShow(false);
          }
        }}
        onChange={(e) => {
          setDate(e.target.value);
        }}
      />
      <div className="information__form__overlay__data__entry__input__error"></div>
    </label>
  );
}
