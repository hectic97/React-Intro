import React, { useEffect, useRef, useState } from "react";
// import ReactDOM from "react-dom";

const useFullscreen = (callback) => {
  const element = useRef();
  const triggerFull = () => {
    if (element.current) {
      element.current.requestFullscreen();
    }
    if (callback && typeof callback === "function") {
      callback(true);
    }
  };
  const exitFull = () => {
    document.exitFullscreen();
    if (callback && typeof callback === "function") {
      callback(false);
    }
  };
  return { element, triggerFull, exitFull };
};

// const App = () => {
//   const isFull = (full) => {
//     console.log(full ? "FULL" : "NOT FULL");
//   };
//   const { element, triggerFull, exitFull } = useFullscreen(isFull);
//   return (
//     <div className="App" style={{ height: "1000vh" }}>
//       <div ref={element}>
//         <img
//           alt="abs"
//           src="https://lh6.googleusercontent.com/-pP9B2Jwvd8M/AAAAAAAAAAI/AAAAAAAAAAA/AMZuuclDcDddbpjH8eZVzoYuBs4TMrQ4SQ/s96-c/photo.jpg"
//         />
//         <button onClick={exitFull}>Exit fullscreen</button>
//       </div>
//       <button onClick={triggerFull}>Make fullscreen</button>
//     </div>
//   );
// };

// const rootElement = document.getElementById("root");
// ReactDOM.render(<App />, rootElement);
