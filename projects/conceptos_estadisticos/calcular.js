//MEDIA
const media_value = document.getElementById("media_values");
function calcularMedia(){ 
    const result = document.getElementById("p_media_result");
    const numeros = (media_value.value).split(",");
    let suma=0;
    for (let i=0;i<numeros.length;i++){
        suma+=parseFloat(numeros[i]);
    }
    const prom = (suma/numeros.length).toFixed(2);
    result.innerText = `La media es ${prom}`;
}

//MEDIANA
const mediana = document.getElementById("mediana_values");
function esPar(){
    const numeros = (mediana.value).split(",");
    const middle = parseInt(numeros.length/2);
    if (numeros.length%2==0){
        return true;
    } else {
        return false;
    }
}

function calcularMediana(){
    const result = document.getElementById("p_mediana_result");
    const numeros = (mediana.value).split(",");
    const middle = parseInt(numeros.length/2);
    if (esPar()){
        numeros.sort();
        const mitad1 = numeros[middle-1];
        const mitad2 = numeros[middle];
        const mediana = (mitad1+mitad2)/2;
        console.log(mediana);
        result.innerText = `Números ordenados: ${numeros}
        La mediana es: ${mediana}`;
    } else {
        numeros.sort();
        const mediana = numeros[middle];  
        console.log(mediana);
        result.innerText = `Números ordenados: ${numeros}
        La mediana es: ${mediana}`; 
    }
    
}

//MODA
function calcularModa(){
    const moda_value = document.getElementById("moda_values");
    const array = (moda_value.value).split(",");
    const obj = {};
    array.forEach(element => {
        if (!obj[element]){
            obj[element]=1;
        } else {
            obj[element]+=1;
        }
    });
    
    const mayor = 0;
    let moda = 0;
    for (let i in array){
        if (array[i]>mayor){
            moda = array[i];
        }
    }
    const result = document.getElementById("p_moda_result");
    result.innerText = `La moda es: ${moda}`;
}

export {calcularMedia};
export {calcularMediana};
export {calcularModa};