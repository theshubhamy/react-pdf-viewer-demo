import React from 'react';
import PdfReader from "./PdfReader";
import pdfFile from "./ReactJS Notes.pdf";
const App = () => {
  return (
    <div><PdfReader style={{width: "100%", height:"100%"}} url={pdfFile}/>
<a href="https://theshubham.me/displaying-pdf-in-react-js-using-adobe-pdf-embed-api">Read More</a>
    </div>
  )
}

export default App
