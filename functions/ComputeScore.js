import { useEffect } from 'react';
import updateElement from "./UpdateElement"
// const computeScore = async (score, setScore, combo, banker) => {
//     if (typeof combo != 'undefined'){
//         if ( combo[banker]=="bl"){
//             for (i=0;i<combo.length;i++) {
//                 if (combo[i]==combo[banker]){
//                 }
//                 else if (combo[i] == "bb"){
//                     var b_score = score[banker] - 3
//                     var p_score = score[i] + 3
//                 }
//                 else{
//                     var b_score = score[banker] + 2
//                     var p_score = score[i] - 2
//                 }
//             }
//         }
//         else if (combo[banker]=="bb"){
//             for (i=0;i<combo.length;i++) {
//                 if (combo[i]==combo[banker]){
//                 }
//                 else{
//                     var b_score = score[banker] + 3
//                     var p_score = score[i] - 3
//                 }
//             }
//         }
//         else{
//             for (i=0;i<combo.length;i++) {
//                 if (i==banker){
//                 }
//                 else{
//                     if (combo[i]=="bl" ||combo[i]=="success" ){
//                         b_score = score[banker] - 2
//                         p_score = score[i] + 2
//                     }
//                     else if (combo[i]=="bb" ){
//                         b_score = score[banker] - 3
//                         p_score = score[i] + 3
//                     }
//                     else if (combo[i]=="failure"){
//                         p_score = score[i] - 2
//                         b_score = score[banker] + 2
//                     }
//                     else{
//                         if (combo[i] > combo[banker]){
//                             b_score = score[banker] - 1
//                             p_score = score[i] + 1
//                             }
//                         else if (combo[i] < combo[banker]){
//                             p_score = score[i] - 1
//                             b_score = score[banker] + 1                           
//                         }
//                     }
//                 }
//             }
//         }
//     }
// }
const computeScore = (score, setScore, combo, banker) => {
    if (combo && typeof combo !== 'undefined') {
      const updatedScore = [...score];
  
      for (let i = 0; i < combo.length; i++) {
        if (i !== banker) {
            let b_score, p_score;
            if (combo[i] != combo[banker]){
                if (combo[banker] === "bb") {
                    b_score = updatedScore[banker] + 3;
                    p_score = updatedScore[i] - 3;
                } else if (combo[i] == "bb"){
                    console.log(updatedScore[banker])
                    b_score = updatedScore[banker] - 3;
                    p_score = updatedScore[i] + 3;
                } else if (combo[banker] === "bl") {
                    b_score = updatedScore[banker] + 2;
                    p_score = updatedScore[i] - 2;
                } else if (combo[i]=="bl"){
                    b_score = updatedScore[banker] - 2;
                    p_score = updatedScore[i] + 2;
                } else if (combo[banker] == "success"){
                    b_score = updatedScore[banker] + 2;
                    p_score = updatedScore[i] - 2;
                } else if (combo[i]=="success"){
                    b_score = updatedScore[banker] - 2;
                    p_score = updatedScore[i] + 2;
                } else if (combo[banker] == "failure"){
                    b_score = updatedScore[banker] - 2;
                    p_score = updatedScore[i] + 2; 
                }  else if (combo[i] == "failure"){
                    b_score = updatedScore[banker] + 2;
                    p_score = updatedScore[i] - 2; 
                } else if (combo[i]>combo[banker]){
                    b_score = updatedScore[banker] - 1;
                    p_score = updatedScore[i] + 1;
                }
                else if (combo[i]<combo[banker]){
                    b_score = updatedScore[banker] + 1;
                    p_score = updatedScore[i] - 1;
                }
        
                // Update scores directly in the array
                updatedScore[banker] = b_score;
                updatedScore[i] = p_score;
                
            }
        }   
      }
  
      // Trigger the state update with the modified array
      setScore(updatedScore);
    }
  };
  
  
  
  
  
  
  
  
  

export default computeScore

