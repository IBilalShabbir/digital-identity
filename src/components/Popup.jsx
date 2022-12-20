import React from "react";
import { ShareSocial } from "react-share-social";
import { X } from "react-feather";

export function Popup({ setPopup }) {
  return (
    <div className="share__pop__up">
      <div className="share__pop__up__overlay">
        <div className="share__pop__up__overlay__card">
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
          <div className="share__pop__up__overlay__card__text">
            <ShareSocial
              socialTypes={[
                "facebook",
                "twitter",
                "whatsapp",
                "linkedin",
                "line",
                "viber",
                "telegram",
              ]}
              url="https://www.google.com"
            />
          </div>
          <div className="secure__digital__pop__up__overlay__card__button">
            <button
              onClick={() => {
                setPopup(!true);
              }}
            >
              Back
            </button>
            <button>Send</button>
          </div>
        </div>
      </div>
    </div>
  );
}
