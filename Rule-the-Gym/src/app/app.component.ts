import { Component } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import firebase from 'firebase/compat/app';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'Rule-the-Gym';
  registerMode = false;

  constructor(public auth: AngularFireAuth) {}

  signInWithGoogle(): void {
    this.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
  }

  async signInWithEmail(email: string, password: string): Promise<void> {
    try {
      await this.auth.signInWithEmailAndPassword(email, password);
    } catch (error) {
      alert('Error signing in with email and password');
    }
  }

  async registerWithEmail(email: string, password: string): Promise<void> {
    try {
      await this.auth.createUserWithEmailAndPassword(email, password);
      this.registerMode = false;
    } catch (error) {
      alert('Error registering with email and password');
    }
  }

  signOutClicked(): void {
    this.auth.signOut();
  }
}
