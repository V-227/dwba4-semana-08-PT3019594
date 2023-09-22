class Aluno {
  constructor(primeiroNome, segundoNome, primeiraNota, segundaNota) {
    this.primeiroNome = primeiroNome;
    this.segundoNome = segundoNome;
    this.primeiraNota = primeiraNota;
    this.segundaNota = segundaNota;
  }

  nomeCompleto() {
    return this.primeiroNome + " " + this.segundoNome;
  }

  media() {
    return (this.primeiraNota * 0.6) + (this.segundaNota * 0.4);
  }

  situacao() {
    return this.media() > 6 ? "Aprovado" : "Reprovado";
  }
}

const alunos = [
  new Aluno("João", "da Silva", 7.5, 8.0),
  new Aluno("Maria", "Santos", 6.0, 7.0),
  new Aluno("Pedro", "Oliveira", 5.0, 4.0),
  new Aluno("Ana", "Ferreira", 5.5, 7.5),
  new Aluno("Luiza", "Gomes", 9.0, 8.0)
];

function mostrarInformacoesDosAlunos() {
     const resultadoDiv = document.getElementById("resultado");
  resultadoDiv.innerHTML = ""; // Limpa o conteúdo anterior

  for (const aluno of alunos) {
    const alunoInfo = document.createElement("p");
    alunoInfo.textContent = `Nome completo: ${aluno.nomeCompleto()}, Média: ${aluno.media()}, Situação: ${aluno.situacao()}`;
    resultadoDiv.appendChild(alunoInfo);
  }
}

mostrarInformacoesDosAlunos();
