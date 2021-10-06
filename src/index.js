import { StrictMode } from "react";
import ReactDOM from "react-dom";

import App from "./App";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <App url="https://documentcloud.adobe.com/view-sdk-demo/PDFs/Bodea%20Brochure.pdf" />
  </StrictMode>,
  rootElement
);
