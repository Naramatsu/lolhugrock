import React, { useState, useContext, useEffect } from "react";
import { isSelected } from "../../utils";
import SelectCustom from "../SelectCustom/SelectCustom";
import Panel from "../Panel/Panel";
import Toggle from "kromac-ui-18/dist/Toggle";
import { ANYFILL, FORM_TYPES, IS_FREE } from "../../utils/constants";
import { FormAppContext } from "../../context/form";
import { LanguajeAppContext } from "../../context/languaje";
import { useHistory } from "react-router-dom";
import "./PreferencePanel.style.scss";

const sectionBuilder = (
  formtype,
  form,
  addPreferences,
  shape,
  preferences,
  formName,
  color,
  languaje
) => {
  switch (formtype) {
    case FORM_TYPES.SELECT:
      return (
        <section className="form__select">
          {form.items.map(({ label, options }, index) => (
            <SelectCustom
              key={index}
              label={label[languaje] || label}
              options={options}
              color={color}
              onSelect={addPreferences}
            />
          ))}
        </section>
      );
    case FORM_TYPES.MULTIPLE:
      return (
        <section
          className="form__select multiple"
          style={{ paddingBottom: "75px" }}
        >
          {form.items.map(({ label, options, type }, index) => {
            if (type === FORM_TYPES.SELECT) {
              const isFree =
                !preferences[label] || preferences[label] === ANYFILL;
              return (
                <section key={index} className="form__select__champions">
                  <SelectCustom
                    label={label[languaje]}
                    options={options}
                    noImage
                    multiple
                    color={color}
                    onSelect={addPreferences}
                  />
                  {isFree && (
                    <label className="label__free">{IS_FREE[languaje]}</label>
                  )}
                </section>
              );
            } else {
              return (
                <section className="select__custom" key={index}>
                  <label>{label[languaje]}</label>
                  <Toggle
                    onColor={color}
                    offColor="#fff"
                    checked={preferences[label[languaje]] || false}
                    onChange={(event) => {
                      addPreferences(label[languaje], event.target.checked);
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
              onClick={() => addPreferences(form.name[languaje], value)}
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
  const { languaje } = useContext(LanguajeAppContext);
  const { setForm, resetForm } = useContext(FormAppContext);
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
        color,
        languaje
      )}
    </Panel>
  );
};

export default PreferencePanel;
