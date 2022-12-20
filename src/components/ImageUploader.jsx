import { captureAtom, imageAtom, showUploaderAtom } from "../global/profilePic";

import { Plus } from "react-feather";
import React from "react";
import { addimage } from "../assets";
import { useAtom } from "jotai";

export function ImageUploader() {
  const [image, setImage] = useAtom(imageAtom);
  const [cameraCapture, setCameraCapture] = useAtom(captureAtom);
  const [, setShowUploader] = useAtom(showUploaderAtom);
  console.log(image);
  console.log(cameraCapture);

  return (
    <div className="information__form__overlay__profile__image__upload">
      {image === null && cameraCapture === null ? (
        <div className="information__form__overlay__profile__image__upload__input__content">
          <img src={addimage} alt="addimage" />
        </div>
      ) : null}
      {image === null ? null : (
        <img
          src={URL.createObjectURL(image)}
          alt={image}
          className="information__form__overlay__profile__image__upload__input__content"
        />
      )}
      {cameraCapture === null ? null : (
        <img
          src={cameraCapture}
          alt={cameraCapture}
          className="information__form__overlay__profile__image__upload__input__content"
        />
      )}
      <button
        className="information__form__overlay__profile__image__upload__input__content__picker"
        onClick={() => {
          setShowUploader(true);
        }}
      ></button>
    </div>
  );
}
