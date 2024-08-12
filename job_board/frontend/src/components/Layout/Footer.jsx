import React, { useContext } from "react";
import { Context } from "../../main";

const Footer = () => {
  const { isAuthorized } = useContext(Context);
  return (
    <footer className={isAuthorized ? "footerShow" : "footerHide"}>
      <div className="center-footer">&copy; All Rights Reserved By JobZee.</div>
    </footer>
  );
};

export default Footer;
