const cliente = {
  nome: 'João',
  idade: 21,
  cpf: '00000000000',
  email: 'joao@email.com',
  fones: [ '000000000000', '000000000000' ],
  dependentes: [{
    nome: 'Aurora',
    parentesco: 'filha',
    dataNasc: '21/07'
  }]
}

cliente.dependentes.push({
    nome:"Ray",
    parentesco:"filha",
    dataNasc:"04/02"
})


const filhaMaisNova = cliente.dependentes.filter(dependente => dependente.dataNasc==="04/02")

console.log(filhaMaisNova)
console.log(filhaMaisNova[0].nome)
