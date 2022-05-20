import React from "react";
import "./HomeStyle.css"
import Img from "./../Imagens/Aviao Branco.png"

export default function Home (props) {
    return (
        <div className="Home">
           <img src= {Img} />
           <h1>Bem vindo</h1>
        </div>
    );
}
