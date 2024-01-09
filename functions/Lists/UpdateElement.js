const updateElement = (setArray, index, newValue) => {
  setArray((prevList) => {
    const updatedList = [...prevList];
    updatedList[index] = newValue;
    return updatedList;
  });
};

export default updateElement;
