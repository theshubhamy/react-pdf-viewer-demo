import { StrictMode } from "react";
import ReactDOM from "react-dom";

import App from "./App";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <App url="https://github.com/ashubhamkumar/react-pdf-viewer-demo/blob/master/src/ReactJS%20Notes.pdf" />
  </StrictMode>,
  rootElement
);
