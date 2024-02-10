import React, { useState, useContext, useEffect } from "react";
import Panel from "../Panel";
import SelectChip from "../SelectChip";
import SelectCustom from "../SelectCustom";
import Toggle from "kromac-ui-18/dist/Toggle";
import { FORM_TYPES, IS_FREE } from "../../utils/constants";
import { FormAppContext } from "../../context/form";
import { LanguajeAppContext } from "../../context/languaje";
import { useHistory } from "react-router-dom";
import "./PreferencePanel.style.scss";

const isSelectedOrder = (orderSummary, labelLanguaje, label) =>
  orderSummary.find(
    (os) => (os.label === labelLanguaje || os.label === label) && os.item
  )?.item;

const sectionBuilder = (
  formtype,
  form,
  addPreferences,
  shape,
  preferences,
  formName,
  color,
  languaje,
  orderSummary
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
              selected={isSelectedOrder(orderSummary, label[languaje], label)}
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
              const champList = isSelectedOrder(
                orderSummary,
                label[languaje],
                label
              );
              const isFree = !champList?.length;
              return (
                <section key={index} className="form__select__champions">
                  <SelectCustom
                    label={label[languaje]}
                    options={options}
                    noImage
                    multiple
                    color={color}
                    onSelect={addPreferences}
                    selected={champList}
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
                    checked={
                      preferences[label[languaje]] ||
                      orderSummary.find(
                        (os) => os.label === label[languaje] && os.item
                      )?.item ||
                      ""
                    }
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
            <SelectChip
              key={index}
              shape={shape}
              label={form.name[languaje]}
              value={value}
              name={name}
              onSelect={addPreferences}
              selected={isSelectedOrder(orderSummary, form.name[languaje])}
            />
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
  const { setForm, form } = useContext(FormAppContext);
  const formNames = Object.keys(form).join("");
  const formProperties = form[formNames];
  const orderSummary = Object.keys(formProperties).map((s) => ({
    label: s,
    item: formProperties[s],
  }));
  const history = useHistory();

  useEffect(() => {
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
        languaje,
        orderSummary
      )}
    </Panel>
  );
};

export default PreferencePanel;
