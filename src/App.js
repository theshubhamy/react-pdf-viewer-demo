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
          showAnnotationTools: false,
          showLeftHandPanel: false,
          showPageControls: false,
          showDownloadPDF: false,
          showPrintPDF: false,
        },
        url
      );
    });
  };
  return (
    <div className="mt-28">
      <div
        id="pdf-div"
        className="full-window-div border border-gray-100 h-screen"
        onDocumentLoad={loadPDF()}
      ></div>
    </div>
  );
};
export default RenderMenu;
