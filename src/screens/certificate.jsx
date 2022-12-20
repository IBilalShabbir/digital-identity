import { abc, informationformbg } from "../assets";

import React from "react";

export default function certificate() {
  return (
    <div className="block__chain__banner">
      <img
        src={informationformbg}
        className="block__chain__banner__img"
        alt="informationformbg"
      />
      <div className="certificate__overlay">
        <div className="certificates">
          <div className="certificates__heading__container">
            <div className="certificates__heading__container__heading">
              Add Ceritificate
            </div>
          </div>
          <div className="certificates__heading__container__heading__type">
            Type here
          </div>
          <div className="certificates__svg">
            <>
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
          </div>
          <div className="certificates__img">
            <img src={abc} alt="" />
            <div className="certificates__img__bottom__img">
              <img src={abc} alt="" />
              <img src={abc} alt="" />
              <img src={abc} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
