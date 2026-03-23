import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-realizar-entrega',
  templateUrl: './realizar-entrega.page.html',
  styleUrls: ['./realizar-entrega.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class RealizarEntregaPage implements OnInit {
  dataEntrega: string = '';
  dataFutura: string = '';
  observacoes: string = '';

  constructor(private router: Router) { }

  ngOnInit() {
    const hoje = new Date();
    this.dataEntrega = hoje.toISOString().split('T')[0];
  }

  confirmarRegistro() {
    alert('Registro de entrega enviado com sucesso!');
    console.log('Dados salvos:', this.dataEntrega, this.dataFutura, this.observacoes);
    this.router.navigate(['/home']);
  }
}
