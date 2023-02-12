import React from "react";
import ReactDOM from "react-dom/client";

import { Page } from "./page";
import { GlobalStyle } from "./styles/globalStyle";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <GlobalStyle />
    <Page />
  </React.StrictMode>
);
