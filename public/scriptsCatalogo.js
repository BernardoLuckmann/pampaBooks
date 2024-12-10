async function buscaLivros() {
  const url = "http://localhost:3000/catalogo/";
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Status: ${response.status}`)
    }
  

  const responseData = await response.json()
  return responseData
  } catch (error) {
    console.error(error.message)
  }
}

function realizaAvaliacao(data) {
  const url = "http://localhost:3000/avaliacao";

  fetch(url, {
    method: "POST",
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify(data),
  })
  .then(response => response.json())
  .then(json => json)
  .catch(err => err);
}

const tabela = document.getElementById("tabela-livros-disponiveis");
let i = 0

buscaLivros().then(result => {
  result.forEach(function(item) {
    const row = document.createElement("tr");

    const celulaTitulo = document.createElement("td");
    celulaTitulo.textContent = item.titulo;
    row.appendChild(celulaTitulo);

    const celulaAutores = document.createElement("td");
    celulaAutores.textContent = item.autores;
    row.appendChild(celulaAutores); 

    const celulaDescricao = document.createElement("td");
    celulaDescricao.textContent = item.descricao;
    row.appendChild(celulaDescricao); 

    const celulaCategorias = document.createElement("td");
    celulaCategorias.textContent = item.categorias;
    row.appendChild(celulaCategorias); 

    const celulaGeneros = document.createElement("td");
    celulaGeneros.textContent = item.generos;
    row.appendChild(celulaGeneros);

    const celulaAvaliacao = document.createElement("td");
    celulaAvaliacao.innerHTML = `<input type="number" name="${item._id}" class="avaliacao" min="0" max="5">`
    row.appendChild(celulaAvaliacao);
    
    const celulaCarrinho = document.createElement("td");
    celulaCarrinho.innerHTML = `<input type="checkbox" class="livros" id="${item._id}">`
    row.appendChild(celulaCarrinho); 

    tabela.appendChild(row);
    
    i++
  }) 
})

let pedidosCheckeds  = []
let livrosIds = []

let pedido = {}
document.getElementById("submit-pedido").addEventListener('click', function(){
  pedidosCheckeds = document.querySelectorAll('input[type="checkbox"]:checked')

  const userId = localStorage.getItem("userId");

  if(pedidosCheckeds.length == 0) {
    alert("Nenhum livro foi selecionado.")
    return
  }

  if(!userId) {
    alert("Você precisa estar logado para realizar um pedido.")
    return
  }

  pedidosCheckeds.forEach(function(item) {
    livrosIds.push(item.id);
  })

  pedido = {
    livrosId: livrosIds,
    usuarioId: userId,
    custo: livrosIds.length * 40
  }

  realizaPedido(pedido)
});

document.getElementById("submit-avaliacoes").addEventListener('click', function(){

  let numbersChecked  = []
  let notasNomes  = []

  numbersChecked = document.querySelectorAll('input[type="number"][min][max]')

  const userId = localStorage.getItem("userId");

  if(numbersChecked.length == 0) {
    alert("Nenhuma avaliação foi realizada.")
    return
  }

  if(!userId) {
    alert("Você precisa estar logado para realizar uma avaliação.")
    return
  }

  numbersChecked.forEach(function(item) {
    const value = item.value.trim();
    if(value !== "") {
      notasNomes.push({
        livroId: item.getAttribute("name"),
        usuarioId: localStorage.getItem("userId"),
        nota: item.value
      });
    }
  })
  notasNomes.forEach(function(item) {
    realizaAvaliacao(item)
  })

  numbersChecked = [];
  notasNomes = [];

});






