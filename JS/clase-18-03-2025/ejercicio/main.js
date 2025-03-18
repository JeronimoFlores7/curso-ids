const table = document.querySelector("table");

let arreglo = [1,2,3,4,5];
let arreglo1 = [6,7,8,9,10];
let arreglo2 = ['a','b','c','d'];
let arreglo3 = ["spray", "elite", "exuberant", "destruction", "present"];

const methods = [
    { name: "at", result: arreglo.at(-1),  },
    { name: "concat", result: arreglo.concat(arreglo1) },
    { name: "copyWithin", result: [...arreglo].copyWithin(-1) },
    { name: "every", result: arreglo.every(x => x % 2 === 0) },
    { name: "fill", result: [...arreglo].fill(0, 2, 4) },
    { name: "filter", result: arreglo3.filter(x => x.length > 6) },
    { name: "find", result: arreglo1.find(x => x > 8) },
    { name: "findIndex", result: arreglo.findIndex(x => x > 3) },
    { name: "findLast", result: arreglo1.findLast(x => x < 10) },
    { name: "findLastIndex", result: arreglo.findLastIndex(x => x < 5) },
    { name: "flat", result: [1, 2, [3, 4, [5, 6]]].flat(2) },
    { name: "flatMap", result: arreglo.map(x => [x, x * 2]).flat() },
    { name: "includes", result: arreglo2.includes("b") },
    { name: "indexOf", result: arreglo2.indexOf("b") },
    { name: "join", result: arreglo2.join('-') },
    { name: "lastIndexOf", result: ["a", "b", "c", "b"].lastIndexOf("b") },
    { name: "map", result: arreglo.map(x => x * 2) },
    { name: "pop", result: (() => { let arr = [...arreglo2]; return arr.pop(); })() },
    { name: "push", result: (() => { let arr = [...arreglo2]; arr.push("z"); return arr; })() },
    { name: "reduce", result: arreglo.reduce((acc, curr) => acc + curr, 0) },
    { name: "reverse", result: [...arreglo2].reverse() },
    { name: "shift", result: (() => { let arr = [...arreglo2]; return arr.shift(); })() },
    { name: "slice", result: arreglo2.slice(1, 3) },
    { name: "some", result: arreglo.some(x => x > 4) },
    { name: "sort", result: [...arreglo3].sort() },
    { name: "splice", result: (() => { let arr = [...arreglo2]; arr.splice(1, 1, "z"); return arr; })() },
    { name: "toString", result: arreglo.toString() },
    { name: "unshift", result: (() => { let arr = [...arreglo2]; arr.unshift("z"); return arr; })() },
    { name: "values", result: [...arreglo2.values()] },
    { name: "isArray", result: Array.isArray(arreglo) },
    { name: "of", result: Array.of(1,2,3) },
    { name: "length", result: arreglo.length }
];

methods.forEach(method => {
    table.innerHTML += `<tr>
        <td>${method.name}</td>
        <td>${JSON.stringify(method.result)}</td>
    </tr>`;
});

