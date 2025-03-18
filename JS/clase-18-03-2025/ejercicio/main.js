// Arreglos de prueba
let arreglo = [1, 2, 3, 4, 5];
let arreglo1 = [6, 7, 8, 9, 10];
let arreglo2 = ["a", "b", "c", "d"];
let arreglo3 = ["spray", "elite", "exuberant", "destruction", "present"];

// Lista de métodos con sus respectivas ejecuciones
const metodos = [
    { nombre: "at(-1)", resultado: () => arreglo.at(-1) },
    { nombre: "concat(arreglo1)", resultado: () => arreglo.concat(arreglo1) },
    { nombre: "copyWithin(-1)", resultado: () => arreglo.copyWithin(-1) },
    { nombre: "entries()", resultado: () => [...arreglo2.entries()] },
    { nombre: "every(x => x % 2 === 0)", resultado: () => arreglo.every(x => x % 2 === 0) },
    { nombre: "fill(0, 2, 4)", resultado: () => [...arreglo.fill(0, 2, 4)] },
    { nombre: "filter(x => x.length > 6)", resultado: () => arreglo3.filter(x => x.length > 6) },
    { nombre: "find(x => x > 8)", resultado: () => arreglo1.find(x => x > 8) },
    { nombre: "findIndex(x => x > 3)", resultado: () => arreglo.findIndex(x => x > 3) },
    { nombre: "findLast(x => x < 10)", resultado: () => arreglo1.findLast(x => x < 10) },
    { nombre: "flat(2)", resultado: () => [[1, 2, [3, 4, [5, 6]]]].flat(2) },
    { nombre: "forEach(x => x)", resultado: () => { let res = []; arreglo2.forEach(x => res.push(x)); return res; } },
    { nombre: "includes('elite')", resultado: () => arreglo3.includes('elite') },
    { nombre: "indexOf('elite')", resultado: () => arreglo3.indexOf('elite') },
    { nombre: "join('-')", resultado: () => arreglo3.join('-') },
    { nombre: "lastIndexOf('elite')", resultado: () => arreglo3.lastIndexOf('elite') },
    { nombre: "map(x => x * 2)", resultado: () => [1, 2, 3, 4, 5].map(x => x * 2) },
    { nombre: "pop()", resultado: () => { let temp = [...arreglo3]; return temp.pop(); } },
    { nombre: "push('world')", resultado: () => { let temp = [...arreglo3]; temp.push('world'); return temp; } },
    { nombre: "reduce((a, b) => a + b)", resultado: () => [1, 2, 3, 4, 5].reduce((a, b) => a + b) },
    { nombre: "reverse()", resultado: () => [...arreglo3].reverse() },
    { nombre: "shift()", resultado: () => { let temp = [...arreglo3]; return temp.shift(); } },
    { nombre: "slice(0, 2)", resultado: () => arreglo3.slice(0, 2) },
    { nombre: "some(x => x.length > 6)", resultado: () => arreglo3.some(x => x.length > 6) },
    { nombre: "sort()", resultado: () => [...["Marzo", "Enero", "Febrero", "Diciembre"]].sort() },
    { nombre: "splice(1, 0, 'Noviembre')", resultado: () => { let temp = ["Marzo", "Enero", "Febrero", "Diciembre"]; temp.splice(1, 0, "Noviembre"); return temp; } },
    { nombre: "toLocaleString()", resultado: () => [1234567.89, 9876543.21, 4567.89].map(num => num.toLocaleString('es-MX')) },
    { nombre: "toString()", resultado: () => arreglo3.toString() },
    { nombre: "unshift('hello', 'welcome')", resultado: () => { let temp = [...arreglo3]; temp.unshift('hello', 'welcome'); return temp; } },
    { nombre: "values()", resultado: () => [...arreglo2.values()] },
    { nombre: "Array.from('hola')", resultado: () => Array.from("hola") },
    { nombre: "Array.isArray([1,2,3])", resultado: () => Array.isArray([1, 2, 3]) },
    { nombre: "Array.of(1,2,3)", resultado: () => Array.of(1, 2, 3) },
];


function generarTabla() {
    const tabla = document.querySelector('table tbody');

    metodos.forEach(metodo => {
        let fila = document.createElement("tr");

        let celdaMetodo = document.createElement("td");
        celdaMetodo.textContent = metodo.nombre;

        let celdaResultado = document.createElement("td");
        try {
            let resultado = metodo.resultado();
            celdaResultado.textContent = Array.isArray(resultado) ? JSON.stringify(resultado) : resultado;
        } catch (error) {
            celdaResultado.textContent = "Error";
        }

        fila.appendChild(celdaMetodo);
        fila.appendChild(celdaResultado);
        tabla.appendChild(fila);
    });
}

generarTabla();
