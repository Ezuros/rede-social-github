import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Router } from '@angular/router';
import { from, map, mergeMap, tap } from 'rxjs';
import { user } from 'src/app/auth/models/user';
import { AuthService } from 'src/app/auth/services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class ServicesService {

  private usersCollection = this.store.collection<user>('users')
  private currentUser = this.authService.currentUser
  private teste: any

  constructor(private authentication: AngularFireAuth,
    private store: AngularFirestore,
    private authService: AuthService) { }

  signOut() {
    return from(this.authentication.signOut())
  }

  getUserPhoto() {
    return this.currentUser.pipe(
      mergeMap(user => {
        return this.usersCollection.doc(user?.uid).get()
      }),
      map(userDoc => {
        return userDoc.data()?.photoURL || ''
      })
    )
  }
  getUsername() {
    return this.currentUser.pipe(
      mergeMap(user => {
        return this.usersCollection.doc(user?.uid).get()
      }),
      map(userDoc => {
        return userDoc.data()?.username
      })
    )
  }


}
