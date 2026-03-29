import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Dialog } from '@capacitor/dialog';

import { FireBaseService } from '../service/familia.service';
import {
  IonContent,
  IonTitle,
  IonSpinner,
  IonButton,
  IonIcon,
} from '@ionic/angular/standalone';
import { NavbarComponent } from '../components/navbar.component';

import { addIcons } from 'ionicons';
import { checkmarkOutline, locationOutline } from 'ionicons/icons';

@Component({
  selector: 'app-info-family',
  templateUrl: './info-family.page.html',
  styleUrls: ['./info-family.page.scss'],
  standalone: true,
  imports: [
    IonContent,
    IonTitle,
    IonSpinner,
    CommonModule,
    IonButton,
    IonIcon,
    FormsModule,
    NavbarComponent,
  ],
})
export class InfoFamilyPage implements OnInit {
  private readonly route = inject(ActivatedRoute);
  private readonly fbService = inject(FireBaseService);
  private readonly router = inject(Router);

  id: string | null = null;
  familia: any = null;

  constructor() {
    addIcons({ checkmarkOutline, locationOutline });
  }

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id');
    if (this.id) {
      this.carregarDados();
    }
  }
  
  async carregarDados() {
    try {
      if (this.id) {
        this.familia = await this.fbService.getFamiliaById(this.id);
        console.log('Dados da família carregados:', this.familia);
      }
    } catch (error) {
      console.error('Erro ao carregar dados da família:', error);
      await Dialog.alert({
        title: 'Erro',
        message: 'Erro ao carregar as informações.',
      });
    }
  }

  realizarEntrega() {
    console.log('Indo para a tela de entrega da família ID:', this.id);
    this.router.navigate(['/realizar-entrega', this.id]);
  }
}
