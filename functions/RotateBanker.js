const rotateBanker = ( turns, setting, players, count, banker, setBanker, setCount, addCount) => {
    if (banker < players.length){
        if (setting[0] == "down" || setting[1] == "down" ) {
            if (count == 0){
                players[banker] += "(B)"
            }
            if (count >= turns) {
                if (banker == players.length - 1 ){
                    players[banker] = players[banker].replace("(B)", "")
                    setBanker(0)
                    setCount(0)
                }
                else {
                    players[banker] = players[banker].replace("(B)", "")
                    addCount(banker,setBanker)
                    setCount(0)
                }
            }
        }
        
        if (setting[0] == "up" || setting[1] == "up" ) {
            index = players.length - banker - 1
            if (count == 0){
                players[index] += "(B)"
            }
            if (count >= turns) {
                if (banker == players.length-1){
                    players[index] = players[index].replace("(B)", "")
                    setBanker(0)
                    setCount(0)
                    
                }
                else {
                    players[index] = players[index].replace("(B)", "")
                    addCount(banker,setBanker)
                    setCount(0)
                }
            }
        }
    }

}
export default rotateBanker