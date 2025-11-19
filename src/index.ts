import { Destination } from "./Destination";
import { Itinerary } from "./Itinerary";
import "./error/teste";

// Criar um destino
const destino1 = new Destination("Paris", "França", 300);
destino1.exibirDestino();

// Criar itinerário
const viagem1 = new Itinerary("Férias em Paris", destino1, "2025-06-10", "2025-06-20");

// Adicionar atividades
viagem1.adicionarAtividade("Visitar a Torre Eiffel");
viagem1.adicionarAtividade("Passeio pelo Louvre");
viagem1.adicionarAtividade("Caminhar pelo Rio Sena");

// Exibir itinerário
viagem1.exibirItinerario();
