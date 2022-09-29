const clientes = [
  {
    nome: "João",
    cpf: "00000000000,
    dependentes: [{
      nome: "Aurora",
      parentesco: "filha",
      dataNasc: "21/07"
     },
     {
      nome: "Isis",
      parentesco: "filha",
      dataNasc: "24/07"
     }],
  },
  {
    nome: "Ray",
    cpf: "00000000000",
    dependentes: [{
      nome: "Mariane",
      parentesco: "irmã",
      dataNasc: "28/08"
     }],
  } 
]

const listaDependentes = [...clientes[0].dependentes, ...clientes[1].dependentes]

console.table(listaDependentes)
