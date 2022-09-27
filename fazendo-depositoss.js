const cliente = {
  nome: "João",
  idade: 21,
  cpf: "0000000000",
  email: "joao@email.com",
  fones: ["0000000000", "111111111111"],
  dependentes: [
    {
      nome: "Aurora",
      parentesco: "filha",
      dataNasc: "21/07", }
    {
      nome: "Ray",
      parentesco: "Esposa",
      dataNasc: "04/02" }
    }
  ],
    saldo: 100,
    depositar:function(valor){
      this.saldo += valor
    }
}

console.log(cliente.saldo)
cliente.depositar(80)
console.log(cliente.saldo)
