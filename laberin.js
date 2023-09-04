const laberinto = [
    ["#", "S", ".", ".", "."],
    [".", ".", ".", ".", "."],
    [".", "#", "#", "#", "."],
    [".", "#", "#", "#", "."],
    [".", ".", ".", ".", "G"]
];

function label(y, x) {
    if (y < 0 || y >= laberinto.length || x < 0 || x >= laberinto[y].length) {
        return false;
    }

    if (laberinto[y][x] === "G") {
        return true; // Llegamos al objetivo
    }

    if (laberinto[y][x] === "#" || laberinto[y][x] === "+") {
        return false; // Pared o ya visitada
    }

    // Marcar el camino actual con "+"
    laberinto[y][x] = "+";

    // Buscar en todas las direcciones posibles
    if (label(y - 1, x) || label(y, x - 1) || label(y + 1, x) || label(y, x + 1)) {
        return true; // Si se encuentra una solución en alguna dirección
    }

    // Si no se encuentra una solución, retroceder y desmarcar este camino
    laberinto[y][x] = ".";
    return false;
}

// Encontrar la posición de inicio "S"
let inicioY, inicioX;
for (let i = 0; i < laberinto.length; i++) {
    for (let j = 0; j < laberinto[i].length; j++) {
        if (laberinto[i][j] === "S") {
            inicioY = i;
            inicioX = j;
            break;
        }
    }
}

if (label(inicioY, inicioX)) {
    console.log("Se encontró una ruta válida:");
} else {
    console.log("No se encontró una ruta válida.");
}

// Mostrar el laberinto con la ruta resuelta
laberinto.forEach(row => {
    console.log(row.join(" "));
});