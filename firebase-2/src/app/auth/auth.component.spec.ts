import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthComponent } from './auth.component';

describe('AuthComponent', () => {
  let component: AuthComponent;
  let fixture: ComponentFixture<AuthComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AuthComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AuthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

// import { Injectable } from '@angular/core';
// import { AngularFireAuth } from "@angular/fire/auth";
// import { Observable } from 'rxjs';

// ...
// ​
// export class AuthenticationService {
// userData: Observable<firebase.User>;

// constructor(private angularFireAuth: AngularFireAuth) {
// this.userData = angularFireAuth.authState;
// }

// /* Sign up */
// SignUp(email: string, password: string) {
// this.angularFireAuth
// .auth
// .createUserWithEmailAndPassword(email, password)
// .then(res => {
// console.log('You are Successfully signed up!', res);
// })
// .catch(error => {
// console.log('Something is wrong:', error.message);
// });
// }

// /* Sign in */
// SignIn(email: string, password: string) {
// this.angularFireAuth
// .auth
// .signInWithEmailAndPassword(email, password)
// .then(res => {
// console.log('You're in!');
// })
// .catch(err => {
// console.log('Something went wrong:',err.message);
// });
// }

// /* Sign out */
// SignOut() {
// this.angularFireAuth
// .auth
// .signOut();
// }

