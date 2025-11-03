import { Destination } from "./Destination";
import { Itinerary } from "./Itinerary";
import { LuxuryDestination } from "./LuxuryDestination";

// Criar destinos
const destino1 = new Destination("Paris", "França", 300);
const destino2 = new LuxuryDestination("Maldivas", "Ilhas Maldivas", 1200, "5 estrelas");

// Criar itinerários
const viagem1 = new Itinerary("Férias em Paris", destino1, "2025-06-10", "2025-06-20");
const viagem2 = new Itinerary("Lua de Mel nas Maldivas", destino2, "2025-09-01", "2025-09-10");

// Adicionar atividades
viagem1.adicionarAtividade("Visitar a Torre Eiffel");
viagem1.adicionarAtividade("Passeio pelo Louvre");

viagem2.adicionarAtividade("Mergulho no coral");
viagem2.adicionarAtividade("Jantar na praia privada");

// Exibir itinerários
viagem1.exibirItinerario();
viagem2.exibirItinerario();
