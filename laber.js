const laberinto = [
    [ "S" , "." , "#" , "#" , "#"],
    [ "#" , "." , "#" , "#" , "G"],
    [ "." , "." , "." , "#" , "."],
    [ "." , "#" , "." , "." , "."],
    [ "." , "#" , "." , "#" , "."]
]
//actividades de el lautaro iturria.
function labe (y,x){
    if(y >= laberinto.length || y < 0) return false
    if(x >= laberinto[y].length || x < 0 ) return false
    if(laberinto[y][x] == "+") return false
    if(laberinto[y][x] == "#") return false
    if(laberinto[y][x] == "S") return false
    if(laberinto[y][x] == "G") return true
    laberinto[y][x] = "+"
    if(labe(y-1,x) == true ) return true
    if(labe(y,x-1)) return true
    if(labe(y+1,x)) return true
    if(labe(y,x+1)) return true
    laberinto[y][x] = "."
    return false
}

laberinto.forEach(element => {
    console.log(element);
});
