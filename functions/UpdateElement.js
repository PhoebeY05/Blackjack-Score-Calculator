// const updateElement = (l,setL, newValue, index) => {
//   const updatedList = [...l];
//   updatedList[index] = newValue;
//   console.log(setL);
//   setL(updatedList)
// };
// const updateElement = (index, newValue, ) => {
//   setL(prevList => {
//     if (index >= 0 && index < prevList.length) {
//       const updatedList = [...prevList];
//       updatedList[index] = newValue;
//       return updatedList;
//     } else {
//       console.error(`Index ${index} is out of range for the list with length ${prevList.length}. No update performed.`);
//       return prevList;
//     }
//   });
// };
const updateElement = (list, setList, index, newValue) => {
  setList((prevList) => {
    const updatedList = [...prevList];
    updatedList[index] = newValue;
    return updatedList;
  });
};

export default updateElement;
