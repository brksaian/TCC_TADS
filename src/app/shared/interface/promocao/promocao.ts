export interface Promocao {
    id: number;
    nome: string;
    validade: Date;
    produtos: string[];
    precos: number[];
    imagem: string;
  }