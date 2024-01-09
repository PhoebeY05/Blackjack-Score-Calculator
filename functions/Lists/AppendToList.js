
const AppendToList = async (setArray, value) => {
  alert("Success")
  setArray((prevList) => [...prevList, value])
}
export default AppendToList