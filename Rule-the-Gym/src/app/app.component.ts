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
  errortext: string = '';

  constructor(public auth: AngularFireAuth) {}

  signInWithGoogle(): void {
    this.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
  }

  async signInWithEmail(email: string, password: string): Promise<void> {
    try {
      const userCredential = await this.auth.signInWithEmailAndPassword(
        email,
        password
      );
      if (userCredential.user && userCredential.user.emailVerified) {
        // User is logged in and email is verified
        // Proceed with your logic or redirect to the desired page
      } else {
        alert('Please verify your email address before logging in.');
        this.auth.signOut();
      }
    } catch (error) {
      const email = window.localStorage.getItem('emailForRegistration');
      // Retrieve the email from local storage

      if (
        email &&
        (await this.auth.isSignInWithEmailLink(window.location.href))
      ) {
        // Verify the sign-in link
        try {
          await this.auth.signInWithEmailLink(email, window.location.href);
          // Complete the registration process and log the user in
          // ...
        } catch (error) {
          console.error('Error signing in with email link:', error);
          alert('Error signing in with email and password');
        }
      } else {
        console.error('Error signing in with email and password:', error);
        alert('Error signing in with email and password');
      }
    }
  }

  async registerWithEmail(email: string, password: string): Promise<void> {
    try {
      const userCredential = await this.auth.createUserWithEmailAndPassword(
        email,
        password
      );
      if (userCredential.user) {
        await userCredential.user.sendEmailVerification();
        if (!userCredential.user.emailVerified) {
          await this.auth.signOut();
          this.errortext =
            'Please verify your email address before logging in.';
          return;
        }
      }
      this.registerMode = false;
      this.errortext = '';
    } catch (error) {
      if (
        (error as firebase.FirebaseError).code === 'auth/email-already-in-use'
      ) {
        alert('Email already in use');
      } else {
        this.errortext = 'Error registering with email and password:';
        console.error('Error registering with email and password:', error);
      }
    }
  }

  async resetPassword(email: string, event: Event): Promise<void> {
    event.preventDefault(); // Prevent form submission
    try {
      await this.auth.sendPasswordResetEmail(email);
      alert('Password reset email sent, check your inbox.');
      // Password reset email sent successfully
      // Display a success message to the user
    } catch (error) {
      console.error('Error sending password reset email:', error);
      // Display an error message to the user
    }
  }

  signOutClicked(): void {
    this.auth.signOut();
  }
}
