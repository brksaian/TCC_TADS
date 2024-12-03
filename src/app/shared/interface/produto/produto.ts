export interface Produto {
  id: number;
  name: string;
  descricao: string;
  image: string;
  categoria?: number;
  created_at: string;
  updated_at: string;
}
