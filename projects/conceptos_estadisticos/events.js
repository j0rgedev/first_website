//Imports
import {calcularMedia} from './calcular.js';
import { calcularMediana } from './calcular.js';
import { calcularModa } from './calcular.js';

//Funciones Generales
function hideH2(){
    const h2 = document.getElementById("title");
    h2.style.display = "none";
}

function redoContainer(){
    const container = document.getElementById("btn_container");
    container.style.flexDirection = "row";
    container.style.position = "fixed";
    container.style.bottom = "0";
    container.style.width = "100%";
}

function styles(result,label,input,btn,funcion){
    if (input.value == '' || input.value.slice(-1) == ","){
        input.classList.add('error');
        input
        setTimeout(() =>{
            input.classList.remove('error');
        }, 300);
    } else {
        label.style.transform = "translateY(-70px)";
        input.style.transform = "translateY(-70px)";
        btn.style.transform = "translateY(-70px)";
        result.style.width = "auto";
        result.style.display = "block";
        setTimeout(()=>{
            result.style.color = "white";
            result.style.border = "1px solid white";
            result.style.transform = "translateY(-20px)";
        }, 150)
        funcion;
    }
}

//Funciones específicas
function showMediaResult(){
    const result = document.getElementById("media_results");
    const label = document.getElementById("lbl");
    const input = document.getElementById("media_values");
    const btn = document.getElementById("get_media_btn");
    styles(result,label,input,btn,calcularMedia());
}

function showMedianaResult(){
    const result = document.getElementById("mediana_results");
    const label = document.getElementById("lbl2");
    const input = document.getElementById("mediana_values");
    const btn = document.getElementById("get_mediana_btn");
    styles(result,label,input,btn,calcularMediana());
}

function showModaResult(){
    const result = document.getElementById("moda_results");
    const label = document.getElementById("lbl3");
    const input = document.getElementById("moda_values");
    const btn = document.getElementById("get_moda_btn");
    styles(result,label,input,btn,calcularModa());
}

//Eventos
Array.from(document.getElementsByClassName('btn')).forEach(function (elm) { 
    elm.addEventListener('click', hideH2);
    elm.addEventListener('click', redoContainer);
});

let datos = document.querySelectorAll(".datos");
let btns = document.querySelectorAll(".div_btn");

btns.forEach((btn,i)=>{
    btns[i].addEventListener("click",()=>{
        btns.forEach((btn,i)=>{
            datos[i].classList.remove("activo");
        })
        datos[i].classList.add("activo");
    })
})

const calcular_media = document.getElementById("get_media_btn");
const calcular_mediana = document.getElementById("get_mediana_btn");
const calcular_moda = document.getElementById("get_moda_btn");

calcular_media.onclick = showMediaResult;
calcular_mediana.onclick = showMedianaResult;
calcular_moda.onclick = showModaResult;





