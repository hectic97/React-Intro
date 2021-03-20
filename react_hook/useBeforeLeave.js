// import React, { useEffect } from "react";
// import ReactDOM from "react-dom";

const useBeforeLeave = (onBefore) => {
  if (typeof onBefore !== "function") {
    return;
  }
  const handle = () => {
    onBefore();
  };
  useEffect(() => {
    document.addEventListener("mouseleave", handle);
    return () => document.removeEventListener("mouseleave", handle);
  }, []);
};

// const App = () => {
//   const begForLife = () => console.log("DON'T LEAVE ME");
//   useBeforeLeave(begForLife);
//   return (
//     <div className="App">
//       <h1> HELLO </h1>
//     </div>
//   );
// };

// const rootElement = document.getElementById("root");
// ReactDOM.render(<App />, rootElement);
