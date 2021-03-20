// import React from "react";
// import ReactDOM from "react-dom";

const useConfirm = (message = "", callback, rejection) => {
  if (typeof callback !== "function") {
    return;
  }
  if (typeof rejection !== "function") {
      return;
  }
  const confirmAction = () => {
    if (window.confirm(message)) {
      callback();
    } else {
      rejection();
    }
  };
  return confirmAction;
};

// const App = () => {
//   const deleteWorld = () => console.log("DELETING...!"); // main func
//   const abort = () => console.log("Deleting delete");
//   const confirmDelete = useConfirm("ARE YOU SURE?", deleteWorld, abort); // confirm message, function
//   return (
//     <div className="App">
//       <button onClick={confirmDelete}>Delete the word</button>
//     </div>
//   );
// };

// const rootElement = document.getElementById("root");
// ReactDOM.render(<App />, rootElement);
