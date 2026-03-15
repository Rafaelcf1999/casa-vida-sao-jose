import { inject, Injectable } from '@angular/core';
import { collectionData, Firestore, collection, addDoc } from '@angular/fire/firestore';
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

  async addFamilia(dadosDaFamilia: Familia) {

    const colRef = collection(this.firestore, 'familia');
    
    try {

      const docRef = await addDoc(colRef, dadosDaFamilia);
      console.log("Documento salvo com sucesso! ID:", docRef.id);
      return docRef;
    } catch (e) {
      console.error("Erro ao salvar no Firebase:", e);
      throw e;
    }
  }
}
