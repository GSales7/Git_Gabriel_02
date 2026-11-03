// npm install readline-sync
const lerLinha = require("readline-sync");

// Banco de Dados
let usuarioCorreto = "admin";
let senhaCorreta = "@dmin";
let produtos = ["teclado", "mouse", "monitor"];

// Pega os dados
console.log("Digite o usuário: ");
let usuarioDigitado = lerLinha.question();
console.log("Digite a senha: ");
let senhaDigitada = lerLinha.question();

if (usuarioDigitado === usuarioCorreto && senhaDigitada === senhaCorreta) {
  console.log("Acesso Liberado!");

  console.log("----- MENU -----");
  console.log("1- Listar Produtos");
  console.log("2- Cadastrar Novo Produto");
  console.log("3- Atualizar Produto Cadastrado");
  console.log("4- Excluir Produto");
  console.log("0- Sair");
  console.log("Digite a opção escolhida: ");
  let opcao = lerLinha.question();

  while (opcao != "0") {
    if (opcao === "1") {
      console.log(produtos);
      // -------------------------------------------------------------
    } else if (opcao === "2") {
      console.log("Digite o nome do novo produto: ");
      let novoProduto = lerLinha.question().toLowerCase();
      produtos.push(novoProduto);
      console.log(produtos);
      console.log("Produto Adicionado!");
      // ------------------------------------------------------------
    } else if (opcao === "3") {
      console.log(produtos);
      console.log("Qual produto deseja atualizar? ");
      let produtoAtualizar = lerLinha.question().toLowerCase();
      // Verifica se o produto existe mesmo na lista
      if (produtos.includes(produtoAtualizar)) {
        let indice = produtos.indexOf(produtoAtualizar);
        console.log("Digite o nome do novo produto: ");
        let novoNome = lerLinha.question().toLowerCase();
        produtos[indice] = novoNome;
        console.log(produtos);
        console.log("Produto Atualizado Com Sucesso!");
      } else {
        console.log("Produto Não Encontrado!");
      }

      // -------------------------------------------------------------
    } else if (opcao === "4") {
      console.log(produtos);
      console.log("Qual produto deseja remover? ");
      let produtoRemover = lerLinha.question().toLowerCase();
      if (produtos.includes(produtoRemover)) {
        let indiceExcluir = produtos.indexOf(produtoRemover);
        produtos.splice(indiceExcluir, 1);
        console.log(produtos);
        console.log("Produto Excluido!");
      } else {
        console.log("Produto Não Encontrado!");
      }
      // -----------------------------------------------------------
    } else {
      console.log("Opção Inválida!");
    }
    console.log("----- MENU -----");
    console.log("1- Listar Produtos");
    console.log("2- Cadastrar Novo Produto");
    console.log("3- Atualizar Produto Cadastrado");
    console.log("4- Excluir Produto");
    console.log("0- Sair");
    console.log("Digite a opção escolhida: ");
    opcao = lerLinha.question();
  }
} else {
  console.log("Acesso Negado!");
}
