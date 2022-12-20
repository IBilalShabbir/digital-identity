import React, { useState } from "react";
import { informationformbg, notification, user, video } from "../assets";
import CertificateCardEntry from "../components/Certificatecardentry";
import { Payment } from "../components/Payment";
import { VerifyPopup } from "../components/VerifyPopup";

export default function profilePreview() {
  const [popup, setPopup] = useState(false);
  const [payment, setPayment] = useState(false);
  return (
    <>
      <div className="information__form">
        <img src={informationformbg} alt="informationformbg" />
        <div className="profile__preview__form__overlay">
          <div className="profile__preview__header">
            <div className="profile__preview__header__heading">Preview</div>
            <button
              onClick={() => {
                setPopup(!false);
              }}
              className="profile__preview__header__btn"
            >
              Confirm
            </button>
          </div>
          <div className="profile__preview__middle">
            <div className="profile__preview__middle__left">
              <div className="profile__preview__middle__left__profile__img">
                <img src={user} alt="addimage" />
              </div>
              <div className="profile__preview__middle__left__profile__user__detail">
                <a
                  href="#"
                  className="profile__preview__middle__left__profile__name"
                >
                  Bader Proj
                </a>
                <div className="profile__preview__middle__left__profile__location">
                  india
                </div>
              </div>
              <div className="profile__preview__middle__left__profile__user__detail">
                <div className="profile__preview__middle__left__profile__number">
                  Number
                </div>
                <div
                  className="profile__preview__middle__left__profile__location"
                  style={{ background: "transparent", color: "white" }}
                >
                  0300-1234567
                </div>
              </div>
              <div className="profile__preview__middle__left__profile__user__detail">
                <div className="profile__preview__middle__left__profile__number">
                  Email
                </div>
                <div
                  className="profile__preview__middle__left__profile__location"
                  style={{ background: "transparent", color: "white" }}
                >
                  baderproj123@gmail.com
                </div>
              </div>
            </div>
            <div className="profile__preview__middle__right">
              <div className="profile__preview__middle__right__header__card">
                <div className="profile__preview__middle__right__header__card__left">
                  <div className="profile__preview__middle__right__header__card__left__entry">
                    <div className="profile__preview__middle__right__header__card__left__entry__heading">
                      Father's name:
                    </div>
                    <div className="profile__preview__middle__right__header__card__left__entry__heading__subheading">
                      Bader proj
                    </div>
                  </div>
                  <div className="profile__preview__middle__right__header__card__left__entry">
                    <div className="profile__preview__middle__right__header__card__left__entry__heading">
                      Mother's name:
                    </div>
                    <div className="profile__preview__middle__right__header__card__left__entry__heading__subheading">
                      Elena proj
                    </div>
                  </div>
                  <div className="profile__preview__middle__right__header__card__left__entry">
                    <div className="profile__preview__middle__right__header__card__left__entry__heading">
                      Guardian:
                    </div>
                    <div className="profile__preview__middle__right__header__card__left__entry__heading__subheading">
                      Name here
                    </div>
                  </div>
                  <div className="profile__preview__middle__right__header__card__left__entry">
                    <div className="profile__preview__middle__right__header__card__left__entry__heading">
                      Mobile:
                    </div>
                    <div className="profile__preview__middle__right__header__card__left__entry__heading__subheading">
                      number
                    </div>
                  </div>
                  <div className="profile__preview__middle__right__header__card__left__entry">
                    <div className="profile__preview__middle__right__header__card__left__entry__heading">
                      Date of birth:
                    </div>
                    <div className="profile__preview__middle__right__header__card__left__entry__heading__subheading">
                      12-sep-2000
                    </div>
                  </div>
                  <div className="profile__preview__middle__right__header__card__left__entry">
                    <div className="profile__preview__middle__right__header__card__left__entry__heading">
                      Blood group:
                    </div>
                    <div className="profile__preview__middle__right__header__card__left__entry__heading__subheading">
                      AB+
                    </div>
                  </div>
                  <div className="profile__preview__middle__right__header__card__left__entry">
                    <div className="profile__preview__middle__right__header__card__left__entry__heading">
                      Distinguished mark:
                    </div>
                    <div className="profile__preview__middle__right__header__card__left__entry__heading__subheading">
                      Mark here
                    </div>
                  </div>
                </div>
                <div className="profile__preview__middle__right__header__card__right">
                  <div className="profile__preview__middle__right__header__card__left__entry">
                    <div className="profile__preview__middle__right__header__card__left__entry__heading">
                      Address:
                    </div>
                    <div className="profile__preview__middle__right__header__card__left__entry__heading__subheading">
                      Mumbai,India
                    </div>
                  </div>
                  <div className="profile__preview__middle__right__header__card__left__entry">
                    <div className="profile__preview__middle__right__header__card__left__entry__heading">
                      Street:
                    </div>
                    <div className="profile__preview__middle__right__header__card__left__entry__heading__subheading">
                      Street number here
                    </div>
                  </div>
                  <div className="profile__preview__middle__right__header__card__left__entry">
                    <div className="profile__preview__middle__right__header__card__left__entry__heading">
                      City:
                    </div>
                    <div className="profile__preview__middle__right__header__card__left__entry__heading__subheading">
                      Mumbai
                    </div>
                  </div>
                  <div className="profile__preview__middle__right__header__card__left__entry">
                    <div className="profile__preview__middle__right__header__card__left__entry__heading">
                      Country:
                    </div>
                    <div className="profile__preview__middle__right__header__card__left__entry__heading__subheading">
                      Name here
                    </div>
                  </div>
                  <div className="profile__preview__middle__right__header__card__left__entry">
                    <div className="profile__preview__middle__right__header__card__left__entry__heading">
                      Area:
                    </div>
                    <div className="profile__preview__middle__right__header__card__left__entry__heading__subheading">
                      Name here
                    </div>
                  </div>
                  <div className="profile__preview__middle__right__header__card__left__entry">
                    <div className="profile__preview__middle__right__header__card__left__entry__heading">
                      Zip:
                    </div>
                    <div className="profile__preview__middle__right__header__card__left__entry__heading__subheading">
                      321200
                    </div>
                  </div>
                </div>
              </div>
              <div className="profile__preview__middle__right__uploads__container">
                <div className="profile__view__uploader">
                  <div className="information__form__overlay__bio__matric__section__entry__heading">
                    Face Recongnition
                  </div>
                  <div className="information__form__overlay__bio__matric__section__entry__btns__upload">
                    <div className="information__form__overlay__bio__matric__section__entry__svg">
                      <svg
                        width="89"
                        height="89"
                        viewBox="0 0 89 89"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M21.6126 37.2724C21.0522 32.6029 21.583 31.3537 24.8012 29.7825C24.5634 28.6175 24.2825 27.425 24.078 26.2192C22.4022 16.3522 26.6298 9.83774 36.3053 7.64702C42.014 6.33012 47.9567 6.41554 53.6252 7.89598C62.5398 10.2185 66.6584 17.2587 64.7207 26.6407C64.5149 27.6366 64.2591 28.6219 64.0251 29.6116C67.587 31.7473 68.0506 32.7741 67.3519 37.2724H84.9717C85.3678 37.2724 85.8422 37.1365 86.1442 37.3063C86.7946 37.6715 87.7697 38.1215 87.8682 38.6686C88.0683 39.7807 87.1254 40.1325 86.0892 40.1291C81.3926 40.1189 76.6958 40.118 71.999 40.1264H68.2629C65.7291 40.1264 65.7308 40.1264 65.4938 42.5831C65.4472 43.4364 65.159 44.2588 64.6628 44.9545C64.1665 45.6502 63.4827 46.1904 62.691 46.5121C62.4827 46.6065 62.2959 46.7426 62.1423 46.912C61.9886 47.0814 61.8714 47.2806 61.7977 47.4971C61.2859 50.3019 60.6745 52.9946 58.5558 55.1779C58.0878 55.6598 58.5099 56.9814 58.4767 57.9147C58.3996 60.0796 59.3533 61.1295 61.5477 61.6532C65.1663 62.5166 68.6918 63.775 72.2493 64.8897C75.9854 66.0605 77.7899 68.5202 77.8127 72.4299C77.8202 73.6747 77.8399 74.9205 77.8059 76.166C77.7522 78.1421 76.7394 79.1491 74.7508 79.2503C74.3558 79.2704 73.9587 79.2581 73.562 79.2581C54.2088 79.2581 34.8553 79.2581 15.5017 79.2581C11.8712 79.2581 11.3278 78.5513 11.1542 74.8767C10.8095 67.6004 13.2179 65.694 19.1094 64.1462C22.3842 63.2862 25.5817 62.1335 28.8351 61.1862C29.7668 60.9145 30.3486 60.5782 30.2922 59.4948C30.2997 58.9282 30.3806 58.3651 30.5327 57.8193C30.8553 56.3133 30.4274 55.1874 29.5233 53.8414C28.4051 52.1771 27.9639 50.0322 27.3746 48.0521C27.1393 47.26 27.0088 46.6918 26.1006 46.3355C24.2666 45.6151 23.4769 44.0334 23.5302 42.1358C23.5771 40.4735 22.8822 40.0694 21.3072 40.0931C15.593 40.1797 9.87679 40.1271 4.16124 40.1271C3.76521 40.1271 3.3685 40.1142 2.97248 40.1271C1.95524 40.1611 1.08371 39.8839 1.07046 38.7152C1.05722 37.5397 1.92909 37.2703 2.94531 37.2713C8.54742 37.2779 14.1496 37.2779 19.752 37.2713L21.6126 37.2724ZM14.0945 76.2699H74.8802C74.8802 74.5775 74.9879 72.9957 74.8517 71.4357C74.6951 69.6451 73.6422 68.4057 71.9154 67.8586C67.7717 66.5448 63.6209 65.2514 59.4528 64.0182C59.0571 63.9013 58.2831 64.1146 58.0833 64.4285C55.3023 68.798 50.9939 70.2758 46.1958 70.5129C40.1813 70.8098 34.5072 69.9722 30.8377 64.2872C30.6655 64.0206 29.9322 63.9037 29.5497 64.0179C25.3834 65.2605 21.2284 66.5398 17.0848 67.8559C16.2548 68.08 15.5187 68.5647 14.9847 69.2384C14.4507 69.9122 14.147 70.7395 14.1183 71.5988C14.0011 73.1058 14.0945 74.6294 14.0945 76.2699ZM26.3435 40.2263C26.3921 40.9993 26.2786 41.735 26.5208 42.3249C26.7602 42.9074 27.3359 43.7457 27.8043 43.7715C29.7243 43.8765 30.1139 44.9817 30.1499 46.5882C30.2341 50.4805 31.9724 53.3132 35.4738 55.1677C36.9818 56.0326 38.3795 57.077 39.6362 58.2782C42.7304 61.0595 46.5989 60.9692 49.6337 58.0261C50.5685 57.0575 51.6467 56.2382 52.8304 55.597C56.8287 53.6294 58.9243 50.5305 58.9328 46.0651C58.9355 44.7157 59.4379 43.9254 60.8915 43.8734C62.064 43.8303 62.5918 43.1527 62.5534 41.9775C62.5629 41.3922 62.6019 40.8077 62.6703 40.2263H26.3435ZM33.3877 19.7826C32.5369 21.0372 31.4698 22.1262 30.9844 23.4294C30.0547 26.026 29.2758 28.6743 28.6517 31.3608C28.3273 32.6854 27.7561 33.2846 26.4247 32.896C25.1469 32.5224 24.4422 33.0275 24.235 34.259C23.9918 35.7052 24.9679 37.2615 26.1227 37.2629C38.3343 37.2764 50.546 37.2773 62.7579 37.2656C63.9925 37.2656 64.9408 35.9114 64.7649 34.3714C64.612 33.0356 63.8865 32.5333 62.5154 32.9011C61.1731 33.2611 60.5859 32.7771 60.2527 31.2708C59.5821 28.3695 58.7124 25.5178 57.6496 22.7362C57.2488 21.6571 56.2306 20.8076 55.4484 19.7948C51.143 25.2523 38.9036 25.9842 33.3877 19.7826ZM26.982 25.275C27.197 24.7656 27.3702 24.3729 27.5292 23.9749C28.4802 21.5888 29.6133 19.319 31.7374 17.7318C33.1605 16.6687 34.6763 16.6011 35.7194 17.814C38.6617 21.2366 42.5025 21.5297 46.5653 21.1595C49.1255 20.9258 51.3584 20.0387 53.096 18.0008C54.244 16.6541 55.9083 16.4221 57.1378 17.7264C58.6934 19.3757 59.8665 21.3898 61.1663 23.2731C61.4761 23.7218 61.6337 24.2754 62.0321 25.1599C62.9804 17.0481 59.605 12.2258 52.165 10.5279C47.85 9.54686 43.3846 9.41994 39.0207 10.1543C36.7383 10.5011 34.5178 11.1754 32.4279 12.1562C27.7979 14.424 25.5127 20.1365 26.982 25.275ZM33.7749 57.3302C32.2628 61.5306 33.1425 64.259 36.808 65.9963C41.8826 68.4034 47.1288 68.4054 52.2017 65.9926C55.8699 64.2481 56.7642 61.4579 55.214 57.338C54.0507 58.2177 52.8236 58.9323 51.8624 59.9085C47.5149 64.3239 41.4638 64.3195 37.1242 59.8945C36.1681 58.9194 34.942 58.2099 33.7753 57.3302H33.7749Z"
                          fill="#6A2DEC"
                          stroke="#6A2DEC"
                          stroke-width="2"
                        />
                        <path
                          d="M1.0275 13.699C1.0275 11.438 0.995911 9.17662 1.03497 6.91661C1.09407 3.48414 3.50385 1.06008 6.9448 1.02815C11.5225 0.985698 16.101 1.02544 20.679 1.00981C21.7411 1.00608 22.7169 1.19934 22.7193 2.46656C22.7213 3.74567 21.7054 3.93145 20.6695 3.93179C16.3173 3.93349 11.9651 3.92127 7.61322 3.93927C4.89062 3.95047 3.96136 4.88586 3.94981 7.62002C3.93283 11.6329 3.94539 15.6462 3.94471 19.6591C3.94471 20.1112 4.09857 20.656 3.90124 20.9956C3.47395 21.6186 2.99152 22.2018 2.45977 22.7384C1.98427 22.1555 1.13516 21.5975 1.09406 20.9858C0.933409 18.5658 1.02716 16.1292 1.0275 13.699Z"
                          fill="#6A2DEC"
                          stroke="#6A2DEC"
                          stroke-width="2"
                        />
                        <path
                          d="M75.3148 1.02164C77.5758 1.02164 79.8372 0.987676 82.0975 1.02775C85.5239 1.08957 87.9394 3.50718 87.9696 6.95255C88.0111 11.5303 87.9727 16.1091 87.9876 20.6872C87.991 21.754 87.7791 22.7227 86.5136 22.7108C85.2362 22.6989 85.0657 21.6756 85.0657 20.643C85.0657 16.3475 85.0728 12.05 85.0602 7.75616C85.0514 4.81889 84.1639 3.946 81.1883 3.93853C77.1754 3.92834 73.1621 3.93649 69.1492 3.93479C68.6971 3.93479 68.1439 4.08424 67.8151 3.87943C67.2248 3.51125 66.7697 2.92842 66.2578 2.43321C66.7894 1.96314 67.2985 1.12082 67.8562 1.08753C70.3363 0.940126 72.8279 1.02402 75.3148 1.02164Z"
                          fill="#6A2DEC"
                          stroke="#6A2DEC"
                          stroke-width="2"
                        />
                        <path
                          d="M13.7537 87.9714C11.6057 87.9714 9.45782 87.984 7.31024 87.9714C3.4298 87.9459 1.0482 85.6037 1.02986 81.7616C1.0088 77.353 1.0319 72.9441 1.01967 68.5354C1.01696 67.4639 1.03902 66.3097 2.42987 66.2894C3.94911 66.2673 3.94028 67.5165 3.94096 68.6231C3.94435 72.6923 3.94526 76.7618 3.94367 80.8317C3.94673 84.2791 4.70346 85.0508 8.09142 85.0548C11.9912 85.0594 15.8913 85.0599 19.7915 85.0565C20.2433 85.0565 20.7867 84.9095 21.1274 85.1071C21.7124 85.5152 22.2558 85.9798 22.7498 86.4943C22.1816 86.9867 21.6392 87.8641 21.0404 87.9041C18.6208 88.0658 16.1842 87.9693 13.7537 87.9714Z"
                          fill="#6A2DEC"
                          stroke="#6A2DEC"
                          stroke-width="2"
                        />
                        <path
                          d="M87.9805 75.3148C87.9828 77.5191 88.0056 79.7238 87.9774 81.9278C87.9319 85.4828 85.5507 87.9286 82.0363 87.9602C77.4586 88.0013 72.8802 87.9626 68.3021 87.9775C67.2312 87.9809 66.2693 87.7558 66.2894 86.4926C66.3091 85.2159 67.3365 85.0552 68.3673 85.0552C72.6065 85.0552 76.8456 85.054 81.0843 85.0515C84.2369 85.0454 85.0582 84.2071 85.0636 80.9995C85.0697 77.0431 85.0706 73.0866 85.0663 69.1302C85.0663 68.6781 84.9162 68.1231 85.122 67.7967C85.4926 67.2088 86.0802 66.7581 86.5771 66.25C87.0441 66.7846 87.881 67.2975 87.9142 67.8579C88.0616 70.336 87.9781 72.8279 87.9805 75.3148Z"
                          fill="#6A2DEC"
                          stroke="#6A2DEC"
                          stroke-width="2"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
                <div className="profile__view__uploader">
                  <div className="information__form__overlay__bio__matric__section__entry__heading">
                    Bio Matric
                  </div>
                  <div className="information__form__overlay__bio__matric__section__entry__btns__upload">
                    <div className="information__form__overlay__bio__matric__section__entry__svg">
                      <img src={user} alt="user" />
                    </div>
                  </div>
                </div>

                <div className="profile__view__uploader">
                  <div className="information__form__overlay__bio__matric__section__entry__heading">
                    Eye Scan
                  </div>
                  <div className="information__form__overlay__bio__matric__section__entry__btns__upload">
                    <div className="information__form__overlay__bio__matric__section__entry__svg">
                      <svg
                        width="92"
                        height="92"
                        viewBox="0 0 92 92"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M0.632812 35.5608C1.31884 34.0677 2.478 33.57 4.11029 33.5937C10.119 33.6648 16.104 33.6174 22.1127 33.6411C22.7514 33.6411 23.2246 33.4515 23.6977 33.0486C28.1214 29.1619 33.0656 26.1521 38.7904 24.6116C46.0292 22.6446 52.9605 23.6873 59.5843 27.029C62.8015 28.6405 65.7112 30.6787 68.4081 33.0723C68.8812 33.4989 69.3307 33.6885 69.993 33.6885C75.9544 33.6648 81.9394 33.7122 87.9008 33.6411C89.5568 33.6174 90.7632 34.0677 91.4729 35.6082C91.4729 36.0822 91.4729 36.5562 91.4729 37.0302C90.7632 38.5706 89.5568 39.0446 87.9008 38.9972C83.761 38.9261 79.6211 38.9735 75.4813 38.9735C75.1501 38.9735 74.8426 38.9735 74.3694 38.9735C74.5823 39.2816 74.7243 39.4712 74.8662 39.6845C76.0963 41.3435 77.3501 42.9787 78.5566 44.6614C79.2663 45.6331 79.3136 46.7469 78.6276 47.7423C73.3759 55.2314 67.0833 61.5828 58.8273 65.7065C49.3647 70.4464 40.0678 69.7591 31.0075 64.4979C23.9106 60.3741 18.3041 54.6152 13.5965 47.9556C12.8158 46.8417 12.7685 45.7042 13.5728 44.5903C14.8975 42.6943 16.246 40.8932 17.6653 38.9498C17.3105 38.9498 17.003 38.9498 16.7191 38.9498C12.5556 38.9498 8.39207 38.9024 4.22857 38.9735C2.57263 38.9972 1.36616 38.5232 0.656469 37.0065C0.632812 36.5088 0.632812 36.0348 0.632812 35.5608ZM73.3995 46.1308C71.2941 43.7608 69.3307 41.5094 67.2962 39.2816C67.107 39.0683 66.6811 38.9735 66.35 38.9735C63.9607 38.9498 61.5714 38.9498 59.1584 38.9498C58.2595 38.9498 57.3606 38.9498 56.3197 38.9498C58.0939 41.699 58.8982 44.5429 58.5197 47.6475C58.1412 50.7759 56.8165 53.4065 54.4982 55.5158C50.3583 59.284 44.2786 59.9002 39.5474 56.9851C36.4721 55.0892 34.5323 52.3874 33.7516 48.8562C32.9709 45.3013 33.7516 42.0544 35.7387 38.9498C32.2376 38.9498 28.9021 38.9498 25.5665 38.9735C25.3063 38.9735 24.9751 39.092 24.8095 39.2816C22.7987 41.5094 20.8116 43.7845 18.8955 45.9412C19.0137 46.2256 19.0137 46.2967 19.0374 46.3441C23.3192 51.9608 28.2397 56.8903 34.485 60.3505C42.2915 64.6638 50.0981 64.569 57.8574 60.232C61.7843 58.0279 65.2145 55.2077 68.3134 51.9371C70.0167 50.0886 71.6253 48.1452 73.3995 46.1308ZM53.3153 46.2256C53.3153 42.2203 50.0271 38.9498 46.0529 38.9498C42.1023 38.9498 38.814 42.1966 38.7904 46.1545C38.7667 50.1597 42.0313 53.4539 46.0292 53.4776C50.0035 53.5013 53.3153 50.2071 53.3153 46.2256ZM60.1757 33.57C51.3046 27.3845 40.7775 27.4082 31.9537 33.57C41.3689 33.57 50.7368 33.57 60.1757 33.57Z"
                          fill="#6A2DEC"
                        />
                        <path
                          d="M0.632813 5.22477C1.05863 4.37159 1.38981 3.39991 1.95756 2.66523C2.92747 1.40916 4.32319 0.816668 5.90816 0.792969C9.71682 0.792969 13.5255 0.792969 17.3578 0.792969C18.9901 0.792969 20.1729 1.95424 20.1492 3.49471C20.1256 4.98778 18.9664 6.10165 17.3578 6.12535C13.5965 6.14905 9.85876 6.12535 5.95548 6.12535C5.95548 6.45715 5.95548 6.76524 5.95548 7.07333C5.95548 10.4624 5.95548 13.8751 5.95548 17.2641C5.95548 18.8757 5.19847 19.9185 3.85007 20.2502C2.59628 20.5583 1.50809 19.9185 0.77475 18.4728C0.751094 18.4254 0.680125 18.4017 0.632812 18.378C0.632813 13.9936 0.632813 9.60918 0.632813 5.22477Z"
                          fill="#6A2DEC"
                        />
                        <path
                          d="M91.4738 18.3543C91.4028 18.4728 91.3082 18.5913 91.2372 18.7098C90.6222 19.9185 89.4157 20.5346 88.2565 20.2502C86.9791 19.9422 86.1511 18.9231 86.1511 17.5485C86.1275 14.0884 86.1511 10.6283 86.1511 7.16813C86.1511 6.86004 86.1511 6.52824 86.1511 6.12535C84.8264 6.12535 83.5963 6.12535 82.3661 6.12535C79.8822 6.12535 77.3983 6.12535 74.9144 6.12535C73.1638 6.12535 71.981 5.05888 71.9574 3.49471C71.9337 1.90684 73.1402 0.792969 74.9381 0.792969C78.5102 0.792969 82.0823 0.792969 85.678 0.792969C88.706 0.792969 90.4566 2.09644 91.3555 4.98778C91.3792 5.05888 91.4501 5.15367 91.4738 5.22477C91.4738 9.60918 91.4738 13.9936 91.4738 18.3543Z"
                          fill="#6A2DEC"
                        />
                        <path
                          d="M0.632812 74.0734C0.703781 73.9786 0.77475 73.9075 0.822063 73.8127C1.46078 72.5329 2.6436 71.9167 3.85007 72.2011C5.15116 72.5092 5.95548 73.552 5.95548 74.9977C5.95548 78.4104 5.95548 81.8468 5.95548 85.2595C5.95548 85.5913 5.95548 85.8994 5.95548 86.3497C6.31032 86.3497 6.64151 86.3497 6.94904 86.3497C10.3082 86.3497 13.6674 86.3497 17.0503 86.3497C18.7299 86.3497 19.7707 87.0844 20.1019 88.459C20.3858 89.7151 19.7707 90.8052 18.3041 91.5399C18.2567 91.5636 18.2331 91.6347 18.2094 91.6821C13.833 91.6821 9.4566 91.6821 5.08019 91.6821C2.73822 91.0659 1.24788 89.5966 0.632813 87.2503C0.632812 82.8185 0.632812 78.4341 0.632812 74.0734Z"
                          fill="#6A2DEC"
                        />
                        <path
                          d="M73.92 91.6342C73.8254 91.5631 73.7544 91.492 73.6598 91.4446C72.3823 90.8047 71.7673 89.6197 72.0275 88.4348C72.335 87.1313 73.3759 86.3255 74.8189 86.3255C78.2491 86.3255 81.6556 86.3255 85.0858 86.3255C85.4169 86.3255 85.7245 86.3255 86.174 86.3255C86.174 85.97 86.174 85.6382 86.174 85.3301C86.174 81.9648 86.174 78.5995 86.174 75.2342C86.174 73.5515 86.9073 72.5087 88.2794 72.1769C89.5331 71.8925 90.6213 72.5087 91.3547 73.9781C91.3783 74.0255 91.4493 74.0492 91.4966 74.0729C91.4966 78.4573 91.4966 82.818 91.4966 87.2024C90.8816 89.5486 89.3912 91.018 87.0492 91.6342C82.6728 91.6342 78.2727 91.6342 73.92 91.6342Z"
                          fill="#6A2DEC"
                        />
                        <path
                          d="M46.0758 48.8556C44.6328 48.8793 43.4263 47.6706 43.4027 46.2249C43.379 44.7792 44.5855 43.5469 46.0285 43.5469C47.4716 43.5469 48.7017 44.7319 48.7017 46.1775C48.7017 47.6469 47.5189 48.8556 46.0758 48.8556Z"
                          fill="#6A2DEC"
                        />
                      </svg>
                    </div>
                  </div>
                </div>

                <div className="profile__view__uploader">
                  <div className="information__form__overlay__bio__matric__section__entry__heading">
                    Voice Mail
                  </div>
                  <div className="information__form__overlay__bio__matric__section__entry__btns__upload">
                    <div className="information__form__overlay__bio__matric__section__entry__svg">
                      <audio controls src={notification} type="audio/mp3" />
                    </div>
                  </div>
                </div>
                <div className="profile__view__uploader">
                  <div className="information__form__overlay__bio__matric__section__entry__heading">
                    Upload Video
                  </div>
                  <div className="information__form__overlay__bio__matric__section__entry__btns__upload">
                    <div className="information__form__overlay__bio__matric__section__entry__svg">
                      <video controls src={video} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="profile__preview__bottom__certificates">
            <CertificateCardEntry
              close={false}
              validate={true}
              checkvalidatebtn={false}
            />
            <CertificateCardEntry
              close={false}
              validate={false}
              checkvalidatebtn={false}
            />
            <CertificateCardEntry
              close={false}
              validate={false}
              checkvalidatebtn={false}
            />
            <CertificateCardEntry
              close={false}
              validate={false}
              checkvalidatebtn={false}
            />
          </div>
        </div>
      </div>
      {popup ? <VerifyPopup setPopup={setPopup} /> : null}
      {payment ? <Payment setPopup={setPayment} /> : null}
    </>
  );
}
