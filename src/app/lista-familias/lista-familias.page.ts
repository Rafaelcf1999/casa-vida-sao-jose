import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';

@Component({
  selector: 'app-lista-familias',
  templateUrl: './lista-familias.page.html',
  styleUrls: ['./lista-familias.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class ListaFamiliasPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
