import {showNames} from './salarios.js';
import {showSalaries} from './salarios.js';
import {medianaG} from './analisis.js';
import {salariosTop10} from './analisis.js';

document.addEventListener("DOMContentLoaded", ()=>{
    const nom = document.querySelector(".nombres");
    const sal = document.querySelector(".salarios");
    showNames(nom);
    showSalaries(sal);
})

const r_wrapper = document.getElementById("result");
const result = document.getElementById("p_result");
const btn1 = document.getElementById("btn1");
const btn2 = document.getElementById("btn2");

btn1.addEventListener("click",()=>{
    r_wrapper.style.display = "block";
    result.innerText = `$${medianaG}`;
})

btn2.addEventListener("click",()=>{
    r_wrapper.style.display = "block";
    result.innerText = `$${salariosTop10}`;
})


