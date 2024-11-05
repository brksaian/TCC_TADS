import { Produto } from "../produto/produto";

export interface Avaliacao {
  id: number;
  produto_id: number;
  usuario_id: number;
  produto: Produto;
  estrelas: number;
  comentario: string;
  created_at: string;
}
