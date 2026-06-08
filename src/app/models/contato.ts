export enum tipoContato {
  "Outros" = "Outros",
  "Amigo" = "Amigo",
  "Família" = "Família",
  "Trabalho" = "Trabalho",
  "Pessoal" = "Pessoal"
}

export interface Contato {
  id: number,
  nome: string,
  telefone: string,
  email: string,
  aniversario: Date,
  tipo: tipoContato | string,
}