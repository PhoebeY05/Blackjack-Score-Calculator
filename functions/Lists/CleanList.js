const CleanList= (array) => {
    for (i=0;i<array.length;i++){
        array[i] = array[i].replace("(B)","")
    }
}
export default CleanList