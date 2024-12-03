export interface Consumidor {
  id: string;
  firstName: string;
  lastName: string;
  notesCount: number;
  productsCount: number;
  rank: number;
  profileUrl: string;
  imagem: string;
  pontos: number;
}

export function getNome(consumidor: Consumidor): string {
  return `${consumidor.firstName} ${consumidor.lastName}`;
}

export interface ConsumidorRank {
  usuarioId: number;
  pontos: number;
}
