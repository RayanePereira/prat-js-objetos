const cliente = {
  nome: "João",
  idade: 21,
  cpf: "0000000000",
  email: "joao@gmail.com",
  fones: ["0000000000", "1111111111"],
  dependentes: [
    {
      nome: "Rayane P",
      parentesco: "esposa",
      dataNasc: "04/02" },
    {
      nome: "Aurora P";
      parentesco: "filha",
      dataNasc: "21/07"
    }
 ],
}
saldo:100,
  depositar:function(valor){
    this.saldo += valor
  }
}

console.log(cliente.saldo)
cliente.depositar(30)
console.log(cleinte.saldo)
