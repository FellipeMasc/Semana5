import React, { useState } from "react";
import "./AboutStyle.css";
import Img from "./../Imagens/Aviao Branco.png";

export default function About(props) {
    const [text, setText] = useState();

    return (
        <div className="About">
            <header className="header">
                <img src={Img} />
                <span>
                    <h1>Sobre</h1>
                </span>
            </header>
            <div className="btnAbout">
                <button
                    className="btn"
                    onClick={() =>
                        setText(`Nosso trabalho em Computação se baseia em...`)
                    }
                >
                    <em>Computação</em>
                </button>
                <button
                    className="btn"
                    onClick={() =>
                        setText(`Nosso trabalho em Consultoria se baseia em...`)
                    }
                >
                    <em>Consultoria</em>
                </button>
                <button
                    className="btn"
                    onClick={() =>
                        setText(`Nosso trabalho em Gestão se baseia em...`)
                    }
                >
                    <em>Gestão</em>
                </button>
            </div>
            <div className="footer2">
                <span className="text">{text}</span>
            </div>
        </div>
    );
}
