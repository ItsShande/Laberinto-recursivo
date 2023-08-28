let laberintos = [
    "S",
    ".",
    ".",
    ".",
    "#",
    "#",
    "#",
    "#",
    ".",
    "#",
    "#",
    ".",
    ".",
    ".",
    "#",
    ".",
    ".",
    "#",
    "#",
    "#",
    "E",
    "#",
    "#",
    "#",
    "#",
];

let laberinto2 = [
    "#",
    "#",
    "#",
    "#",
    "S",
    "#",
    ".",
    ".",
    ".",
    ".",
    ".",
    "#",
    ".",
    "#",
    "#",
    "#",
    "#",
    "#",
    ".",
    ".",
    ".",
    ".",
    ".",
    ".",
    "#",
    "#",
    "#",
    "#",
    "#",
    ".",
    "E",
    ".",
    ".",
    ".",
    ".",
    ".",
];

function resolverLaberinto(laberinto, x, y, goalX, goalY) {
    // Verificar si estamos fuera de los límites del laberinto o si estamos en una pared
    if (
        x < 0 ||
        y < 0 ||
        x >= laberinto.length ||
        y >= laberinto[0].length ||
        laberinto[x][y] === 1
    ) {
        return false;
    }

    // Verificar si hemos llegado a la posición objetivo
    if (x === goalX && y === goalY) {
        return true;
    }

    // Marcar la celda actual como visitada
    laberinto[x][y] = "visited";

    // Intentar moverse en todas las direcciones posibles (arriba, abajo, izquierda, derecha)
    if (
        resolverLaberinto(laberinto, x - 1, y, goalX, goalY) ||
        resolverLaberinto(laberinto, x + 1, y, goalX, goalY) ||
        resolverLaberinto(laberinto, x, y - 1, goalX, goalY) ||
        resolverLaberinto(laberinto, x, y + 1, goalX, goalY)
    ) {
        return true;
    }

    // Si ninguna de las direcciones conduce a la solución, retroceder
    laberinto[x][y] = 0;
    return false;
}

// Ejemplo de uso:
const laberinto = [
    [0, 1, 0, 0, 0],
    [0, 1, 1, 1, 0],
    [0, 0, 0, 0, 0],
    [1, 1, 1, 1, 0],
    [0, 0, 0, 0, 0],
];

const start = { x: 0, y: 0 };
const goal = { x: 4, y: 4 };

if (resolverLaberinto(laberinto, start.x, start.y, goal.x, goal.y)) {
    console.log("Se encontró una solución.");
    console.log(laberinto); // Laberinto resuelto
} else {
    console.log("No se encontró una solución.");
}
