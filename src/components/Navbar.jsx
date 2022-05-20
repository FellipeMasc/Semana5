import React from "react";
import { Routes, Route } from "react-router-dom";
import "./Navbar.css"
import Img from "./../Imagens/Aviao Branco.png"
import { Link } from "react-router-dom";

export default function Navbar (props) {
    return (
        <aside id = "Navbar">
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/login">Login</Link>
                </li>
                <li>
                    <Link to="/about">About</Link>
                </li>
            </ul>
            <div className="Esquerdo">
                <img src = {Img} />
                <h1>ITA JUNIOR</h1>
            </div>
        </aside>
    );
}