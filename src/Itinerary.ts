import { Destination } from "./Destination";

// Classe que representa um Itinerário de viagem (um roteiro completo)
export class Itinerary {
  titulo: string;
  destino: Destination;
  dataInicio: string;
  dataFim: string;
  atividades: string[] = [];
 // O construtor serve para criar o objeto com os dados da viagem
  constructor(titulo: string, destino: Destination, dataInicio: string, dataFim: string) {
    this.titulo = titulo;
    this.destino = destino;
    this.dataInicio = dataInicio;
    this.dataFim = dataFim;
  }

  adicionarAtividade(atividade: string): void {
    this.atividades.push(atividade);
  }

  exibirItinerario(): void {
    console.log(`Itinerário: ${this.titulo}`);
    console.log(`Destino: ${this.destino.nome} - ${this.destino.pais}`);
    console.log(`Período: ${this.dataInicio} até ${this.dataFim}`);
    console.log("Atividades:");
    this.atividades.forEach((at, i) => console.log(`${i + 1}. ${at}`));
  }
}
