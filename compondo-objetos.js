const cliente = {
  nome: "João",
  idade: 21,
  cpf: "000000000",
  email: "joao@email.com",
  fones: ["0000000000","111111111111"]
}

cliente.dependentes = {
  nome: "Rayane",
  parentesco: "Esposa",
  dataNasc: "04/02/2003"
}

console.log(cliente)

cliente.dependentes.nome = "Rayane P."

console.log(cliente)
