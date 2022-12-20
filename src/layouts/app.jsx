import { Footer, Header } from "components";
import { Outlet, useLocation } from "react-router-dom";
import React, { useEffect, useState } from "react";
import { ImageUploaderPopup } from "../components/ImageUploaderPopup";
import { WidgetLoader } from "react-cloudinary-upload-widget";
import { showUploaderAtom } from "../global/profilePic";
import { useAtom } from "jotai";

export default function App() {
  const location = useLocation();
  const [show, setShow] = useState(true);
  const [showUploader] = useAtom(showUploaderAtom);
  document.addEventListener("contextmenu", (event) => event.preventDefault());
  useEffect(() => {
    if (location.pathname.includes("/enterOtp")) {
      setShow(false);
    } else if (location.pathname.includes("/emailVerify")) {
      setShow(false);
    } else if (location.pathname.includes("/signIn")) {
      setShow(false);
    } else if (location.pathname.includes("/createAccount")) {
      setShow(false);
    } else if (location.pathname.includes("/forgotPassword")) {
      setShow(false);
    } else if (location.pathname.includes("/secureDigitalPopUp")) {
      setShow(false);
    } else {
      setShow(true);
    }
  }, [location]);
  return (
    <>
      {showUploader && <ImageUploaderPopup />}
      <WidgetLoader />
      {show ? <Header /> : null}
      <Outlet />
      {show ? <Footer /> : null}
    </>
  );
}
