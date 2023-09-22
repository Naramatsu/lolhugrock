import React from "react";
import BackgroundAnimated from "../BackgroundAnimated";
import CardComments from "../CardComments";
import Footer from "../Footer";
import Header from "../Header";
import MainBanner from "../MainBanner";
import { COLORS, RECENT_WORKS, ROUTES } from "../../utils/constants";
import { convertColor } from "../../utils";
import { experiencesList, mainDescription, recentWorksSubTitle } from "./data";
import { LanguajeAppContext } from "../../context/languaje";
import { useContext } from "react";
import "./RecentWorks.style.scss";

const RecentWorks = () => {
  const { languaje } = useContext(LanguajeAppContext);
  const colorFormatted = convertColor(COLORS.RED);
  return (
    <>
      <Header />
      <MainBanner path={ROUTES.RECENTWORKS} title={RECENT_WORKS[languaje]}>
        <section className="banner__description container">
          <p>{mainDescription[languaje]}</p>
        </section>
      </MainBanner>
      <BackgroundAnimated color={COLORS.RED} isScrolled={false}>
        <section className="coaching__section recent-works">
          <h2 style={{ color: colorFormatted }}>
            {recentWorksSubTitle[languaje]}
          </h2>
          <section
            className="recent-works__container 
kromac-scroll-bg-dark"
          >
            {experiencesList.map((experience, index) => (
              <CardComments
                key={index}
                data={experience}
                languaje={languaje}
                color={colorFormatted}
              />
            ))}
          </section>
        </section>
      </BackgroundAnimated>
      <Footer color={colorFormatted} />
    </>
  );
};

export default RecentWorks;
