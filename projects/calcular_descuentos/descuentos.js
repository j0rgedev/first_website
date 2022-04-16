const price = document.getElementById("price");
const discount = document.getElementById("percent");
const ta = document.getElementById("final");
const btn = document.getElementById("desc_btn")
const ct = document.getElementById("ct");

function getDiscount(){
    if (price.value == '' || discount.value == '' ){
        ta.innerText = "Datos vacíos";
        ct.style.border = "1px solid white";
        ta.style.color = "";
        ta.style.borderColor = "";
        return;
    }
    ct.style.border = "1px solid var(--background)";
    ta.innerText = "";
    ta.style.color = "#E1AA12";
    ta.style.borderColor = "#E1AA12";
    const d_price = (price.value)*(discount.value)/100;
    const f_price = price.value-d_price;
    ta.innerText = `El producto con precio ${price.value} y `+ 
    `un descuento de ${discount.value}%, tendrá un precio final de ${f_price}`;
}

btn.onclick = getDiscount;
