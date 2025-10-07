// Classe que representa um Destino
export class Destination {
  nome: string;
  pais: string;
  custoMedioDiario: number;

    // O Construtor inicializa o objeto com os dados fornecidos.
  constructor(nome: string, pais: string, custoMedioDiario: number) {
    this.nome = nome;
    this.pais = pais;
    this.custoMedioDiario = custoMedioDiario;
  }
// Método para imprimir os detalhes do Destino no console.
  exibirDestino(): void {
    console.log(`Destino: ${this.nome} - ${this.pais} (Custo médio: R$${this.custoMedioDiario}/dia)`);
  }
}
