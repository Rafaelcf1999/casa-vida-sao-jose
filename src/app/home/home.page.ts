import { Component, inject } from '@angular/core';
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
import { FireBaseService } from '../service/familia.service';
import { AsyncPipe } from '@angular/common';

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
    AsyncPipe,
  ],
})
export class HomePage {
  familiaService = inject(FireBaseService);
  familia$ = this.familiaService.getFamilias()
  constructor() {}
}
