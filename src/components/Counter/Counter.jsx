import React from "react";
import { AiFillMinusCircle, AiFillPlusCircle } from "react-icons/ai";
import "./Counter.style.scss";

const Counter = ({ handlerAdd, handlerReduce, value }) => (
  <section className="counter">
    <AiFillMinusCircle fontSize="50" onClick={handlerReduce} />
    <section className="counter__value__container">
      <p className="counter__value">{value}</p>
    </section>
    <AiFillPlusCircle fontSize="50" onClick={handlerAdd} />
  </section>
);

export default Counter;
