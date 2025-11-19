export class DestinoError extends Error {
  constructor(message: string) {
    super(message);
    this.name = "DestinoError";
  }
}

export class DestinoNaoEncontradoError extends DestinoError {
  constructor(id: number) {
    super(`Destino com ID ${id} não foi encontrado.`);
    this.name = "DestinoNaoEncontradoError";
  }
}
