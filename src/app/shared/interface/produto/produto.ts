export interface Produto {
  id: string;
  name: string;
  code: string;
  category: string | null;
  image: string | null;
  price: number | null;
  unit: string | null;
  storeId: string | null;
}
