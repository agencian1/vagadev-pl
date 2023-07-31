$(document).ready(function(){
  $('.multiple-items').slick({
    dots: true,
    infinite: true,
    arrows: true,
    speed: 300,
    slidesToShow: 1
  });

  $('.multiple-items-mobile').slick({
    dots: false,
    infinite: true,
    arrows: true,
    speed: 300,
    slidesToShow: 1,
  });
});


//Botão 1
function alterarTextoECor() {
  const botao = event.target;
  const imagem = document.getElementById("imagem-mario");

  const valorElement = document.getElementById("valor");

  if (botao.textContent === "COMPRAR") {
      botao.textContent = "COMPRADO";
      //texto.textContent = "Novo texto após clicar";
      botao.style.backgroundColor = "#084154"; // Altera a cor do botão para vermelho
      botao.classList.add("add-mario");
      valor++; // Incrementa o valor
  } else {
      botao.textContent = "COMPRAR";
      //texto.textContent = "Texto inicial";
      botao.style.backgroundColor = "#3EC6E0"; // Retorna a cor original do botão
      valor--; // Decrementa o valor
  }
  valorElement.textContent = valor; // Atualiza o texto com o novo valor

  somar = !somar; // Alterna o estado do botão (soma/subtrai) para a próxima vez que for clicado

  imagem.style.display = somar ? "none" : "block";
}

//Menu Hamburguer
function toggleMenu() {
  var navLinks = document.getElementById("navLinks");
  if (navLinks.style.display === "block") {
      navLinks.style.display = "none";
  } else {
      navLinks.style.display = "block";
  }
}
