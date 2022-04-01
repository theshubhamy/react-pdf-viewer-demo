import React from 'react';
import PdfReader from "./PdfReader";
import pdfFile from "./ReactJS Notes.pdf";
import "./App.css";
const App = () => {
  return (
   <div>
      <h1 className="heading"  >Adobe react pdf viewer(Adobe PDF Embed API)</h1>
      <a
        target="_blank"
        href="https://theshubham.me/displaying-pdf-in-react-js-using-adobe-pdf-embed-api"
      >
        Read More
      </a>
      <PdfReader className="pdfReader" url={pdfFile} />
      
    </div>
  )
}

export default App
