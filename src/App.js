import React from 'react';
import PdfReader from "./PdfReader";
import pdfFile from "./ReactJS Notes.pdf";
const App = () => {
  return (
    <div><PdfReader url={pdfFile}/>
    </div>
  )
}

export default App
