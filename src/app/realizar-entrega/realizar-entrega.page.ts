import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { Router, ActivatedRoute } from '@angular/router';
import { FireBaseService } from '../service/familia.service';
import { NavbarComponent } from "../components/navbar.component";

@Component({
  selector: 'app-realizar-entrega',
  templateUrl: './realizar-entrega.page.html',
  styleUrls: ['./realizar-entrega.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule, NavbarComponent],
})
export class RealizarEntregaPage implements OnInit {
  dataEntrega: string = '';
  dataFutura: string = '';
  observacoes: string = '';
  familiaId: string | null = null; 

  private router = inject(Router);
  private route = inject(ActivatedRoute);
  private fbService = inject(FireBaseService);

  constructor() { }

  ngOnInit() {
    const hoje = new Date();
    this.dataEntrega = hoje.toISOString().split('T')[0];
    
    this.familiaId = this.route.snapshot.paramMap.get('id');
  }

  async confirmarRegistro() {
    if (!this.familiaId) {
      alert('Erro: Família não identificada. Volte e tente novamente.');
      return;
    }

    const dadosEntrega = {
      familiaId: this.familiaId,
      dataEntrega: this.dataEntrega,
      dataFutura: this.dataFutura,
      observacoes: this.observacoes,
      dataRegistro: new Date().toISOString()
    };

    try {
      await this.fbService.addEntrega(dadosEntrega);
      
      alert('Registro de entrega salvo com sucesso no banco de dados!');
      console.log('Dados salvos no Firebase:', dadosEntrega);
      
      this.router.navigate(['/home']);
    } catch (error) {
      console.error('Erro ao salvar:', error);
      alert('Erro ao salvar a entrega. Verifique sua conexão com a internet.');
    }
  }
}
