export class ItinerarioError extends Error {
  constructor(message: string) {
    super(message);
    this.name = "ItinerarioError";
  }
}

export class ItinerarioInvalidoError extends ItinerarioError {
  constructor() {
    super("O itinerário possui dados inválidos (datas ou destino incorretos).");
    this.name = "ItinerarioInvalidoError";
  }
}
