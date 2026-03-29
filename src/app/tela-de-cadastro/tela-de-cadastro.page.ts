import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { FireBaseService } from '../service/familia.service';
import { Router } from '@angular/router';
import { IonContent, IonTitle, IonIcon } from '@ionic/angular/standalone';
import { NavbarComponent } from '../components/navbar.component';
import { Dialog } from '@capacitor/dialog';

import { addIcons } from 'ionicons';
import { trashOutline, chevronBackOutline } from 'ionicons/icons';

@Component({
  selector: 'app-tela-de-cadastro',
  templateUrl: './tela-de-cadastro.page.html',
  styleUrls: ['./tela-de-cadastro.page.scss'],
  standalone: true,
  imports: [
    IonContent,
    IonTitle,
    IonIcon,
    NavbarComponent,
    CommonModule,
    FormsModule,
  ],
})
export class TelaDeCadastroPage implements OnInit {
  private firebaseService = inject(FireBaseService);
  private router = inject(Router);

  cadastro = {
    nome: '',
    telefone: '',
    documento: '',
    rendaFamiliar: 0,
    cursoCadastrado: false,
    cep: '',
    rua: '',
    numero: null as number | null,
    bairro: '',
    complemento: '',
    cidade: '',
    estado: '',
    dependentes: [] as any[],
    apta: true,
  };

  constructor() {
    addIcons({ trashOutline, chevronBackOutline });
  }

  ngOnInit() {}

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

  async buscarCEP() {
    const cepLimpo = this.cadastro.cep.replace(/\D/g, '');

    if (cepLimpo.length === 8) {
      try {
        const url = `https://viacep.com.br/ws/${cepLimpo}/json/`;

        const resposta = await fetch(url);
        const dados = await resposta.json();

        if (!dados.erro) {
          this.cadastro.rua = dados.logradouro;
          this.cadastro.bairro = dados.bairro;
          this.cadastro.cidade = dados.localidade;
          this.cadastro.estado = dados.uf;
        } else {
          await Dialog.alert({
            title: 'Aviso',
            message: 'CEP não encontrado!',
          });
        }
      } catch (error) {
        console.error('Erro ao buscar o CEP:', error);
        await Dialog.alert({
          title: 'Erro',
          message: 'Erro na conexão com o serviço de CEP.',
        });
      }
    }
  }

  async salvar() {
    if (!this.cadastro.nome) {
      await Dialog.alert({
        title: 'Aviso',
        message: 'Por favor, preencha o nome do morador principal.',
      });
      return;
    }

    try {
      const dadosParaSalvar = {
        ...this.cadastro,
        numero: this.cadastro.numero ?? 0,
      };

      await this.firebaseService.addFamilia(dadosParaSalvar);
      await Dialog.alert({
        title: 'Sucesso',
        message: 'Família cadastrada com sucesso!',
      });
      this.router.navigate(['/home']);
    } catch (error) {
      console.error('Erro ao salvar no Firebase:', error);
      await Dialog.alert({
        title: 'Erro',
        message: 'Houve um erro ao salvar. Verifique sua conexão.',
      });
    }
  }
}
