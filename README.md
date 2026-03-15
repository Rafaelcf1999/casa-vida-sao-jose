# casa-vida-sao-jose
Projeto destinado a cadeira de Prog Dispositivos Móveis



### Requisitos Funcionais:

São comportamentos e regras de negócio do sistema.

## Autenticação

- O sistema deve permitir login de usuários.

- O sistema deve permitir cadastro de usuários (se aplicável).

- Gestão de Famílias

- O sistema deve permitir cadastrar famílias.

- O sistema deve permitir editar dados de famílias cadastradas.

- O sistema deve permitir visualizar famílias cadastradas.

- O sistema deve permitir marcar famílias como beneficiadas.

- O sistema deve permitir vincular uma família a um curso.

- Toda família cadastrada deve estar vinculada a um curso.

- O sistema não deve permitir duplicidade de cadastro de famílias.

- O sistema deve controlar o tempo limite de benefício (30 dias).

- O sistema deve marcar automaticamente quando a família estiver apta ou não apta (caso seja regra de negócio).

## Endereço

O sistema deve permitir o preenchimento automático do endereço da família via consulta de CEP (autocomplete).


### Requisitos Não Funcionais (Como o sistema deve ser)

São restrições técnicas e padrões de qualidade.

## Tecnologias

- O front-end deve ser desenvolvido utilizando Angular.

- O aplicativo deve ser desenvolvido utilizando Ionic.

- O banco de dados deve utilizar Firebase.

- A autenticação deve utilizar Firebase Authentication.

- O sistema deve utilizar Google API Key para integração com serviços externos.

## Padronização

O sistema deve utilizar variáveis e identificadores em português (pt-BR).



## Estrutura de Dados:
{
  nome: string;
  endereco: {
    cep: string;
    numero: number;
    complemento: string;
    rua: string;
    bairro: string;
    cidade: string;
    estado: string;
  };
  rendaFamiliar: number;
  cursoCadastrado: boolean;
  apta: boolean;
}



