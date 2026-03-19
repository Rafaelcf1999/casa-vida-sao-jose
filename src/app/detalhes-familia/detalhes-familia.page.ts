import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';

@Component({
  selector: 'app-detalhes-familia',
  templateUrl: './detalhes-familia.page.html',
  styleUrls: ['./detalhes-familia.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class DetalhesFamiliaPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
