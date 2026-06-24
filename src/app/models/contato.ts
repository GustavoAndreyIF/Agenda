export enum tipoContato {
  "Outros" = "Outros",
  "Amigo" = "Amigo",
  "Família" = "Família",
  "Trabalho" = "Trabalho",
  "Pessoal" = "Pessoal"
}

export interface Contato {
  nome: string,
  telefone: string,
  email: string,
  aniversario: string,
  tipo: tipoContato | string,
}

export interface ContatoPayload {
  id: string,
  nome: string,
  telefone: string,
  email: string,
  aniversario: string,
  tipo: tipoContato | string,
}