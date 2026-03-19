import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { Router } from '@angular/router';

/* Importando as ferramentas de ícones */
import { addIcons } from 'ionicons';
import { peopleOutline } from 'ionicons/icons';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class LoginPage implements OnInit {
  usuario = '';
  senha = '';

  constructor(private router: Router) { 
    // Registrando o ícone para ele aparecer na tela
    addIcons({ peopleOutline });
  }

  ngOnInit() { }

  fazerLogin() {
    if (this.usuario === 'admin' && this.senha === 'admin') {
      console.log('Login efetuado com sucesso no Sistema Santa Hedviges!');
      this.router.navigate(['/home']); 
    } else {
      alert('Usuário ou senha incorretos. Tente novamente!');
    }
  }
}
