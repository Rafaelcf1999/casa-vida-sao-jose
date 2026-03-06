import { Component } from '@angular/core';
import {
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonSearchbar,
  IonList,
  IonLabel,
  IonItem,
} from '@ionic/angular/standalone';
import type { EnderecoFamilia } from './types';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  imports: [
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonSearchbar,
    IonList,
    IonLabel,
    IonItem,
  ],
})
export class HomePage {
  constructor() {}

  familiasMock: EnderecoFamilia[] = [
    {
      nome: 'Família Silva',
      endereco: {
        cep: '12345-678',
        numero: 123,
        complemento: 'Apto 101',
        rua: 'Rua das Flores',
        cidade: 'São Leopoldo',
        estado: 'RS',
      },
      rendaFamiliar: 2500,
      cursoCadastrado: true,
      apta: true,
    },
    {
      nome: 'Família Santos',
      endereco: {
        cep: '87654-321',
        numero: 456,
        complemento: 'Casa',
        rua: 'Avenida Principal',
        cidade: 'Novo Hamburgo',
        estado: 'RS',
      },
      rendaFamiliar: 1800,
      cursoCadastrado: false,
      apta: true,
    },
  ];
}
