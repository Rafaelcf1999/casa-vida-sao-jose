import { Component, OnInit, inject } from '@angular/core';
import { CommonModule, CurrencyPipe } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

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
  private router = inject(Router);

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

      alert('Erro ao carregar as informações.');
    }
  }

  realizarEntrega() {
    this.router.navigate(['/realizar-entrega']);
  }
}
