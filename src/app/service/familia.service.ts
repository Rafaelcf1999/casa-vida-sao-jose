import { inject, Injectable } from '@angular/core';
import {
  collectionData,
  Firestore,
  collection,
  addDoc,
} from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Familia } from '../home/types';
import { doc, getDoc } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root',
})
export class FireBaseService {
  private firestore: Firestore = inject(Firestore);

  constructor() {}
  
  getFamilias(): Observable<Familia[]> {
    const colRef = collection(this.firestore, 'familia');
    return collectionData(colRef, { idField: 'id' }) as Observable<Familia[]>;
  }

  async addFamilia(dadosDaFamilia: Familia) {
    const colRef = collection(this.firestore, 'familia');
    try {
      const docRef = await addDoc(colRef, dadosDaFamilia);
      console.log('Documento salvo com sucesso! ID:', docRef.id);
      return docRef;
    } catch (e) {
      console.error('Erro ao salvar no Firebase:', e);
      throw e;
    }
  }

  async getFamiliaById(id: string): Promise<Familia | undefined> {
    try {
      const docRef = doc(this.firestore, 'familia', id);
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        return docSnap.data() as Familia;
      } else {
        console.log("Nenhum documento encontrado!");
        return undefined;
      }
    } catch (error) {
      console.error("Erro ao buscar família:", error);
      throw error;
    }
  }

  async addEntrega(dadosEntrega: any) {
    const colRef = collection(this.firestore, 'entregas');
    try {
      const docRef = await addDoc(colRef, dadosEntrega);
      console.log("Entrega salva com sucesso! ID:", docRef.id);
      return docRef;
    } catch (e) {
      console.error("Erro ao salvar entrega no Firebase:", e);
      throw e;
    }
  }
}
