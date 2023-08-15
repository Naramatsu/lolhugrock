import React, { useContext } from "react";
import { LanguajeAppContext } from "../../context/languaje";
import { FOOTER_LABEL } from "../../utils/constants";

const Footer = ({ color }) => {
  const { languaje } = useContext(LanguajeAppContext);
  return (
    <footer style={{ background: color }}>
      <p>{FOOTER_LABEL[languaje]}</p>
    </footer>
  );
};

export default Footer;
