function entraUsuario(data) {
    const url = "http://localhost:3000/usuario/login";
  
    fetch(url, {
      method: "POST",
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(data),
    })
    .then(response => {
      if (!response.ok) {
        alert("Falha na autenticação de usuário.")
        throw new Error("Falha na autenticação de usuário.")
      }
        return response.json()
    }) 
    .then(json => {
      localStorage.setItem("token", json.message)
      alert("Entrou com sucesso no site.")
    })
    .catch(err => {
      console.log(err)
    });
  }
  
  function cadastraUsuario(data) {
    const url = "http://localhost:3000/usuario/cadastro";
  
    fetch(url, {
      method: "POST",
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(data),
    })
    .then(response => {
        if (!response.ok) {
            alert("Usuário já registrado.")
            throw new Error("Usuário já registrado.")
        }
           return response.json()
    }) 
    .then(json => {
      localStorage.setItem("token", json.token)
      alert("Cadastrado com sucesso.")
    })
    .catch(err => console.log(err));
  }

  function autorizaUsuario() {
    if(localStorage.getItem("token") !== null || undefined) {
      const token = localStorage.getItem("token");

      json = JSON.parse(atob(token.split('.')[1]));
      
      localStorage.setItem("userId", json.userId);
    } else {
      console.log("Usuário inválido")

    }


  }

//

if(document.getElementById("submit-login")) {
  document.getElementById("submit-login").addEventListener("click", function(){
    let login = {
      email: document.entra_usuario.email.value,
      senha: document.entra_usuario.senha.value
    }

    entraUsuario(login)
    
  })
} else {
  document.getElementById("submit-cadastro").addEventListener("click", function(){
    let cadastro = {
      nome: document.cadastra_usuario.nome.value,
      email: document.cadastra_usuario.email.value,
      senha: document.cadastra_usuario.senha.value
    }
  
    cadastraUsuario(cadastro)
    autorizaUsuario()
})
}



  

