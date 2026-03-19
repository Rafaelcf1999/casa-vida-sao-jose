import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; 
import {FireBaseService } from '../service/familia.service';
import { Router } from '@angular/router';
import { 
  IonContent, IonHeader, IonTitle, IonToolbar, 
  IonButtons, IonBackButton, IonItem, IonLabel, 
  IonInput, IonListHeader, IonButton, IonIcon, IonItemDivider,
  IonSelect, IonSelectOption, IonToggle, IonTextarea, IonList, IonFab, IonFabButton
} from '@ionic/angular/standalone';

@Component({
  selector: 'app-tela-de-cadastro',
  templateUrl: './tela-de-cadastro.page.html',
  styleUrls: ['./tela-de-cadastro.page.scss'],
  standalone: true,
  imports: [
    IonContent, IonHeader, IonTitle, IonToolbar, 
    IonButtons, IonBackButton, IonItem, IonLabel, 
    IonInput, IonListHeader, IonButton, IonIcon, IonItemDivider,
    IonSelect, IonSelectOption, IonToggle, IonTextarea, IonList, IonFab, IonFabButton,
    CommonModule, FormsModule 
  ]
})

export class TelaDeCadastroPage implements OnInit {

  private firebaseService = inject(FireBaseService);
  private router = inject(Router);

  // Objeto que armazena os dados do formulário
  cadastro = {
    nome: '',
    telefone: '',
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
    dependentes: [] as any[],
    apta: true,
  };

  constructor() { }

  ngOnInit() { }

  addDependente() {
    this.cadastro.dependentes.push({
      tipo: '',
      tipoOutro: '',
      nome: '',
      cpf: '',
      telefone: ''
    });
  }
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

removeDependente(index: number){
  this.cadastro.dependentes.splice(index, 1);
}

async salvar() {
  try {
    await this.firebaseService.addFamilia(this.cadastro);

    alert('Família cadastrada com sucesso!');

    this.router.navigate(['/home']); 

  } catch (error) {
    console.error('Erro ao salvar no Firebase:', error);
    alert('Houve um erro ao salvar. Verifique sua conexão.');
  }
}
}
