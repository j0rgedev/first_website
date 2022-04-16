//General variables
const btn1 = document.getElementById('btn1');
const btn2 = document.getElementById('btn2');
const btn3 = document.getElementById('btn3');
const btn4 = document.getElementById('btn4');
const btn5 = document.getElementById('btn5');
const btn6 = document.getElementById('btn6');

//Cuadrado
const txt = document.getElementById('text1');
const alert = document.getElementById('alert');
const square = document.getElementById("square");
function areaC(){
    txt.innerText = '';
    if (square.value == ''){
        alert.style.display = "block";
        return;
    }
    alert.style.display = "none";

    const area = Math.pow(square.value,2);
    txt.innerText = `El área es ${area} cm²`;
}

function perimetroC(){
    txt.innerText = '';
    if (square.value == ''){
        alert.style.display = "block";
        return;
    }
    alert.style.display = "none";

    const perimeter = (square.value)*4;
    txt.innerText = `El perimetro es ${perimeter} cm`;
}

btn1.onclick = areaC;
btn2.onclick = perimetroC;


//Triangulo
const alertT = document.getElementById('alert1');
const txt2 = document.getElementById('text2');
const tb = document.getElementById("tr_base");
const ta = document.getElementById("tr_alt");
function areaT(){
    txt2.innerText = '';
    if (ta.value == '' || tb.value == ''){
        alertT.style.display = "block";
        return;
    }
    alertT.style.display = "none";

    const area = (tb.value*ta.value)/2;
    txt2.innerText = `El área es ${area} cm²`;
}

function perimetroT(){
    txt2.innerText = '';
    if (ta.value == '' || tb.value == ''){
        alertT.style.display = "block";
        return;
    }
    alertT.style.display = "none";

    const perimeter = Math.sqrt((tb.value**2)+(ta.value**2)).toFixed(2);
    txt2.innerText = `Suponiendo un triángulo rectángulo, el perimetro es ${perimeter} cm`;
}

btn3.onclick = areaT;
btn4.onclick = perimetroT;

//Circulo
const alertC = document.getElementById('alert2');
const txtC = document.getElementById('text3');
const radio = document.getElementById('cr_radio')

function areaCr(){
    txtC.innerText = '';
    if (cr_radio.value == ''){
        alertC.style.display = "block";
        return;
    }
    alertC.style.display = "none";

    const area = (Math.PI*cr_radio.value**2).toFixed(2);
    txtC.innerText = `El área es ${area} cm²`;
}

function perimetroCr(){
    txtC.innerText = '';
    if (cr_radio.value == ''){
        alertC.style.display = "block";
        return;
    }
    alertC.style.display = "none";

    const perimeter = (Math.PI*2*cr_radio.value).toFixed(2);
    txtC.innerText = `El perimetro es ${perimeter} cm`;
}

btn5.onclick = areaCr;
btn6.onclick = perimetroCr;