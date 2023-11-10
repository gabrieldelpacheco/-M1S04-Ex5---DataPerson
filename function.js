class Pessoa {
    constructor(nome, idade, altura) {
      this.nome = nome;
      this.idade = idade;
      this.altura = altura;
    }
  }
  let eu = new Pessoa("Gabriel", 36, 1.78);
  alert(
    `Olá me chamo ${eu.nome} tenho ${eu.idade} anos e tenho ${eu.altura} de altura.`
  );
  
  class Profissao extends Pessoa{
      constructor (nome, idade, altura, profissao){
          super(nome, idade, altura)
          this.profissao = profissao;
      }
  }
  
  eu = new Profissao("Gabriel", 36, 1.78, "investimentos")
  alert(`Olá me chamo ${eu.nome} tenho ${eu.idade} anos e tenho ${eu.altura} de altura e trabalho com ${eu.profissao}`)