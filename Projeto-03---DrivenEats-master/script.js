let foodselected
let drinkselected
let dessertselected
//primary food selector

function chooseFood (foodname){
foodselected = foodname.innerHTML;
  const escolhido = document.querySelector(".selecionado");
if (escolhido !== null){
  escolhido.classList.remove("selecionado");
}
  foodname.classList.add("selecionado");
}
//drink selector

function chooseDrink (drinkname){
drinkselected = drinkname.innerHTML;
  const escolhido = document.querySelector(".bebidas .selecionado");
  if(escolhido !== null){
    escolhido.classList.remove("selecionado");
  }
  drinkname.classList.add("selecionado");
}
//dessert selector

function chooseDessert (dessertname){
dessertselected = dessertname.innerHTML;
  const escolhido = document.querySelector(".sobremesa .selecionado");
  if(escolhido !== null){
    escolhido.classList.remove("selecionado");
  }
 dessertname.classList.add("selecionado");
}



//choose 3 options
function changeButton(){
  const clickbutton = document.querySelector(".botao");
  if (foodselected && drinkselected && dessertselected){
   clickbutton.classList.add("button");
  }
  else{
    clickbutton.classlist.remove(button);
  }
}


