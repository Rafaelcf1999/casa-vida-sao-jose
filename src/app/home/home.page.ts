import { Component, inject } from '@angular/core';
import {
  IonContent,
  IonSearchbar,
  IonList,
  IonLabel,
  IonItem,
  IonIcon,
  IonFabButton,
  IonFab,
} from '@ionic/angular/standalone';
import { FireBaseService } from '../service/familia.service';
import { AsyncPipe, Location } from '@angular/common';

import { addIcons } from 'ionicons';
import { add, arrowBack } from 'ionicons/icons';
import { Router } from '@angular/router';

import { BehaviorSubject, combineLatest, map } from 'rxjs';
import { NavbarComponent } from '../components/navbar.component';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  imports: [
    IonContent,
    IonSearchbar,
    IonList,
    IonLabel,
    IonItem,
    IonIcon,
    IonFabButton,
    IonFab,
    AsyncPipe,
    NavbarComponent,
  ],
})
export class HomePage {
  constructor(private readonly router: Router) {
    addIcons({ add, arrowBack });
  }

  location = inject(Location);
  familiaService = inject(FireBaseService);
  readonly familias$ = this.familiaService.getFamilias();
  private readonly termoBusca$ = new BehaviorSubject<string>('');

  readonly familiasFiltradas$ = combineLatest([
    this.familias$,
    this.termoBusca$,
  ]).pipe(
    map(([familias, termo]) => {
      const t = termo.trim().toLocaleLowerCase();
      if (!t) return familias;
      return familias.filter(
        (f) =>
          f.documento.includes(t) ||
          f.nome.toLocaleLowerCase().includes(t) ||
          f.rua.toLocaleLowerCase().includes(t),
      );
    }),
  );

  viewDetails(id: string) {
    if (id) {
      this.router.navigate(['/info-family', id]);
    }
  }

  redirecionar(nextPage: string): void {
    this.router.navigateByUrl(`${nextPage}`);
  }
  filtrarFamilias(event: any) {
    const EventValue = event.target.value?.trim();
    this.termoBusca$.next(EventValue);
  }
}
