// ----- CRIANDO O LEITOR DE ENTRADAS DO USUÁRIO -----
const readline = require("readline-sync");

// ---------- DEFINIÇÕES DE FUNÇÕES ----------
function listarProdutos(produtos) {
  console.log(produtos);
}

function verificaSenhaGerente() {
  console.log("Digite a senha de Gerente: ");
  let senhaGerenteDigitada = readline.question();
  if (senhaGerenteDigitada === senhaGerente) {
    return true;
  } else {
    return false;
  }
}

function cadastrarProduto(produtos) {
  if (verificaSenhaGerente()) {
    console.log("Digite o nome do produto que deseja cadastrar: ");
    let novoProduto = readline.question().toLowerCase();
    produtos.push(novoProduto);
    console.log(produtos);
    console.log("Produto Cadastrado com Sucesso!");
  } else {
    console.log("Senha Incorreta!");
  }
}

// Atualizar Produto
function atualizarProduto(produtos) {
  if (verificaSenhaGerente()) {
    console.log(produtos);
    console.log("Qual produto deseja atualizar? ");
    let produtoAtualizar = readline.question().toLowerCase();
    if (produtos.includes(produtoAtualizar)) {
      console.log("Digite novo nome: ");
      let novoNome = readline.question().toLowerCase();
      let indice = produtos.indexOf(produtoAtualizar);
      produtos[indice] = novoNome;
      console.log(produtos);
      console.log("Produto Atualizado Com Sucesso!");
    } else {
      console.log("Produto Não Encontrado!!");
    }
  } else {
    console.log("Senha Incorreta!!");
  }
}

function excluirProduto(produtos) {
  if (verificaSenhaGerente()) {
    console.log(produtos);
    console.log("Qual produto deseja remover? ");
    let produtoEx = readline.question().toLowerCase();
    if (produtos.includes(produtoEx)) {
      let indiceEx = produtos.indexOf(produtoEx);
      console.log("Deseja mesmo remover? (S/N) ", produtoEx);
      let confirmacao = readline.question().toUpperCase();
      if (confirmacao === "S") {
        produtos.splice(indiceEx, 1);
        console.log(produtos);
        console.log("Produto Excluido!");
      } else if (confirmacao === "N") {
        console.log("Exclusão Cancelada!");
      }
    } else {
      console.log("Produto Não Encontrado!");
    }
  } else {
    console.log("Senha Incorreta!!");
  }
}

// ---------- BANCO DE DADOS ----------
let usuarioAtendente = "";
let senhaAtendente = "";
let senhaGerente = "";
let itensCadastrados = [
  "pizza",
  "hambúrguer",
  "suco",
  "batata frita",
  "lasanha",
  "salada",
  "pudim",
  "refrigerante",
  "água",
  "café",
];

//------------------------------------------------------------------------
let tentativas = 0;
while (tentativas < 3) {
  console.log("---------- Restaurante Sabor & Código ----------");
  console.log("---------------- Faça Seu Login ----------------");
  console.log("Digite seu usuário: ");
  let usuario = readline.question();
  console.log("Digite a senha: ");
  let senha = readline.question();

  if (usuario === usuarioAtendente && senha === senhaAtendente) {
    tentativas = 4;
    console.log("Acesso Liberado!");
    let opcao = "";
    do {
      console.log("---------- Restaurante Sabor & Código ----------");
      console.log("1- Listar Produtos");
      console.log("2- Cadastrar Novo Produto");
      console.log("3- Atualizar Produto Cadastrado");
      console.log("4- Excluir Produto");
      console.log("0- Sair");
      console.log("Digite a opção escolhida: ");
      opcao = readline.question();

      if (opcao === "1") {
        listarProdutos(itensCadastrados);
      } else if (opcao === "2") {
        cadastrarProduto(itensCadastrados);
      } else if (opcao === "3") {
        atualizarProduto(itensCadastrados);
      } else if (opcao === "4") {
        excluirProduto(itensCadastrados);
      } else if (opcao === "0") {
        console.log("Tchau! Até a Próxima!");
      } else {
        console.log("Opção Inválida!");
      }
    } while (opcao != "0");
  } else {
    tentativas++;
    console.log(tentativas);
    console.log("Acesso Negado!");
  }
}
if (tentativas === 3) {
  console.log("3 Tentativas Realizadas!");
  console.log("Programa Encerrado!");
}
