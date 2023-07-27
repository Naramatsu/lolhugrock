import React from "react";
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

const BackgroundAnimated = ({ children }) => (
  <section className="lines">
    {circles().map((circle, index) => (
      <div
        key={circle}
        className="circle"
        style={{
          left: `calc(${randomLeft(index)} + 2%)`,
          animationDelay: `${circle}s`,
        }}
      ></div>
    ))}
    <section className="lines__container kromac-scroll">{children}</section>
  </section>
);

export default BackgroundAnimated;
