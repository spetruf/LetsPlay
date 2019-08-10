import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FireadbService {
  items: Observable<any[]>;
  constructor(public db: AngularFirestore) {
    this.items = db.collection('Users').valueChanges();
    db.collection('Users').add({MiNombre: 'Sergio', MiApellido: 'Petruf'});
   }

   getItmes() {
    console.log('From database', this.items);
    return this.items;
   }
}
