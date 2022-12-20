import { Camera, Upload } from "react-feather";
import React, { useState } from "react";
import { captureAtom, imageAtom, showUploaderAtom } from "../global/profilePic";

import Webcam from "react-webcam";
import { useAtom } from "jotai";

export function ImageUploaderPopup() {
  const [camera, setCamera] = useState(false);
  const [image, setImage] = useState(null);
  const [cameraCapture, setCameraCapture] = useState(null);

  const [, setImageGlobal] = useAtom(imageAtom);
  const [, setCameraCaptureGlobal] = useAtom(captureAtom);
  const [, setShowUploader] = useAtom(showUploaderAtom);
  return (
    <div className="image__uploader__popup">
      <div className="image__uploader__popup__form">
        <div className="image__uploader__popup__form__background">
          <div className="image__uploader__popup__form__top">
            {image === null && cameraCapture === null ? (
              camera ? (
                <div className="image__uploader__popup__camera">
                  <Webcam>
                    {({ getScreenshot }) => (
                      <div className="capture__pic__btn">
                        <button
                          onClick={() => {
                            setCameraCapture(getScreenshot());
                            setCamera(false);
                          }}
                        >
                          Capture
                        </button>
                      </div>
                    )}
                  </Webcam>
                  {cameraCapture === null ? null : (
                    <img
                      src={cameraCapture}
                      alt=""
                      className="image__uploader__popup__img"
                    />
                  )}
                </div>
              ) : image === null ? (
                <div className="image__uploader__popup__form__content">
                  <div className="image__uploader__popup__form__content__entry">
                    <input
                      type="file"
                      accept="image/*"
                      onChange={(e) => {
                        setImage(e.target.files[0]);
                      }}
                      className="image__uploader__popup__form__content__entry__input"
                    />
                    <div className="image__uploader__popup__form__content__entry__content">
                      <Upload size={20} color="currentColor" />
                      Upload
                    </div>
                  </div>
                  <div
                    className="image__uploader__popup__form__content__entry"
                    onClick={() => {
                      setCamera(true);
                    }}
                  >
                    <div className="image__uploader__popup__form__content__entry__content">
                      <Camera size={20} color="currentColor" />
                      Camera
                    </div>
                  </div>
                </div>
              ) : null
            ) : null}
            {image === null ? null : (
              <img
                src={URL.createObjectURL(image)}
                alt=""
                className="image__uploader__popup__img"
              />
            )}
            {cameraCapture === null ? null : (
              <img
                src={cameraCapture}
                alt=""
                className="image__uploader__popup__img"
              />
            )}
          </div>
          <button
            className="close__pop__up__btn"
            onClick={() => {
              setShowUploader(false);
              setCameraCaptureGlobal(cameraCapture);
              setImageGlobal(image);
              setTimeout(() => {
                setImage(null);
                setCameraCapture(null);
              }, 3000);
            }}
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}
