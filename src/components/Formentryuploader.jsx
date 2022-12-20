import React, { useState } from "react";

export function Formentryuploader({ heading, svg, audio, video }) {
  const [data, setData] = useState(null);
  return (
    <div className="information__form__overlay__bio__matric__section__entry">
      <div className="information__form__overlay__bio__matric__section__entry__heading">
        {heading}
      </div>
      {audio ? (
        <div className="information__form__overlay__bio__matric__section__entry__svg">
          {data === null ? (
            svg
          ) : (
            <audio controls src={URL.createObjectURL(data)} />
          )}
        </div>
      ) : video ? (
        <div className="information__form__overlay__bio__matric__section__entry__svg">
          {data === null ? (
            svg
          ) : (
            <video controls src={URL.createObjectURL(data)} />
          )}
        </div>
      ) : (
        <div className="information__form__overlay__bio__matric__section__entry__svg">
          {data === null ? (
            svg
          ) : (
            <img src={URL.createObjectURL(data)} alt={data} />
          )}
        </div>
      )}
      <div
        className="information__form__overlay__bio__matric__section__entry__btns"
        // style={audio || video ? { justifyContent: "center" } : null}
      >
        <div className="information__form__overlay__bio__matric__section__entry__btns__upload">
          <input
            type="file"
            onChange={(e) => {
              setData(e.target.files[0]);
            }}
            accept={video ? "video/*" : audio ? "audio/*" : "images/*"}
            className="information__form__overlay__bio__matric__section__entry__btns__input"
          />
          <div className="information__form__overlay__bio__matric__section__entry__btns__input__label ">
            Upload
          </div>
        </div>
        {audio || video ? null : <button>Scan</button>}
        {audio || video ? <button>Record</button> : null}
      </div>
    </div>
  );
}
