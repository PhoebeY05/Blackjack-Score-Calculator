const FixedLengthList = (length) => {
    // Specify the fixed length of the list
    const listLength = length;
  
    // Initialize an array with the desired length
    const zeroList = Array(listLength).fill(0);
    return(zeroList)
}
export default FixedLengthList;