import React, { useState } from "react";
import "./HomeStyle.css";
import Img from "./../Imagens/Aviao Branco.png";

export default function Home(props) {
    const [text, setText] = useState();


    return (
        <div className="Home">
            <header className="header">
                <img src={Img} />
                <span>
                    <h1>Bem vindo</h1>
                </span>
            </header>
            <div className="btnHome">
                <button className="btn" onClick={() => setText(`Começamos em...`)}>
                    <em>Nossa história</em>
                </button>
                <button className="btn" onClick={() => setText(`Contatos de membros: ...`)}>
                    <em>Contatos</em>
                </button>
                <button className="btn" onClick={() => setText(`O nosso lema é...`)}>
                    <em>Visto a Camisa</em>
                </button>
            </div>
            <div className="footer2">
                <span className="text">{text}</span>
            </div>
        </div>
    );
}
