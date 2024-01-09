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

