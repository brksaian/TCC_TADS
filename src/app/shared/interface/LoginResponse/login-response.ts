import { Usuario } from "../user/user";

export interface LoginResponse {
  token: string;
  user: Usuario;
}
