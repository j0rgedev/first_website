import { colombia } from "./salarios.js";

//Helpers
function esPar(nro){
    return (nro%2 === 0);
}

// Mediana General
const salarios = colombia.map(
    function(persona){
        return persona.salary;
    }
);

const salariosOrdenados = salarios.sort(
    function(salaryA, salaryB){
        return salaryA - salaryB;
    }
);

function calcularMediana(lista){
    const middle = parseInt(lista.length/2);

    if (esPar(lista.length)){
        const personaMitad1 = lista[middle-1];
        const personaMitad2 = lista[middle];
        const mediana = (personaMitad1+personaMitad2)/2;
        return mediana;
    } else {
        const personaMitad = lista[middle];
        return personaMitad;
    }
}

// Mediana Top 10
const start = (salariosOrdenados.length*90)/100;
const count = salariosOrdenados.length - start;


const medianaG = calcularMediana(salariosOrdenados);
const salariosTop10 = salariosOrdenados.splice(
    start,
    count,
);

export {medianaG};
export {salariosTop10};
