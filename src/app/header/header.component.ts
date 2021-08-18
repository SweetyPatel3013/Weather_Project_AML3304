import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
// import { firebase } from '@firebase/app';
import firebase from 'firebase/app';
import '@firebase/auth';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(
    public fireAuth: AngularFireAuth,
  ){}

  signInClicked(): void{
    this.fireAuth.signInWithPopup(new firebase.auth!.GoogleAuthProvider());
  }

  signOutClicked(): void{
    this.fireAuth.signOut();
  }

  // eslint-disable-next-line @angular-eslint/no-empty-lifecycle-method
  ngOnInit(): void {
  }

  status: boolean = false;
  activeMenu(){
    this.status = !this.status;
  }

}
