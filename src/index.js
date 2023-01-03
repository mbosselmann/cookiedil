import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import App from "./App";
import GlobalStyles from "./GlobalStyles";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <GlobalStyles />
    <App />
  </StrictMode>
);
