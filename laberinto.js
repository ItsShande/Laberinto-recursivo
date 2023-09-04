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
        return true; // llegamos al final
    }

    if (laberinto[y][x] === "#" || laberinto[y][x] === "+") {
        return false; // si hay algun objeto enfrente o algun lugar que ya pasamos
    }

    // Marcar el camino actual con +
    laberinto[y][x] = "+";

    // Buscar en todas las direcciones posibles
    if (label(y - 1, x) || label(y, x - 1) || label(y + 1, x) || label(y, x + 1)) {
        return true; // si encuentra una solucion en alguna direccion
    }

    // si no encuentra ningun camino se va para atras
    laberinto[y][x] = ".";
    return false;
}

// Encontrar la posición de inicio S
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

// muestra el laberinto con espacios 
laberinto.forEach(row => {
    console.log(row.join(" "));
});
