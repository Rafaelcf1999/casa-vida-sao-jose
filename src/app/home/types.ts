export type Familia = {
  nome: string;
  telefone: string;
  cep: string;
  numero: number;
  complemento: string;
  rua: string;
  bairro: string;
  cidade: string;
  estado: string;
  documento: string;
  rendaFamiliar: number;
  cursoCadastrado: boolean;
  dependentes: Dependente[];
  apta: boolean;
};

export type Dependente = {
  tipo: string;
  tipoOutro: string;
  nome: string;
  cpf: string;
  telefone: string;
}
