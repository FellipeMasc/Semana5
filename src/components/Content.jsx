import React from "react";
import { Routes , Route } from "react-router-dom";
import About from "./../views/About"
import Home from "./..//views/Home"
import Login from "./..//views/Login"

export default function Contend (props) {
    return (
        <main className="Content">
            <Routes>
                <Route path="/about" element={<About />} />
                <Route path="/login" element={<Login />} />
                <Route path="/" exact element={<Home />} />
            </Routes>
        </main>
    );
}