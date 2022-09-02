const cliente = {
  nome: "João",
  idade: 21,
  cpf: "0000000000",
  email: "joao@email.com"
}

const chaves = ["nome", "idade", "cpf", "email"]

chaves.forEach(info => console.log(cliente[info]))

console.log(cliente["conta"])
