import React, { useContext } from "react";
import logo from "../../assets/Logo.png";
import { AiOutlineMenu } from "react-icons/ai";
import { btnLinks } from "./data";
import { LanguajeAppContext } from "../../context/languaje";
import { LEAGUE_OF_LEGENDS } from "../../utils/constants";
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
            {btnLinks(languaje).map(({ link, icon, label }, index) => (
              <Link className="btn" to={link} key={index}>
                {icon}
                {label}
              </Link>
            ))}
          </section>
        </section>
      </section>
    </header>
  );
};

export default Header;
