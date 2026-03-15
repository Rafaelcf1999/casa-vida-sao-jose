import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; 
import {FireBaseService } from '../service/familia.service';
import { Router } from '@angular/router';
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

  private firebaseService = inject(FireBaseService);
  private router = inject(Router);

  // Objeto que armazena os dados do formulário
  cadastro = {
    nome: '',
    documento: '',
    rendaFamiliar: 0,
    cursoCadastrado: false,
    cep: '',
    rua: '',
    numero: 0,
    bairro: '',
    complemento: '',
    cidade: '',
    estado: '',
    temConjuge: false,
    qtdFilhos: 0,
    apta: true,
  };

  constructor() { }

  ngOnInit() { }

  // Função para buscar o endereço automaticamente pelo CEP
  async buscarCEP() {
  // 1. Limpa o CEP para ter apenas números
  const cepLimpo = this.cadastro.cep.replace(/\D/g, ''); 
  
  if (cepLimpo.length === 8) {
    try {
      // 2. CORREÇÃO DA URL: Precisa das crases ( ` ) e do caminho /ws/
      const url = `https://viacep.com.br/ws/${cepLimpo}/json/`;
      
      const resposta = await fetch(url);
      const dados = await resposta.json();
      
      if (!dados.erro) {
        this.cadastro.rua = dados.logradouro;
        this.cadastro.bairro = dados.bairro;
        this.cadastro.cidade = dados.localidade;
        this.cadastro.estado = dados.uf;
      } else {
        alert('CEP não encontrado!');
      }
    } catch (error) {
      console.error('Erro ao buscar o CEP:', error);
      alert('Não foi possível conectar ao serviço de busca de CEP.');
    }
  }
}

async salvar() {
  try {
    // 1. Mostra no console para você conferir se o 'bairro' e outros estão indo
    console.log('Tentando salvar:', this.cadastro);

    // 2. Chama o serviço que envia para o Firestore
    await this.firebaseService.addFamilia(this.cadastro);

    // 3. Se deu certo, avisa o usuário
    alert('Família cadastrada com sucesso!');

    // 4. Limpa o formulário ou volta para a lista
    this.router.navigate(['/home']); 

  } catch (error) {
    console.error('Erro ao salvar no Firebase:', error);
    alert('Houve um erro ao salvar. Verifique sua conexão.');
  }
}
}
