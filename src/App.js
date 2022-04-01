import React from 'react';
import PdfReader from "./PdfReader";
import pdfFile from "./ReactJS Notes.pdf";
const App = () => {
  return (
    <div><PdfReader url={pdfFile}/>
<a href="https://theshubham.me/displaying-pdf-in-react-js-using-adobe-pdf-embed-api">Read More<a/>
    </div>
  )
}

export default App
