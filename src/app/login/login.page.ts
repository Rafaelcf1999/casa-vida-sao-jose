import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { Router } from '@angular/router';

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

  constructor(private router: Router) { }

  ngOnInit() { }

  fazerLogin() {
    if (this.usuario === 'admin' && this.senha === 'admin') {
      alert('Login efetuado com sucesso!');
      console.log('Login efetuado com sucesso no Sistema Santa Hedviges!');
      this.router.navigate(['/home']);
    } else {
      alert('Usuário ou senha incorretos. Tente novamente!');
    }
  }
}
