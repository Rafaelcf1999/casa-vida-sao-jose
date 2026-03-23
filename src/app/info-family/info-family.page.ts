import { Component, OnInit, inject } from '@angular/core';
import { CommonModule, CurrencyPipe } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

import { FireBaseService } from '../service/familia.service';
import {
  IonContent,
  IonTitle,
  IonSpinner,
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardSubtitle,
  IonCardContent,
  IonListHeader,
  IonItem,
  IonLabel,
  IonButton,
  IonIcon,
} from '@ionic/angular/standalone';
import { NavbarComponent } from '../components/navbar.component';

@Component({
  selector: 'app-info-family',
  templateUrl: './info-family.page.html',
  styleUrls: ['./info-family.page.scss'],
  standalone: true,
  imports: [
    IonContent,
    IonTitle,
    IonSpinner,
    IonCard,
    IonCardHeader,
    IonCardTitle,
    IonCardSubtitle,
    IonCardContent,
    IonListHeader,
    IonItem,
    IonLabel,
    CommonModule,
    IonButton,
    IonIcon,
    FormsModule,
    CurrencyPipe,
    NavbarComponent,
  ],
})
export class InfoFamilyPage implements OnInit {
  private route = inject(ActivatedRoute);
  private fbService = inject(FireBaseService);

  id: string | null = null;
  familia: any = null; // Aqui ficarão os dados vindos do Firebase

  constructor() {}

  ngOnInit() {
    // Pega o ID da URL
    this.id = this.route.snapshot.paramMap.get('id');
    if (this.id) {
      this.carregarDados();
    }
  }
  async carregarDados() {
    try {
      // Verificamos se o ID existe antes de chamar o banco
      if (this.id) {
        // Chamamos o service e aguardamos (await) a resposta
        this.familia = await this.fbService.getFamiliaById(this.id);

        // Log para você conferir no console se os dependentes vieram junto
        console.log('Dados da família carregados:', this.familia);
      }
    } catch (error) {
      console.error('Erro ao carregar dados da família:', error);

      alert('Erro ao carregar as informações.');
    }
  }

  realizarEntrega() {
    console.log('Botão de entrega clicado!');
    // Por enquanto, só um aviso para testar se funciona
    alert('Entrega realizada para ' + this.familia?.nome);
  }
}
