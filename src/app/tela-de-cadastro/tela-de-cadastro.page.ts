import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; 
import { 
  IonContent, IonHeader, IonTitle, IonToolbar, 
  IonButtons, IonBackButton, IonItem, IonLabel, 
  IonInput, IonListHeader, IonButton, IonIcon,
  IonSelect, IonSelectOption, IonToggle, IonTextarea, IonList
} from '@ionic/angular/standalone';

@Component({
  selector: 'app-tela-de-cadastro',
  templateUrl: './tela-de-cadastro.page.html',
  styleUrls: ['./tela-de-cadastro.page.scss'],
  standalone: true,
  imports: [
    IonContent, IonHeader, IonTitle, IonToolbar, 
    IonButtons, IonBackButton, IonItem, IonLabel, 
    IonInput, IonListHeader, IonButton, IonIcon,
    IonSelect, IonSelectOption, IonToggle, IonTextarea, IonList,
    CommonModule, FormsModule 
  ]
})
export class TelaDeCadastroPage implements OnInit {

  // Objeto que armazena os dados do formulário
  cadastro = {
    nome: '',
    cpf: '',
    cep: '',
    rua: '',
    bairro: '',
    temConjuge: false,
    qtdFilhos: 0
  };

  constructor() { }

  ngOnInit() { }

  // Função para buscar o endereço automaticamente pelo CEP
  async buscarCEP() {
    const cepLimpo = this.cadastro.cep.replace(/\D/g, ''); 
    
    if (cepLimpo.length === 8) {
      try {
        const resposta = await fetch('https://viacep.com.br{cep}/json/');
        const dados = await resposta.json();
        
        if (!dados.erro) {
          this.cadastro.rua = dados.logradouro;
          this.cadastro.bairro = dados.bairro;
        } else {
          alert('CEP não encontrado!');
        }
      } catch (error) {
          const resposta = await fetch(`https://viacep.com.br{cepLimpo}/json/`);

      }
    }
  }

  salvar() {
    console.log('Dados da família:', this.cadastro);
    alert('Cadastro realizado com sucesso!');
  }
}
