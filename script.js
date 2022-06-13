//primary food selector

function chooseFood(foodname) {
  const verdinho = document.querySelector('.foodname')
  if (verdinho !== null) {
    verdinho.classList.remove('selecionado')
  }
  verdinho.classList.add('selecionado')
  comida = foodname.innerHTML
}
