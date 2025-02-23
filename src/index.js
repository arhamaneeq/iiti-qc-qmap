import React from "react";
import { createRoot } from "react-dom";
import App from "./app/App";

import "../src/scss/styles.scss"

const root = document.getElementById("root");
createRoot(root).render(<App />);