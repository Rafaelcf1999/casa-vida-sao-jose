import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { Router } from '@angular/router';
import { Dialog } from '@capacitor/dialog';
import { addIcons } from 'ionicons';
import { peopleOutline } from 'ionicons/icons';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class LoginPage {
  usuario = '';
  senha = '';

  constructor(private readonly router: Router) { 
    addIcons({ peopleOutline });
  }

  async fazerLogin() {
    if (this.usuario === 'admin' && this.senha === 'admin') {
      console.log('Login efetuado com sucesso no Sistema Santa Hedviges!');
      this.router.navigate(['/home']); 
    } else {
      await Dialog.alert({
        title: 'Aviso',
        message: 'Usuário ou senha incorretos. Tente novamente!',
      });
    }
  }
}
