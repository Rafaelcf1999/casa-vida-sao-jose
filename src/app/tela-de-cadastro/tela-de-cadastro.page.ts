import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; 
import { FireBaseService } from '../service/familia.service';
import { Router } from '@angular/router';
import { 
  IonContent, IonHeader, IonToolbar,IonTitle, 
  IonButtons, IonBackButton, IonIcon 
} from '@ionic/angular/standalone';
import { NavbarComponent } from '../components/navbar.component';

// Importação dos ícones necessários para o botão de voltar e lixeira
import { addIcons } from 'ionicons';
import { trashOutline, chevronBackOutline } from 'ionicons/icons';

@Component({
  selector: 'app-tela-de-cadastro',
  templateUrl: './tela-de-cadastro.page.html',
  styleUrls: ['./tela-de-cadastro.page.scss'],
  standalone: true,
  imports: [
    IonContent, IonHeader, IonToolbar,IonTitle, 
    IonButtons, IonBackButton, IonIcon,NavbarComponent,
    CommonModule, FormsModule 
  ]
})
export class TelaDeCadastroPage implements OnInit {
  private firebaseService = inject(FireBaseService);
  private router = inject(Router);

  // Objeto de cadastro com todos os campos necessários
  cadastro = {
    nome: '',
    telefone: '',
    documento: '',
    rendaFamiliar: 0,
    cursoCadastrado: false, // Controlado pelo botão de arrastar (Switch)
    cep: '',
    rua: '',
    numero: null as number | null,
    bairro: '',
    complemento: '',
    cidade: '',
    estado: '',
    dependentes: [] as any[], // Lista dinâmica de dependentes
    apta: true,
  };

  constructor() {
    // Registra os ícones para que apareçam no HTML
    addIcons({ trashOutline, chevronBackOutline });
  }

  ngOnInit() {}

  // --- LÓGICA DE DEPENDENTES ---
  addDependente() {
    this.cadastro.dependentes.push({
      nome: '',
      cpf: '',
      telefone: '',
    });
  }

  removeDependente(index: number) {
    this.cadastro.dependentes.splice(index, 1);
  }

  // --- LÓGICA DE ENDEREÇO (CEP) ---
  async buscarCEP() {
    // Limpa o CEP para conter apenas números
    const cepLimpo = this.cadastro.cep.replace(/\D/g, ''); 
    
    if (cepLimpo.length === 8) {
      try {
        // URL CORRIGIDA: com /ws/ e usando ${} para a variável
        const url = `https://viacep.com.br/ws/${cepLimpo}/json/`;
        
        const resposta = await fetch(url);
        const dados = await resposta.json();
        
        if (!dados.erro) {
          // Preenche os campos automaticamente
          this.cadastro.rua = dados.logradouro;
          this.cadastro.bairro = dados.bairro;
          this.cadastro.cidade = dados.localidade;
          this.cadastro.estado = dados.uf;
        } else {
          alert('CEP não encontrado!');
        }
      } catch (error) {
        console.error('Erro ao buscar o CEP:', error);
        alert('Erro na conexão com o serviço de CEP.');
      }
    }
  }

  // --- SALVAR NO FIREBASE ---
  async salvar() {
    if (!this.cadastro.nome) {
      alert('Por favor, preencha o nome do morador principal.');
      return;
    }

    try {
      // Ajuste do campo número para não enviar 'null' ao Firebase
      const dadosParaSalvar = {
        ...this.cadastro,
        numero: this.cadastro.numero ?? 0 
      };

      await this.firebaseService.addFamilia(dadosParaSalvar);
      alert('Família cadastrada com sucesso!');
      this.router.navigate(['/home']); 

    } catch (error) {
      console.error('Erro ao salvar no Firebase:', error);
      alert('Houve um erro ao salvar. Verifique sua conexão.');
    }
  }
}
