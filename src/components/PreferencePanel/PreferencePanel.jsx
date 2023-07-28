import React, { useState } from "react";
import { isSelected } from "../../utils";
import "./PreferencePanel.style.scss";

const PreferencePanel = ({ title, form, color, formName, type = "" }) => {
  const [preferences, setPreferences] = useState({});
  const addPreferences = (name, item) => {
    setPreferences({
      ...preferences,
      [name]: item,
    });
  };

  return (
    <section className={`preference__panel`}>
      <p className="preference__panel__title" style={{ background: color }}>
        {title}
      </p>
      <section className="form__container" style={{ "--cl": color }}>
        {form.items.map(({ name, value }, index) => (
          <label
            key={index}
            className={`form__choose ${type} ${isSelected(
              preferences[formName],
              value
            )}`}
            onClick={() => addPreferences(form.name, value)}
          >
            {name}
          </label>
        ))}
      </section>
    </section>
  );
};

export default PreferencePanel;
