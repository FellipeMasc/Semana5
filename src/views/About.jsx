import React from "react";
import "./AboutStyle.css";
import Img from "./../Imagens/Aviao Branco.png";

export default function About(props) {
  return (
    <div className="About">
      <img src={Img} />
      <h1>Sobre</h1>
    </div>
  );
}
