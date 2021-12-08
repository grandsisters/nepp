import React, { useState } from "react";
import ModalSideBar from "./ModalSibeBar";
import Topbar from "./Topbar";

const Youtube = () => {
  const [activeSide, setActiveSide] = useState(false);
  const handleSideBar = () => setActiveSide(!activeSide);
  const sideFalse = () => setActiveSide(false);
  return (
    <div>
      <Topbar onClick={handleSideBar} />
      {activeSide && <ModalSideBar onClose={sideFalse} />}
    </div>
  );
};

export default Youtube;
