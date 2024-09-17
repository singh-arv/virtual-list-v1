import * as React from "react";
import { createRoot } from "react-dom/client";
import App from "./app.tsx";

const rootEl = document.getElementById("root");

const appRoot = createRoot(rootEl);

appRoot.render(<App />);
