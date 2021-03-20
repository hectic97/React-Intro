// const content = [
//     {
//       tab: "Section 1",
//       content: "I'm the content of section 1"
//     },
//     {
//       tab: "Section 2",
//       content: "I'm the content of section 2"
//     }
//   ];

const useTabs = (initialTab, allTabs) => {
    if (!allTabs || !Array.isArray(allTabs)) {
      console.log("Wrong type");
      return;
    }
    const [currentIndex, setCurrentIndex] = useState(initialTab);
    // console.log(currentIndex, setCurrentIndex);
    return {
      currentItem: allTabs[currentIndex],
      changeItem: setCurrentIndex
    };
  };
  
//   const App = () => {
//     const { currentItem, changeItem } = useTabs(0, content);
//     return (
//       <div className="App">
//         {content.map((section, index) => (
//           <button onClick={() => changeItem(index)}>{section.tab}</button>
//         ))}
//         <div>
//           <h1>{currentItem.content}</h1>
//         </div>
//       </div>
//     );
//   };