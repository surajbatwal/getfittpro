import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class DataserviceService {

  constructor(private fire:AngularFirestore) { }



  getfiredata()
  {
   return   this.fire.collection('User').snapshotChanges();
  }
}
