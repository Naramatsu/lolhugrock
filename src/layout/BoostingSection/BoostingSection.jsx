/* eslint-disable react-hooks/exhaustive-deps */
import React, { useContext, useEffect } from "react";
import BackgroundAnimated from "../BackgroundAnimated";
import CardDivision from "../../components/CardDivision";
import Footer from "../Footer";
import GridLayout from "../GridLayout";
import OrderSummary from "../../components/OrderSummary";
import Panel from "../../components/Panel";
import PreferencePanel from "../../components/PreferencePanel";
import queryString from "query-string";
import {
  convertColor,
  formRankBuilder,
  isOrderEmptyValidator,
} from "../../utils";
import { formAdditionalPreferences, formPreferences } from "./data";
import { LanguajeAppContext } from "../../context/languaje";
import { FormAppContext } from "../../context/form";
import { useHistory } from "react-router-dom";
import "./BoostingSection.style.scss";

const BoostingSection = ({ title, color }) => {
  const { languaje } = useContext(LanguajeAppContext);
  const { resetForm, form, setFormByUrl } = useContext(FormAppContext);
  const colorFormatted = convertColor(color);
  const formRank = formRankBuilder(title);
  const isFormLoaded = form && Object.keys(form[title] || []).length;
  const formProperties = form[title];
  const history = useHistory();
  // const params = history.location.search;
  const params = queryString.parse(history.location.search);
  const isOrderEmpty = isOrderEmptyValidator(formProperties);
  const paramsFormName = Object.keys(JSON.parse(params?.form || "{}")).at(0);

  useEffect(() => {
    resetForm(title, languaje);
  }, [title, languaje]);

  useEffect(() => {
    // if (isOrderEmpty && params?.form) setFormByUrl(JSON.parse(params.form));
    if (isOrderEmpty && params?.form && paramsFormName === title)
      setFormByUrl(JSON.parse(params.form));
  }, [params.form, isOrderEmpty, history.location.search, title]);

  useEffect(() => {
    if (Object.keys(form).length)
      history.push({
        pathname: history.location.pathname,
        search: `?form=${JSON.stringify(form)}`,
      });
  }, [params, form, history.location.pathname]);

  return (
    <>
      <BackgroundAnimated color={colorFormatted}>
        <section className="boosting__section">
          <h2 style={{ color: colorFormatted }}>{title}</h2>
          <GridLayout
            template="2fr 1fr"
            classNames="boosting__section__container"
          >
            {isFormLoaded && (
              <GridLayout
                template="1fr 1fr"
                classNames="boosting__section__container__preferences"
              >
                {formPreferences.map((preference, index) => (
                  <PreferencePanel
                    key={index}
                    type={preference.type}
                    title={title}
                    formName={preference.name[languaje]}
                    form={preference}
                    color={colorFormatted}
                    shape={preference.shape}
                  />
                ))}
                <GridLayout template="3fr" gridColumn="span 2">
                  <PreferencePanel
                    type={formAdditionalPreferences.type}
                    title={title}
                    formName={formAdditionalPreferences.name[languaje]}
                    form={formAdditionalPreferences}
                    color={colorFormatted}
                  />
                </GridLayout>
                <GridLayout
                  template="3fr"
                  gridColumn="span 2"
                  classNames="grid__card__division"
                >
                  <Panel title={title} color={colorFormatted}>
                    {formRank.map((rank, index) => (
                      <CardDivision
                        key={index}
                        title={title}
                        formName={rank.name[languaje]}
                        label={rank.label[languaje]}
                        items={rank.items}
                        type={rank.type}
                        color={colorFormatted}
                        max={rank.max}
                        min={rank.min}
                      />
                    ))}
                  </Panel>
                </GridLayout>
              </GridLayout>
            )}
            <OrderSummary color={colorFormatted} />
          </GridLayout>
        </section>
      </BackgroundAnimated>
      <Footer color={colorFormatted} />
    </>
  );
};

export default BoostingSection;
