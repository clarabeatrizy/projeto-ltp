import { DestinoNaoEncontradoError } from "./DestinoError";
import { ItinerarioInvalidoError } from "./ItinerarioError";

const destinos = [
  { id: 1, nome: "Paris", pais: "França", custoDiario: 500 }
];

function buscarDestino(id: number) {
  const destino = destinos.find(d => d.id === id);

  if (!destino) {
    throw new DestinoNaoEncontradoError(id);
  }

  return destino;
}

function criarItinerario() {
  try {
    // erro 1: destino inexistente
    buscarDestino(99);

    // erro 2: datas inválidas
    // throw new ItinerarioInvalidoError();

  } catch (error: any) {
    console.error("ERRO CAPTURADO:", error.message);
  }
}

criarItinerario();
