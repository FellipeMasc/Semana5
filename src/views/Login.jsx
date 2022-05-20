import React from "react";
import { Routes, Route } from "react-router-dom";
import { Link } from "react-router-dom";
import "./Login.css"

export default function Card (props) {
    return (
        <div className="container">
            <h1 id="inicio">Área de Membros</h1>
            <div className="form1">
                <h2>Login</h2>
                <p>Entre na sua conta abaixo</p>
                <div className="forms">
                    <label for="email">Email</label>
                    <input type="text" />
                </div>
                <div className="forms">
                    <label for="senha">Senha</label>
                    <input type="text" />
                </div>
                <button className="btn">Entrar</button>
            </div>
            <div className="form2">
                <p className="footer">
                    <p>É a sua primeira vez aqui?</p>
                    <Link to ="#">Criar uma conta</Link>
                </p>
            </div>
        </div>
    );
}