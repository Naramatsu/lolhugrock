import React from "react";
import { Link } from "react-router-dom";
import { BsInfoCircle, BsHandThumbsUp } from "react-icons/bs";
import "./Header.style.scss";

const Header = () => (
  <header>
    <section className="container">
      <Link to="/">
        <img className="logo header__logo" src="Logo.png" alt="logo" />
      </Link>
      <section className="herader__content">
        <p className="leagueoflegends">League of legends</p>
        <section className="header__btns">
          <Link className="btn" to="/works">
            <BsHandThumbsUp />
            Trabajos recientes
          </Link>
          <Link className="btn" to="/aboutus">
            <BsInfoCircle />
            Sobre nosotros
          </Link>
        </section>
      </section>
    </section>
  </header>
);

export default Header;
