import React, { useState } from "react";

import CertificateCardEntry from "./Certificatecardentry";
import { Widget } from "react-cloudinary-upload-widget";
import { addimage } from "../assets";

export default function AddCertificate() {
  const [certificates, setCertificates] = useState([]);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [images, setImages] = useState([]);

  return (
    <div className="information__form__overlay__add__certificate">
      <div className="information__form__overlay__add__certificate__container">
        <div className="information__form__overlay__add__certificate__heading">
          Add certificate
        </div>
        <div className="information__form__overlay__add__certificate__data">
          <div className="information__form__overlay__add__certificate__data__left">
            <>
              <div className="add__certificate__profile__image__upload">
                <Widget
                  sources={["local"]}
                  resourceType="image"
                  cloudName="mehfoozurrehman"
                  uploadPreset="cqido5en"
                  buttonText={
                    <div className=" add__certificate__profile__image__upload__input__content">
                      <img src={addimage} alt="addimage" />
                    </div>
                  }
                  style={{
                    border: "none",
                    borderRadius: 5,
                    cursor: "pointer",
                    width: "100%",
                  }}
                  onSuccess={(e) => {
                    setImages([
                      ...images,
                      "https://res.cloudinary.com/mehfoozurrehman/image/upload/c_crop/" +
                        e.info.path,
                    ]);
                    window.scroll({
                      overflow: auto,
                    });
                    console.log(e);
                  }}
                  onFailure={(e) => {
                    console.log(e);
                  }}
                  folder="qr"
                  cropping={true}
                  multiple={false}
                  autoClose={false}
                  logging={true}
                  use_filename={true}
                  destroy={true}
                  apiKey={915662453295273}
                />
              </div>
              <div className="add__certificate__profile__image__upload__small__image__data">
                {images[0] ? (
                  <img
                    src={images[0]}
                    className="add__certificate__profile__image__upload__small__image"
                  />
                ) : (
                  <div className="add__certificate__profile__image__upload__small__image">
                    <img
                      src={addimage}
                      alt="addimage"
                      className="add__certificate__profile__image__upload__input__content__svg"
                    />
                  </div>
                )}
                {images[1] ? (
                  <img
                    src={images[1]}
                    className="add__certificate__profile__image__upload__small__image"
                  />
                ) : (
                  <div className="add__certificate__profile__image__upload__small__image">
                    <img
                      src={addimage}
                      alt="addimage"
                      className="add__certificate__profile__image__upload__input__content__svg"
                    />
                  </div>
                )}
                {images[2] ? (
                  <img
                    src={images[2]}
                    className="add__certificate__profile__image__upload__small__image"
                  />
                ) : (
                  <div className="add__certificate__profile__image__upload__small__image">
                    <img
                      src={addimage}
                      alt="addimage"
                      className="add__certificate__profile__image__upload__input__content__svg"
                    />
                  </div>
                )}
              </div>
            </>
          </div>
          <div className="information__form__overlay__add__certificate__data__right">
            <label className="information__form__overlay__add__certificate__data__right__input">
              <input
                type="text"
                placeholder="Name"
                value={name}
                onChange={(e) => {
                  setName(e.target.value);
                }}
              />
              <div className="information__form__overlay__add__certificate__data__right__inputerror"></div>
            </label>
            <label className="information__form__overlay__add__certificate__data__right__input">
              <textarea
                type="text"
                placeholder="Type"
                value={description}
                onChange={(e) => {
                  setDescription(e.target.value);
                }}
              />
              <div className="information__form__overlay__add__certificate__data__right__inputerror"></div>
            </label>
            <div className="information__form__overlay__add__certificate__data__right__save">
              <button
                className="information__form__overlay__add__certificate__data__right__button"
                onClick={() => {
                  if (name.length === 0) {
                    console.log("dsfjkdsajfkldsja");
                  } else {
                    setCertificates([
                      ...certificates,
                      { name: name, description: description, images: images },
                    ]);
                    setName("");
                    setDescription("");
                    setImages([]);
                  }
                }}
              >
                Save
              </button>
            </div>
          </div>
        </div>
      </div>
      {certificates.length > 0 ? (
        <div className="certificates__data__container">
          {certificates.map((certificate, index) => (
            <CertificateCardEntry
              key={index}
              data={certificate}
              close={() => {
                setCertificates(certificates.filter((_, i) => i !== index));
              }}
              validate={false}
              checkvalidatebtn={false}
            />
          ))}
        </div>
      ) : (
        <div style={{ height: 50 }} />
      )}
    </div>
  );
}
