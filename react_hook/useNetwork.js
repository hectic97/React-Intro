// import React, { useEffect, useRef, useState } from "react";
// import ReactDOM from "react-dom";

const useNetwork = (onChange) => {
  const [status, setStatus] = useState(navigator.onLine); // t or f
  const handleChange = () => {
    if (typeof onChange === "function") {
      onChange(navigator.onLine);
    }
    setStatus(navigator.onLine);
  };
  useEffect(() => {
    window.addEventListener("online", handleChange);
    window.addEventListener("offline", handleChange);
    return () => {
      window.removeEventListener("online", handleChange);
      window.removeEventListener("offline", handleChange);
    };
  }, []);
  return status;
};
// const App = () => { 
//   const handleNetworkChange = (online) => {
//     console.log(online ? "We just went online" : "We are offline");
//   };
//   const onLine = useNetwork(handleNetworkChange);

//   return (
//     <div className="App">
//       <h1>{onLine ? "OnLine" : "OffLine"}</h1>
//     </div>
//   );
// };

// const rootElement = document.getElementById("root");
// ReactDOM.render(<App />, rootElement);
