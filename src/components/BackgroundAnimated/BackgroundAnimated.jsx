import React, { useEffect, useRef } from "react";
import { useHistory } from "react-router-dom";
import "./BackgroundAnimated.style.scss";

const circlesLength = 20;

const randomLeft = (index) => {
  const slot = window.innerWidth / circlesLength;
  return slot * index + "px";
};

const circles = () => {
  const result = [];
  while (result.length < circlesLength) {
    const posibleCase = Math.floor(Math.random() * circlesLength);
    if (!result.includes(posibleCase)) result.push(posibleCase);
  }
  return result;
};

const BackgroundAnimated = ({ color, children }) => {
  const ref = useRef(null);
  const history = useHistory();

  useEffect(() => {
    if (ref) ref.current.scrollIntoView({ behavior: "smooth", block: "start" });
  }, [ref, history.location.pathname]);

  return (
    <section className="lines" ref={ref}>
      {circles().map((circle, index) => (
        <div
          key={circle}
          className="circle"
          style={{
            left: `calc(${randomLeft(index)} + 2%)`,
            animationDelay: `${circle}s`,
            "--bg": color,
          }}
        ></div>
      ))}
      <section className="lines__container kromac-scroll container-lg">
        {children}
      </section>
    </section>
  );
};

export default BackgroundAnimated;
