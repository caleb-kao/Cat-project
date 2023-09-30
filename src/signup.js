import React from "react";
// import ReactDOM from "react-dom";
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import Applet from "./Applet.jsx";
import "./Applet.scss";

const root = createRoot(document.getElementById('signup'));
root.render(
    <React.StrictMode>
        <BrowserRouter>
            <Applet />
        </BrowserRouter>
    </React.StrictMode>
)