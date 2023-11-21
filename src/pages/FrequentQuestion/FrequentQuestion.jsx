import React, { useContext } from "react";
import BackgroundAnimated from "../../layout/BackgroundAnimated";
import Footer from "../../layout/Footer";
import Header from "../../layout/Header";
import MainBanner from "../../components/MainBanner";
import Question from "../../components/Question";
import { COLORS, FREQUENT_QUESTIONS, ROUTES } from "../../utils/constants";
import { convertColor } from "../../utils";
import { questionsList, mainDescription } from "./data";
import { LanguajeAppContext } from "../../context/languaje";
import "./FrequentQuestion.style.scss";

const FrequentQuestion = () => {
  const { languaje } = useContext(LanguajeAppContext);
  const colorFormatted = convertColor(COLORS.BLUE);
  return (
    <>
      <Header />
      <MainBanner
        path={ROUTES.FREQUENTQUESTIONS}
        title={FREQUENT_QUESTIONS[languaje]}
      >
        <section className="banner__description container">
          <p>{mainDescription[languaje]}</p>
        </section>
      </MainBanner>
      <BackgroundAnimated color={COLORS.BLUE} isScrolled={false}>
        <section className="coaching__section recent-works">
          <h2 style={{ color: colorFormatted }}>
            {FREQUENT_QUESTIONS[languaje]}
          </h2>
          <section className="frequent-questions kromac-scroll-bg-dark">
            {questionsList[languaje].map(({ title, description }, index) => (
              <Question
                key={index}
                id={index + 1}
                title={title}
                description={description}
              />
            ))}
          </section>
        </section>
      </BackgroundAnimated>
      <Footer color={colorFormatted} />
    </>
  );
};

export default FrequentQuestion;
