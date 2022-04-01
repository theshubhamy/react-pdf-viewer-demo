
import React from "react";
import ViewSDKClient from "./ViewSDKClient";
const RenderMenu = ({ url }) => {
  const loadPDF = () => {
    const viewSDKClient = new ViewSDKClient();
    viewSDKClient.ready().then(() => {
      viewSDKClient.previewFile(
        "pdf-div",
        {
          defaultViewMode: "FIT_WIDTH",
          showAnnotationTools: true,
          showLeftHandPanel: true,
          showPageControls: true,
          showDownloadPDF: true,
          showPrintPDF: true,
        },
        url
      );
    });
  };
  return (
    <div className="mt-28">
      <div
     style = {{height:"100vh"}}
        id="pdf-div"
        className="full-window-div border border-gray-100 h-screen"
        onDocumentLoad={loadPDF()}
      ></div>
    </div>
  );
};
export default RenderMenu;
