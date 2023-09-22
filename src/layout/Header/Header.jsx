import React, { useContext } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import logo from "../../assets/Logo.png";
import { BsInfoCircle, BsHandThumbsUp } from "react-icons/bs";
import { LanguajeAppContext } from "../../context/languaje";
import {
  ABOUT_US,
  LEAGUE_OF_LEGENDS,
  RECENT_WORKS,
} from "../../utils/constants";
import { Link } from "react-router-dom";
import "./Header.style.scss";

const Header = () => {
  const { languaje } = useContext(LanguajeAppContext);
  return (
    <header>
      <section className="container-lg">
        <Link to="/">
          <img className="logo header__logo" src={logo} alt="logo" />
        </Link>
        <section className="herader__content">
          <p className="leagueoflegends">{LEAGUE_OF_LEGENDS}</p>
          <AiOutlineMenu className="hamburguer__menu" size={40} />
          <section className="header__btns">
            <Link className="btn" to="/works">
              <BsHandThumbsUp />
              {RECENT_WORKS[languaje]}
            </Link>
            <Link className="btn" to="/aboutus">
              <BsInfoCircle />
              {ABOUT_US[languaje]}
            </Link>
          </section>
        </section>
      </section>
    </header>
  );
};

export default Header;
