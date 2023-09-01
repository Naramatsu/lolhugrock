import React, { useContext } from "react";
import BackgroundAnimated from "../BackgroundAnimated";
import CardCoach from "../CardCoach";
import Footer from "../Footer";
import GridLayout from "../GridLayout";
import Header from "../Header";
import MainBanner from "../MainBanner";
import { coachesList, mainDescription, ourCoachsTitle } from "./data";
import { COLORS, ROUTES, TITLES } from "../../utils/constants";
import { convertColor } from "../../utils";
import { LanguajeAppContext } from "../../context/languaje";
import "./Coaching.style.scss";

const Coaching = () => {
  const { languaje } = useContext(LanguajeAppContext);
  const colorFormatted = convertColor(COLORS.GOLD);
  return (
    <>
      <Header />
      <MainBanner path={ROUTES.COACHING} title={TITLES.COACHING}>
        <section className="coaching__description container">
          <p>{mainDescription[languaje]}</p>
        </section>
      </MainBanner>
      <BackgroundAnimated color={COLORS.GOLD}>
        <section className="coaching__section">
          <h2 style={{ color: colorFormatted }}>{ourCoachsTitle[languaje]}</h2>
          <GridLayout
            template="1fr 1fr 1fr"
            classNames="coaching__section__cards__container"
          >
            {coachesList.map((coach, index) => (
              <section key={index} className="coaching__section__cards">
                <CardCoach data={coach} color={colorFormatted} />
              </section>
            ))}
          </GridLayout>
        </section>
      </BackgroundAnimated>
      <Footer color={colorFormatted} />
    </>
  );
};

export default Coaching;
