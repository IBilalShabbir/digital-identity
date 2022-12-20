import {
  Profileheader,
  informationformbg,
  notification,
  user,
  video,
} from "../assets";

import CertificateCardEntry from "../components/Certificatecardentry";
import React from "react";
import { useNavigate } from "react-router-dom";

export default function profile() {
  const navigate = useNavigate();
  return (
    <>
      <div className="block__chain__banner">
        <img
          src={informationformbg}
          className="block__chain__banner__img"
          alt="informationformbg"
        />
        <div className="profile__page__overlay">
          <div className="profile__page__overlay__header">
            <button
              onClick={() => {
                window.print();
              }}
              className="profile__page__overlay__header__btn"
            >
              Print
            </button>
            <button
              onClick={() => {
                navigate("/");
              }}
              className="profile__page__overlay__header__btn"
            >
              Logout
            </button>
          </div>
          <img
            src={Profileheader}
            alt="Profileheader"
            className="profile__header__img"
          />
          <div className="profile__page__overlay__content">
            <div className="profile__page__overlay__content__img">
              <img src={user} alt="" />
            </div>
            <div className="profile__page__overlay__content__user__name">
              John doe
            </div>
            <div className="profile__page__overlay__content__user__button">
              <button>India</button>
            </div>
            <div className="profile__page__overlay__content__user__contact__info">
              0300-1234567
            </div>
            <div className="profile__page__overlay__content__user__contact__info">
              johndoe@gmail.com
            </div>
            <div
              className="profile__page__overlay__content__user__block__hash"
              style={{ marginTop: "1em" }}
            >
              Block hash #
            </div>
            <div className="profile__page__overlay__content__user__block__hash">
              Transaction Id
            </div>
            <div className="profile__page__overlay__content__user__block__detail">
              <div className="profile__page__overlay__content__user__block__detail__left">
                <div className="profile__page__overlay__content__user__block__detail__left__entry">
                  <div className="profile__page__overlay__content__user__block__detail__left__entry__heading">
                    Father's name:
                  </div>
                  <div className="profile__page__overlay__content__user__block__detail__left__entry__subheading">
                    Bader proj
                  </div>
                </div>
                <div className="profile__page__overlay__content__user__block__detail__left__entry">
                  <div className="profile__page__overlay__content__user__block__detail__left__entry__heading">
                    Mother's name:
                  </div>
                  <div className="profile__page__overlay__content__user__block__detail__left__entry__subheading">
                    Elena proj
                  </div>
                </div>
                <div className="profile__page__overlay__content__user__block__detail__left__entry">
                  <div className="profile__page__overlay__content__user__block__detail__left__entry__heading">
                    Guardian:
                  </div>
                  <div className="profile__page__overlay__content__user__block__detail__left__entry__subheading">
                    Name here
                  </div>
                </div>
                <div className="profile__page__overlay__content__user__block__detail__left__entry">
                  <div className="profile__page__overlay__content__user__block__detail__left__entry__heading">
                    Date of birth:
                  </div>
                  <div className="profile__page__overlay__content__user__block__detail__left__entry__subheading">
                    12-sep-2000
                  </div>
                </div>
                <div className="profile__page__overlay__content__user__block__detail__left__entry">
                  <div className="profile__page__overlay__content__user__block__detail__left__entry__heading">
                    Blood group:
                  </div>
                  <div className="profile__page__overlay__content__user__block__detail__left__entry__subheading">
                    AB+
                  </div>
                </div>
                <div className="profile__page__overlay__content__user__block__detail__left__entry">
                  <div className="profile__page__overlay__content__user__block__detail__left__entry__heading">
                    Distinguish Mark:
                  </div>
                  <div className="profile__page__overlay__content__user__block__detail__left__entry__subheading">
                    Mark Here
                  </div>
                </div>
              </div>
              <div className="profile__page__overlay__content__user__block__detail__right">
                <div className="profile__page__overlay__content__user__block__detail__right__entry">
                  <div className="profile__page__overlay__content__user__block__detail__left__entry__heading">
                    Address:
                  </div>
                  <div className="profile__page__overlay__content__user__block__detail__left__entry__subheading">
                    Address here ...
                  </div>
                </div>
                <div className="profile__page__overlay__content__user__block__detail__right__entry">
                  <div className="profile__page__overlay__content__user__block__detail__left__entry__heading">
                    Street:
                  </div>
                  <div className="profile__page__overlay__content__user__block__detail__left__entry__subheading">
                    Street number here
                  </div>
                </div>
                <div className="profile__page__overlay__content__user__block__detail__right__entry">
                  <div className="profile__page__overlay__content__user__block__detail__left__entry__heading">
                    City:
                  </div>
                  <div className="profile__page__overlay__content__user__block__detail__left__entry__subheading">
                    Mumbai
                  </div>
                </div>
                <div className="profile__page__overlay__content__user__block__detail__right__entry">
                  <div className="profile__page__overlay__content__user__block__detail__left__entry__heading">
                    State:
                  </div>
                  <div className="profile__page__overlay__content__user__block__detail__left__entry__subheading">
                    Name here
                  </div>
                </div>
                <div className="profile__page__overlay__content__user__block__detail__right__entry">
                  <div className="profile__page__overlay__content__user__block__detail__left__entry__heading">
                    Area:
                  </div>
                  <div className="profile__page__overlay__content__user__block__detail__left__entry__subheading">
                    Name here
                  </div>
                </div>
                <div className="profile__page__overlay__content__user__block__detail__right__entry">
                  <div className="profile__page__overlay__content__user__block__detail__left__entry__heading">
                    Zip:
                  </div>
                  <div className="profile__page__overlay__content__user__block__detail__left__entry__subheading">
                    321200
                  </div>
                </div>
              </div>
            </div>
            <div className="profile__page__overlay__content__uploads">
              <div className="profile__page__overlay__content__uploads__container">
                <div className="profile__file__uploader">
                  <div className="information__form__overlay__bio__matric__section__entry__heading">
                    Face Recongnition
                  </div>
                  <div className="information__form__overlay__bio__matric__section__entry__btns__upload">
                    <div className="information__form__overlay__bio__matric__section__entry__svg">
                      <img src={user} alt="user" />
                    </div>
                  </div>
                </div>
                <div className="profile__file__uploader">
                  <div className="information__form__overlay__bio__matric__section__entry__heading">
                    Bio Matric
                  </div>
                  <div className="information__form__overlay__bio__matric__section__entry__btns__upload">
                    <div className="information__form__overlay__bio__matric__section__entry__svg">
                      <img src={user} alt="user" />
                    </div>
                  </div>
                </div>

                <div className="profile__file__uploader">
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

                <div className="profile__file__uploader">
                  <div className="information__form__overlay__bio__matric__section__entry__heading">
                    Voice Mail
                  </div>
                  <div className="information__form__overlay__bio__matric__section__entry__btns__upload">
                    <div className="information__form__overlay__bio__matric__section__entry__svg">
                      <audio controls src={notification} type="audio/mp3" />
                    </div>
                  </div>
                </div>
                <div className="profile__file__uploader">
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
          <div className="profile__page__overlay__content__certificates">
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
    </>
  );
}
