import React, { useState } from "react";
import ModalSidebar from "./ModalSidebar";
import Topbar from "./Topbar";

const Youtube = () => {
  const [showSidebar, setShowSidebar] = useState(false);
  const openSidebar = () => setShowSidebar(true);
  const hideSidebar = () => setShowSidebar(false);

  return (
    <div>
      <Topbar onOpenSidebar={openSidebar} />
      {showSidebar && <ModalSidebar onClose={hideSidebar} />}
    </div>
  );
};

export default Youtube;
