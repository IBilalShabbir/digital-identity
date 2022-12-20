import React from "react";
import { abc } from "../assets";
import { useNavigate } from "react-router-dom";
import { Popup } from "./Popup";
import { useState } from "react";
import { VerifyPopup } from "./VerifyPopup";

export default function CertificateCardEntry({
  validate,
  checkvalidatebtn,
  close,
  data,
}) {
  const navigate = useNavigate();
  const [popup, setPopup] = useState(false);
  const [payment, setPayment] = useState(false);

  return (
    <>
      <div className="certificates__data__entry">
        <div className="certificates__data__entry__close__svg">
          {close ? (
            <>
              <input
                type="radio"
                className="certificates__data__entry__close__btn"
                onClick={close}
              />
              <svg
                width="36"
                height="36"
                viewBox="0 0 36 36"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="18" cy="18" r="18" fill="#6A2DEC" />
                <path
                  d="M14.6364 10.4545L17.8395 15.7812H17.9531L21.1705 10.4545H24.1747L19.6932 17.7273L24.2457 25H21.1918L17.9531 19.7088H17.8395L14.6009 25H11.5611L16.1562 17.7273L11.6179 10.4545H14.6364Z"
                  fill="white"
                />
              </svg>
            </>
          ) : null}
          {validate ? (
            <>
              <input
                type="radio"
                className="certificates__data__entry__close__btn"
              />
              <svg
                width="40"
                height="40"
                viewBox="0 0 40 40"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M40 20C40 31.045 31.045 40 20 40C8.955 40 0 31.045 0 20C0 8.955 8.955 0 20 0C31.045 0 40 8.955 40 20Z"
                  fill="url(#paint0_linear_553_8479)"
                />
                <path
                  opacity="0.05"
                  d="M28.1718 12.1717L17.9997 22.3437L12.8277 17.1717C12.0467 16.3907 10.7807 16.3907 9.99975 17.1717L8.58575 18.5857C7.80475 19.3667 7.80475 20.6327 8.58575 21.4137L16.5857 29.4137C17.3667 30.1947 18.6327 30.1947 19.4137 29.4137L32.4138 16.4137C33.1948 15.6327 33.1948 14.3667 32.4138 13.5857L30.9998 12.1717C30.2188 11.3907 28.9528 11.3907 28.1718 12.1717Z"
                  fill="black"
                />
                <path
                  opacity="0.07"
                  d="M16.9395 29.0604L8.9395 21.0604C8.3535 20.4744 8.3535 19.5244 8.9395 18.9394L10.3535 17.5254C10.9395 16.9394 11.8895 16.9394 12.4745 17.5254L18.0005 23.0504L28.5255 12.5254C29.1115 11.9394 30.0615 11.9394 30.6465 12.5254L32.0605 13.9394C32.6465 14.5254 32.6465 15.4754 32.0605 16.0604L19.0605 29.0604C18.4755 29.6454 17.5255 29.6454 16.9395 29.0604Z"
                  fill="black"
                />
                <path
                  d="M16.6536 29.6963L8.30599 21.4109C7.898 21.006 7.898 20.3504 8.30599 19.9465L9.78144 18.4821C10.1894 18.0771 10.8499 18.0771 11.2569 18.4821L17.3914 24.5708L28.7431 13.3037C29.1511 12.8988 29.8116 12.8988 30.2186 13.3037L31.694 14.7681C32.102 15.1731 32.102 15.8287 31.694 16.2326L18.1291 29.6963C17.7221 30.1012 17.0606 30.1012 16.6536 29.6963Z"
                  fill="white"
                />
                <defs>
                  <linearGradient
                    id="paint0_linear_553_8479"
                    x1="5.858"
                    y1="5.858"
                    x2="34.142"
                    y2="34.142"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#00BA00" stopOpacity="0.89" />
                    <stop offset="1" stopColor="#00BA00" />
                  </linearGradient>
                </defs>
              </svg>
            </>
          ) : null}
        </div>
        <div className="certificates__data__entry__close__img">
          <img
            onClick={() => {
              navigate("/certificate");
              window.scrollTo({
                top: 0,
                behavior: "smooth",
              });
            }}
            src={data ? data.images[0] : abc}
          />
          <div className="certificates__data__entry__close__small__img">
            {data ? (
              data.images.map((image) => <img src={image} alt={data.name} />)
            ) : (
              <>
                <img src={abc} alt="" />
                <img src={abc} alt="" />
                <img src={abc} alt="" />
              </>
            )}
          </div>
        </div>
        <div className="certificates__data__entry__close__heading__container">
          <div className="certificates__data__entry__close__heading">
            {data ? data.name : "Ceritificate name"}
          </div>
          {checkvalidatebtn ? (
            <div className="certificates__data__entry__close__share">
              <button
                onClick={() => {
                  setPopup(!false);
                }}
                className="certificates__data__entry__close__share__btn"
              >
                <svg
                  width="35"
                  height="33"
                  viewBox="0 0 35 33"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M29.4744 21.8113C28.0274 21.8125 26.6387 22.3614 25.6065 23.34L11.0557 17.0831C11.0557 16.8698 11.0557 16.692 11.0557 16.4787C11.0557 16.2654 11.0557 16.0877 11.0557 15.8921L25.6065 9.61743C26.5179 10.4796 27.7104 11.0107 28.9815 11.1205C30.2526 11.2304 31.5239 10.9123 32.5796 10.2201C33.6352 9.52801 34.41 8.50459 34.7725 7.32368C35.1349 6.14277 35.0626 4.87719 34.5679 3.74188C34.0731 2.60657 33.1864 1.67154 32.0584 1.09558C30.9303 0.519626 29.6305 0.338263 28.3796 0.582294C27.1287 0.826324 26.0039 1.4807 25.1962 2.43429C24.3885 3.38788 23.9478 4.58188 23.9488 5.8135V6.41786L9.39807 12.6748C8.62147 11.9385 7.63678 11.4399 6.56761 11.2418C5.49845 11.0437 4.39246 11.1547 3.38849 11.5611C2.38451 11.9675 1.5273 12.651 0.924454 13.5259C0.321609 14.4008 0 15.428 0 16.4787C0 17.5294 0.321609 18.5567 0.924454 19.4316C1.5273 20.3064 2.38451 20.99 3.38849 21.3963C4.39246 21.8027 5.49845 21.9138 6.56761 21.7157C7.63678 21.5175 8.62147 21.019 9.39807 20.2827L23.9488 26.5574V27.1439C23.9488 28.1986 24.2729 29.2296 24.88 30.1066C25.4872 30.9835 26.3502 31.667 27.3598 32.0706C28.3695 32.4743 29.4805 32.5799 30.5524 32.3741C31.6243 32.1683 32.6088 31.6605 33.3816 30.9147C34.1544 30.1689 34.6806 29.2187 34.8938 28.1843C35.107 27.1499 34.9976 26.0777 34.5794 25.1032C34.1612 24.1288 33.4529 23.296 32.5443 22.71C31.6356 22.1241 30.5673 21.8113 29.4744 21.8113Z"
                    fill="#6A2DEC"
                  />
                </svg>
              </button>
            </div>
          ) : null}
        </div>
        <div className="certificates__data__entry__close__type">
          {data ? data.description : "Description"}
        </div>
        {checkvalidatebtn ? (
          <button
            onClick={() => {
              setPayment(!false);
              setTimeout(() => {
                setIdentity(true);
                window.localStorage.setItem("isNotFirst", true);
              }, 100);
            }}
            className="certificates__data__entry__close__type__button__validation"
          >
            Send for validation
          </button>
        ) : null}
      </div>
      {popup ? <Popup setPopup={setPopup} /> : null}
      {payment ? <VerifyPopup setPopup={setPayment} /> : null}
    </>
  );
}
