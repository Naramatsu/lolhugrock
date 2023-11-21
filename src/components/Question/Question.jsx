import React, { useState } from "react";
import { GoTriangleDown } from "react-icons/go";
import "./Question.style.scss";

const Question = ({ id, title, description }) => {
  const [isShowPanel, setIsShowPanel] = useState(false);
  const isVisible = isShowPanel ? "" : "hidden";
  return (
    <section className={`question__container ${isVisible}`}>
      <h4 onClick={() => setIsShowPanel(!isShowPanel)}>
        {id}. {title}
        <GoTriangleDown />
      </h4>
      <p>{description}</p>
    </section>
  );
};

export default Question;
