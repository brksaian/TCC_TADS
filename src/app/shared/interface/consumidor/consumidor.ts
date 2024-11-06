export interface Consumidor {
  id: string;
  nome: string;
  notesCount: number;
  productsCount: number;
  rank: number;
  profileUrl: string;
  imagem: string;
  pontos: number;
}

export interface ConsumidorRank {
  usuarioId: number;
  pontos: number;
}
