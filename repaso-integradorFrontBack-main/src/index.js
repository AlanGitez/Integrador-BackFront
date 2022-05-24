import React from "react";
import ReactDOM from "react-dom";
import {BrowserRouter} from 'react-router-dom'
import { Provider } from "react-redux";

import Main from "./views/Main";

ReactDOM.render(
    <BrowserRouter>        
        <Main/>
    </BrowserRouter>, document.getElementById("root"));