import React from "react";
import Content from "./../components/Content"
import Navbar from "./../components/Navbar"
import { BrowserRouter } from  'react-router-dom'

export default function App (props) {
    return (
        <div className="App">
            <BrowserRouter> 
                <Navbar className="Navbar"></Navbar>
                <Content classname="Content"></Content>
            </BrowserRouter> 
        </div>
    );
}

