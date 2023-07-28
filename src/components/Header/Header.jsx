import React from "react";
import { Link } from "react-router-dom";
import { BsInfoCircle, BsHandThumbsUp } from "react-icons/bs";
import logo from "../../assets/Logo.png";
import "./Header.style.scss";

const Header = () => (
  <header>
    <section className="container-lg">
      <Link to="/">
        <img className="logo header__logo" src={logo} alt="logo" />
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
