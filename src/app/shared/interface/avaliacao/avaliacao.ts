export interface Avaliacao {
  id: string;
  product: {
    id: string;
    name: string;
    code: string;
    category: string | null;
    image: string | null;
    price: number | null;
    unit: string | null;
    quantity: number;
    storeId: string | null;
    description: string | null;
  };
  store: {
    id: string;
    correlationId: string;
    store: {
      id: string;
      name: string;
      address: {
        street: string;
        number: string;
        neighborhood: string;
        city: string;
        state: string;
      };
      cnpj: string;
    };
    distance: number;
  };
  user: {
    id: string;
    keycloakId: string;
    firstName: string;
    lastName: string;
    email: string;
    photo: string | null;
  };
  review: string;
  rating: number;
  approved: boolean | null;
  createdAt: string;
}
