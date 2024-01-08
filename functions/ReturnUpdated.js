
const returnUpdated = (l, index, newValue,  setL) => {
    setL((l) => {
      const updatedList = [...l];
      updatedList[index] = newValue;
      return updatedList;
    });
  };
  
  export {returnUpdated}