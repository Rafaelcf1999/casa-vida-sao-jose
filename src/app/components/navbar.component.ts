import { Component } from '@angular/core';
import {
  IonHeader,
  IonToolbar,
  IonButtons,
  IonButton,
  IonIcon,
} from '@ionic/angular/standalone';
import { Location } from '@angular/common';
import { addIcons } from 'ionicons';
import { arrowBack, chevronBackOutline } from 'ionicons/icons';

@Component({
  selector: 'app-navbar',
  templateUrl: 'navbar.component.html',
  styleUrls: ['navbar.component.scss'],
  imports: [IonHeader, IonToolbar, IonButtons, IonButton, IonIcon],
})
export class NavbarComponent {
  constructor(private location: Location) {
    addIcons({ arrowBack, chevronBackOutline });
  }

  voltar() {
    this.location.back();
  }
}
