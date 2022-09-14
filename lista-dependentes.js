const cliente = {
  nome: "João",
  idade: 21,
  cpf: "0000000000",
  email: "joao@email.com",
  fones: ["1111111111", "2121212212121"],
  dependentes: [{
    nome: "Rayane P.",
    parentesco: "esposa",
    dataNasc: "04/02"
  }]
}

cliente.dependentes.push({
  nome: "Aurora P.",
  parentesco: "filha",
  dataNasc: "21/07"
})

const filhaMaisNova = cliente.dependentes.filter(dependente => dependente.dataNasc==="21/07")

console.log(filhaMaisNova)
console.log(filhaMaisNova[0].nome)
