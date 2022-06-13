let foodselected;
let drinkselected;
let dessertselected;
let pricefood;
let pricedrink;
let pricedessert;
let pedido;
let typefood;
let typedrink;
let typedessert;
//primary food selector

function chooseFood (foodname){
  pricefood = Number(foodname.querySelector("h4").innerHTML.substring(2).replace(",","."));
foodselected = foodname.innerHTML;
typefood =foodname.querySelector("h2").innerText;
  const escolhido = document.querySelector(".selecionado");
if (escolhido !== null){
  escolhido.classList.remove("selecionado");
}
  foodname.classList.add("selecionado");
  changeButton()
}
//drink selector

function chooseDrink (drinkname){
drinkselected = drinkname.innerHTML;
pricedrink=Number(drinkname.querySelector("h4").innerHTML.substring(2).replace(",","."));
typedrink =drinkname.querySelector("h2").innerText;
console.log(typedrink)
const escolhido = document.querySelector(".bebidas .selecionado");
  if(escolhido !== null){
    escolhido.classList.remove("selecionado");
  }
  drinkname.classList.add("selecionado");
  changeButton()
}
//dessert selector

function chooseDessert (dessertname){
dessertselected = dessertname.innerHTML;
pricedessert = Number(dessertname.querySelector("h4").innerHTML.substring(2).replace(",","."));
typedessert =dessertname.querySelector("h2").innerText;
  const escolhido = document.querySelector(".sobremesa .selecionado");
  if(escolhido !== null){
    escolhido.classList.remove("selecionado");
  }
 dessertname.classList.add("selecionado");
 changeButton()
}



//choose 3 options
function changeButton(){
  const clickbutton = document.querySelector(".botao");
  if (foodselected && drinkselected && dessertselected){
   clickbutton.classList.add("button");
   
  }
}
function confirm(){
  pedido = pricefood + pricedrink + pricedessert;
  let frase = `Olá, gostaria de fazer o pedido:
  - Prato: ${typefood}
  - Bebida: ${typedrink}
  - Sobremesa: ${typedessert}
  Total: R$ ${pedido}`;
  
if (isNaN(pedido)){
alert("selecione todos")}
else{
  window.open(`https://wa.me/5515998546695?text=${encodeURIComponent(frase)}`);
}
}

 


//whatsapp confirmation


