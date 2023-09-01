import React from "react";
import Counter from "../Counter";
import { FORM_TYPES, PREFERENCES_PROPERTIES } from "../../utils/constants";

const CardDivisionRange = ({
  addPreferences,
  tilt,
  max,
  label,
  color,
  min,
  handlerAdd,
  handlerReduce,
  value,
}) => (
  <section className="card__division__range__input" ref={tilt}>
    <label>{label}</label>
    <Counter
      handlerAdd={handlerAdd}
      handlerReduce={handlerReduce}
      value={value}
    />
    <section className="range">
      0
      <input
        style={{ "--cl": color }}
        type={FORM_TYPES.RANGE}
        min={min}
        max={max}
        step="1"
        value={value}
        name={PREFERENCES_PROPERTIES.NRO_GAMES}
        onChange={(event) =>
          addPreferences(PREFERENCES_PROPERTIES.NRO_GAMES, event.target.value)
        }
      />
      {max}
    </section>
  </section>
);

export default CardDivisionRange;
