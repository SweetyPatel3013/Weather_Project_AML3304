import { Component } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { firebase } from '@firebase/app'
import '@firebase/auth'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  title = 'weather-aml3304';
  
  constructor(
    public fireAuth: AngularFireAuth,
  ){}

  signInClicked(): void{
    this.fireAuth.signInWithPopup(new firebase.auth!.GoogleAuthProvider());
  }

  signOutClicked(): void{
    this.fireAuth.signOut();
  }
}
