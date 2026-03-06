import { inject, Injectable } from '@angular/core';
import { collectionData, Firestore, collection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Familia } from '../home/types';

@Injectable({
  providedIn: 'root',
})
export class FireBaseService {
  private firestore: Firestore = inject(Firestore);

  constructor() {}
  getFamilias(): Observable<Familia[]> {
    const colRef = collection(this.firestore, 'familia');
    return collectionData(colRef) as Observable<Familia[]>;
  }
}
