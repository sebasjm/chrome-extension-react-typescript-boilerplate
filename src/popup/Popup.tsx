import React, { useEffect } from "react";

export default function Popup() {
  useEffect(() => {
    // Example of how to send a message to eventPage.ts.
    chrome.runtime.sendMessage({ popupMounted: true });
  }, []);

  return <div>
    <style jsx>{`
      body {
          margin: 0px;
      }
  
      .pop {
          align-items: center;
          background-color: green;
          border: 2px solid $primary-color;
          color: blue;
          display: flex;
          font-size: 20px;
          height: 75px;
          justify-content: center;
          width: 150px;
      }
    `}</style>
    <p className="pop">Hello, world2!</p>
  </div>
  
  
}
