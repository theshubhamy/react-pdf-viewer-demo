import React from 'react';
import PdfReader from "./PdfReader";
import pdfFile from "./ReactJS Notes.pdf";
const App = () => {
  return (
   <div>
      <h1>Adobe react pdf viewer(Adobe PDF Embed API)</h1>
      <a
        target="_blank"
        href="https://theshubham.me/displaying-pdf-in-react-js-using-adobe-pdf-embed-api"
      >
        Read More
      </a>
      <PdfReader style={{ width: "Full", height: "screen" }} url={pdfFile} />
      
    </div>
  )
}

export default App
