import React from "react";
// import ReactDOM from "react-dom";
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import Signup from "./signup";
import "./signup.scss";

const root = createRoot(document.getElementById('signup'));
root.render(
    <React.StrictMode>
        <BrowserRouter>
            <Signup />
        </BrowserRouter>
    </React.StrictMode>
)