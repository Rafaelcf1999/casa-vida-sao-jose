# casa-vida-sao-jose
Projeto destinado a cadeira de Prog Dispositivos Móveis



Requisitos Funcionais
- Login
- Cadastrar Familias 
- Gestão das Famílias beneficiadas pelo Projeto
- Marcar familias Beneficiadas
- Toda familia tem que estar cadastrada em um curso

Requisitos nao-funcionais:
- Tecnologia para front: Angular
- Banco de dados: Firebase
- Cadastro de pessoas:  firebase
- Gerar key Firebase
- Gerar key google
- Preenchimento do endereço das familias utilizando API CEP para autocomplete
- Sem Duplicidade de cadastro de familias
- Limite de tempo para beneficios (30dias)
- Usar variaveis em pt-br
- ionic





	{
	nome: string;
	endereco:{
		cep:string;
  		numero:number;
  		complemento:string;
  		rua:string;
  		cidade:string;
  		estado:string;
	};
  	rendaFamiliar: number;
  	cursoCadastrado: boolean;
  	apta:boolean;
  	
}
