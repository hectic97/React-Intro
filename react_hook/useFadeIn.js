import React, { useEffect, useRef } from "react";
import ReactDOM from "react-dom";

const useFadeIn = (duration = 1, delay = 0) => {
  const element = useRef();
  if (typeof duration !== "number" || typeof delay !== "number") {
    return;
  }
  useEffect(() => {
    if (element.current) {
      const { current } = element;
      current.style.transition = `opacity ${duration}s ease-in-out ${delay}s`;
      current.style.opacity = 1;
    }
  }, []); // add [] for no dependency -> only work when componet did mount

  return { ref: element, style: { opacity: 0 } };
};

const App = () => {
  const fadeInH1 = useFadeIn(2, 4);
  const fadeInP = useFadeIn(5, 2);
  return (
    <div className="App">
      <h1 {...fadeInH1}>HELLO</h1>
      <p {...fadeInP}>High</p>
    </div>
  );
};

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
 