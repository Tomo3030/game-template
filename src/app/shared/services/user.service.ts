import { BehaviorSubject, Observable } from 'rxjs';
import {take} from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import firebase from "firebase/compat/app"

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private user$ = new BehaviorSubject<firebase.User | null>(null);

  constructor(private auth: AngularFireAuth) {

  }

  initAuthListener() {
    this.auth.onAuthStateChanged(user => {
      if(user){
        console.log('user logged in', user);
         this.user$.next(user);
      } else{
        console.log('user logged out');
        this.user$.next(null);
      }
    })
  }

  getUser$(): Observable<firebase.User | null> {
    return this.user$;
  }

  getUserPromise(): Promise<firebase.User | null> {
    return this.user$.pipe(take(1)).toPromise();
  }

  createAccountWithEmailAndPassword(
    user: {email: string, password: string, userName: string
    }){
    return this.auth.createUserWithEmailAndPassword(user.email, user.password)
    .then(cred => {
      cred.user?.updateProfile({displayName: user.userName});
    })
 }

 anonymousSignIn(name:string){
  return this.auth.signInAnonymously().then((user) => {
    if(user.user)user.user.updateProfile({displayName: name});
  }).catch(err => console.log(err));
 }

 signInWithEmailAndPassword(email:string, password:string){
    return this.auth.signInWithEmailAndPassword(email, password);
  }

 signInWithGoogle(){
   let provider = new firebase.auth.GoogleAuthProvider();
   return this.auth.signInWithPopup(provider);
 }

 signOut(){
    this.auth.signOut();
 }
}
