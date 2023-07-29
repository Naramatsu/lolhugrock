import React, { useState } from "react";
import { isSelected } from "../../utils";
import "./PreferencePanel.style.scss";
import SelectCustom from "../SelectCustom/SelectCustom";

const PreferencePanel = ({
  title,
  form,
  color,
  formName,
  shape = "",
  type = "",
}) => {
  const [preferences, setPreferences] = useState({});

  const addPreferences = (name, item) => {
    setPreferences({
      ...preferences,
      [name]: item,
    });
  };

  const isSelectForm = type === "select";

  return (
    <section className={`preference__panel`}>
      <p className="preference__panel__title" style={{ background: color }}>
        {title}
      </p>
      <section className="form__container" style={{ "--cl": color }}>
        {isSelectForm ? (
          <section className="form__select">
            {form.items.map(({ label, options }, index) => (
              <SelectCustom
                key={index}
                label={label}
                options={options}
                onSelect={addPreferences}
              />
            ))}
          </section>
        ) : (
          form.items.map(({ name, value }, index) => (
            <label
              key={index}
              className={`form__choose ${shape} ${isSelected(
                preferences[formName],
                value
              )}`}
              onClick={() => addPreferences(form.name, value)}
            >
              {name}
            </label>
          ))
        )}
      </section>
    </section>
  );
};

export default PreferencePanel;
