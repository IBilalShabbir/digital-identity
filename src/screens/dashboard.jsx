import React, { useState } from "react";

import Blockchainbanner from "../components/Blockchainbanner";
import Blockchaincertificates from "../components/Blockchaincertificates";

export default function dashboard() {
  const [identity, setIdentity] = useState(
    window.localStorage.getItem("isNotFirst") || false
  );

  return (
    <>
      <Blockchainbanner identity={!identity} setIdentity={setIdentity} />
      {identity && <Blockchaincertificates />}
    </>
  );
}
