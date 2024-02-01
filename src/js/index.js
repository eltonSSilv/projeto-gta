/*

objetivo 1 - quando o usuario clicar no botao de seleção de
plataformas deve abrir uma caixa  com os botoes de plataforma

  passo 1 - pegar o botao de selecao de plataformas no js pra poder
  verificar quando o ususario clicar em cima dele

  passo 2 - pegar o elemento do conteudo que precisa ser mostrado

  passo 3 - pegar o clique do usuario no js

  passo 4 - quando o usuario clicar, adicionar a classe ativo na listagem
  de plataformas  pra que o conteudo dele apareça



objetivo 2 - caso a lista de botoes de plataforma ja esteja aparecendo
e o usuario clicar em cima do botão, o conteúdo deve ser escondido

  passo 1 - verificr se o botao ja ta aberto, se sim, devemos remover
   a classe ativo pr que ele esconda o conteudo novamente

*/

// objetivo 1 - quando o usuario clicar no botao de seleção de plataformas deve abrir uma caixa  com os botoes de plataforma

//  passo 1 - pegar o botao de selecao de plataformas no js pra poder verificar quando o ususario clicar em cima dele

const botao = document.querySelector(".btn-plataforma");


//  passo 2 - pegar o elemento do conteudo que precisa ser mostrado

const elementoPlataformas = document.querySelector(".btn-plataforma .plataforma");

// passo 3 - pegar o clique do usuario no js

botao.addEventListener("click", () => {
  //objetivo 2 - caso a lista de botoes de plataforma ja esteja aparecendo e o usuario clicar em cima do botão, o conteúdo deve ser escondido

  const botaoEstaAberto = elementoPlataformas.classList.contains("ativo");

  elementoPlataformas.classList.toggle("ativo");

});