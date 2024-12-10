async function buscaPedidos(usuario) {
  const url = `http://localhost:3000/historico/${usuario}`;
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

async function buscaLivro(livroId) {
  const url = `http://localhost:3000/livro/${livroId}`;
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

const principal = document.getElementById("principal");
const userId = localStorage.getItem("userId");

buscaPedidos(userId).then(result => {
  result.forEach(function(item) {

    const tabela = document.createElement("table");
    tabela.setAttribute('class', 'tabela-pedido')

    const header = tabela.createTHead();
    const row = header.insertRow(0);
    const pedido = row.insertCell(0);
    const custo = row.insertCell(1);
    const data = row.insertCell(2);
    pedido.textContent = `Pedido ${item._id}`;
    custo.textContent = `Custo: ${item.custo}`;
    data.textContent = `Data: ${item.dataCriacao}`;

    item.livrosId.forEach(function(item) {
      buscaLivro(item).then(result => {
        const row = document.createElement("tr");

        const celulaTitulo = document.createElement("td");
        celulaTitulo.textContent = result.titulo;
        row.appendChild(celulaTitulo);

        const celulaAutores = document.createElement("td");
        celulaAutores.textContent = result.autores;
        row.appendChild(celulaAutores); 

        const celulaDescricao = document.createElement("td");
        celulaDescricao.textContent = result.descricao;
        row.appendChild(celulaDescricao); 

        const celulaCategorias = document.createElement("td");
        celulaCategorias.textContent = result.categorias;
        row.appendChild(celulaCategorias); 

        const celulaGeneros = document.createElement("td");
        celulaGeneros.textContent = result.generos;
        row.appendChild(celulaGeneros);

        tabela.appendChild(row);
      })
    })

    principal.appendChild(tabela)
  }) 
})




