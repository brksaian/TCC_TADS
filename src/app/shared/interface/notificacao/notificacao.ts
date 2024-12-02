export interface Notificacao {
  id: string;
  tipo: 'alteracao-preco' | 'novo-seguidor' | 'novo-comentario';
  titulo: string;
  mensagem: string;
  data: string;
  linkTexto: string;
  linkUrl: string;
}
