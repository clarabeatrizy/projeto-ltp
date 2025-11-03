import { Destination } from "./Destination";

// Classe derivada (herança)
export class LuxuryDestination extends Destination {
  private nivelLuxo: string;

  constructor(nome: string, pais: string, custoMedioDiario: number, nivelLuxo: string) {
    super(nome, pais, custoMedioDiario); // chama o construtor da classe pai
    this.nivelLuxo = nivelLuxo;
  }

  // Polimorfismo — sobrescreve o método da classe pai
  public exibirDestino(): void {
    console.log(
      ` Destino de luxo: ${this.nome} - ${this.pais} (Custo médio: R$${this.custoMedioDiario}/dia, Nível: ${this.nivelLuxo})`
    );
  }
}
