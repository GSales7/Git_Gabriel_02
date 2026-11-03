// Banco de Dados
let usuarioCorreto = "admin";
let senhaCorreta = "@dmin";
let produtos = ["teclado", "mouse", "monitor"];

console.log("------------------------------------------------");
console.log("----------- Bem-Vindo ao Estoque Fácil ---------");
let usuarioDigitado = prompt("Digite o usuário: ");
let senhaDigitada = prompt("Digite a senha: ");

// console.log(usuarioDigitado);
// console.log(senhaDigitada);

if (usuarioDigitado === usuarioCorreto && senhaDigitada === senhaCorreta) {
  console.log("Acesso Liberado!!");
  console.log();

  let opcao = prompt(
    "ESCOLHA SUA OPÇÃO\n 1- Listar Produtos\n 2-Cadastrar Novo Produto\n 3- Atualizar Produto Cadastrado\n 4-Excluir Produto\n 0- Sair",
  );

  while (opcao != "0") {
    // Listar os produtos
    if (opcao == "1") {
      //Desse jeito vai dar o índice
      //   console.log("Usando for ... in");
      //   for (let produto in produtos) {
      //     console.log(produto);
      //   }
      // Dessa forma agora sim ele irá amostrar os produtos
      console.log("Usando for ... of");
      for (let produto of produtos) {
        console.log(produto);
      }
      // Forma mais atualizada e mais utilizada
      //   console.log("Usando o forEach()");
      //   produtos.forEach((produto) => {
      //     console.log(produto);
      //   });
    } else if (opcao == "2") {
      //   console.log("A opção foi 2");
      let novoProduto = prompt("Digite o nome do novo produto: ").toLowerCase();
      console.log(novoProduto);
      console.log(produtos);
      produtos.push(novoProduto);
      console.log(produtos);
    } else if (opcao == "3") {
      //   console.log("A opção foi 3");
      console.log(produtos);
      let produtoAntigo = prompt(
        "Qual produto deseja atualizar? ",
      ).toLowerCase();
      console.log(produtoAntigo);
      let index = produtos.indexOf(produtoAntigo);
      let produtoNovo = prompt(
        "Qual produto deseja colocar no lugar?",
      ).toLowerCase();
      produtos[index] = produtoNovo;
      console.log(produtos);
    } else if (opcao == "4") {
      console.log(produtos);
      let produtoRemover = prompt("Qual produto deseja remover?").toLowerCase();
      console.log(produtoRemover);
      let index = produtos.indexOf(produtoRemover);
      produtos.splice(index, 1);
      console.log(produtos);
    } else {
      console.log("OPÇÃO INVÁLIDA!");
    }
    opcao = prompt(
      "ESCOLHA SUA OPÇÃO\n 1- Listar Produtos\n 2-Cadastrar Novo Produto\n 3- Atualizar Produto Cadastrado\n 4-Excluir Produto\n 0- Sair",
    );
  }
} else {
  //   console.log("Acesso Negado!");
  alert("Acesso Negado!!");
}
