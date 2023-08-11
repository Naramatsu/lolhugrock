import React, { useState, useContext, useEffect } from "react";
import { isSelected } from "../../utils";
import SelectCustom from "../SelectCustom/SelectCustom";
import Panel from "../Panel/Panel";
import Toggle from "kromac-ui-18/dist/Toggle";
import "./PreferencePanel.style.scss";
import { AppContext } from "../../context";
import { useHistory } from "react-router-dom";

const sectionBuilder = (
  formtype,
  form,
  addPreferences,
  shape,
  preferences,
  formName,
  color
) => {
  switch (formtype) {
    case "select":
      return (
        <section className="form__select">
          {form.items.map(({ label, options }, index) => (
            <SelectCustom
              key={index}
              label={label}
              options={options}
              color={color}
              onSelect={addPreferences}
            />
          ))}
        </section>
      );
    case "multiple":
      return (
        <section className="form__select" style={{ paddingBottom: "75px" }}>
          {form.items.map(({ label, options, type }, index) => {
            if (type === "select") {
              const isFree =
                !preferences[label] || preferences[label] === "Any";
              return (
                <section key={index} className="form__select__champions">
                  <SelectCustom
                    label={label}
                    options={options}
                    noImage
                    multiple
                    color={color}
                    onSelect={addPreferences}
                  />
                  {isFree && <label className="label__free">Gratis</label>}
                </section>
              );
            } else {
              return (
                <section className="select__custom" key={index}>
                  <label>{label}</label>
                  <Toggle
                    onColor={color}
                    offColor="#fff"
                    checked={preferences[label] || false}
                    onChange={(event) => {
                      addPreferences(label, event.target.checked);
                    }}
                  />
                </section>
              );
            }
          })}
        </section>
      );
    default:
      return (
        <section className="form__select">
          {form.items.map(({ name, value }, index) => (
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
          ))}
        </section>
      );
  }
};

const PreferencePanel = ({
  title,
  form: formItems,
  color,
  formName,
  shape = "",
  type = "",
}) => {
  const [preferences, setPreferences] = useState({});
  const { setForm, resetForm } = useContext(AppContext);
  const history = useHistory();

  useEffect(() => {
    resetForm();
    setPreferences({});
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [history.location.pathname]);

  const addPreferences = (name, item) => {
    setPreferences({
      ...preferences,
      [name]: item,
    });
    setForm({
      title,
      property: name,
      item,
    });
  };

  return (
    <Panel title={formName} color={color}>
      {sectionBuilder(
        type,
        formItems,
        addPreferences,
        shape,
        preferences,
        formName,
        color
      )}
    </Panel>
  );
};

export default PreferencePanel;
