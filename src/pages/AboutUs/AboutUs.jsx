import React, { useContext } from "react";
import Banner from "../../components/Banner";
import Header from "../../layout/Header";
import Footer from "../../layout/Footer";
import MainBanner from "../../components/MainBanner";
import {
  bannerMision,
  bannerSecurity,
  bannerTeam,
  mainDescription,
  text,
  text2,
  text3,
  title,
} from "./data";
import { COLORS, ROUTES } from "../../utils/constants";
import { convertColor } from "../../utils";
import { LanguajeAppContext } from "../../context/languaje";
import "./AboutUs.style.scss";

const AboutUs = () => {
  const { languaje } = useContext(LanguajeAppContext);
  const colorFormatted = convertColor(COLORS.ORANGE);
  const colorMainDescription = convertColor(COLORS.GOLD);
  return (
    <>
      <Header />
      <MainBanner path={ROUTES.ABOUTUS} title={title[languaje]}>
        <section
          className="aboutus__description container"
          style={{
            "--cl": colorMainDescription,
          }}
        >
          {mainDescription[languaje]()}
        </section>
      </MainBanner>
      <section
        className="aboutus__container"
        style={{
          "--cl": colorMainDescription,
        }}
      >
        <Banner img={bannerMision.img} side={bannerMision.side}>
          {bannerMision[languaje]()}
        </Banner>
        <section className="about__section">
          <section className="container">
            <p>{text[languaje]}</p>
          </section>
        </section>
        <Banner img={bannerTeam.img} side={bannerTeam.side}>
          {bannerTeam[languaje]()}
        </Banner>
        <section className="about__section">
          <section className="container">
            <h3>{text2.title[languaje]}</h3>
            <br />
            <p>{text2.description[languaje]}</p>
          </section>
        </section>
        <Banner img={bannerSecurity.img} side={bannerSecurity.side}>
          {bannerSecurity[languaje]()}
        </Banner>
        <section className="about__section">
          <section className="container">
            <h3>{text3.title[languaje]}</h3>
            <br />
            <p>{text3.description[languaje]}</p>
          </section>
        </section>
        <Banner
          img="https://s3-alpha-sig.figma.com/img/2443/ee90/c63dab058b241a69c3824b0699e15fbe?Expires=1694390400&Signature=i~yUGLpanjhJSxT9HibNbbAWOqVPyG5C8lw~lCa~gjTKLiISPw0UyfgBo4IiimtCov9g4UmUhw9iclkyL4eFWP-U-lZSsHTgVkAR9GfrA4IAfBPHAmRH6WxM9feqiM03tARBQHCrKEFerXhGVLIUnuZiYPKsdc-18vjPANI2jkBycurwIX0cjCqK1sypFlGn4PPsKDQGR3vMaJ1biDSY1~rknHw3m2dDOfYmZWcfItjYiIj~zyzhAilZs3noVuSN4Jy3-OPVJMcIFpFbLnJshKd-S8cirM4HstzajxTtczBWoFq7ImXsAfy84e-qIaWPx0qBC0mJzMANvEj1hpfcmw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
          title="¡Únete a nosotros y empecemos a escalar divisiones juntos!"
        />
      </section>
      <Footer color={colorFormatted} />
    </>
  );
};

export default AboutUs;
