import React from "react";
// import ReactDOM from "react-dom";
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import Applet from "./market.jsx";
import "./market.scss";

const root = createRoot(document.getElementById('market'));
root.render(
    <React.StrictMode>
        <BrowserRouter>
            <Applet />
        </BrowserRouter>
    </React.StrictMode>
)