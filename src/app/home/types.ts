export type EnderecoFamilia = {
  nome: string;
  endereco: {
    cep: string;
    numero: number;
    complemento: string;
    rua: string;
    cidade: string;
    estado: string;
  };
  rendaFamiliar: number;
  cursoCadastrado: boolean;
  apta: boolean;
};
