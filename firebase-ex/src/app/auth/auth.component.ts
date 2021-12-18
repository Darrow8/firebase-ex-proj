import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { AngularFireAuth } from '@angular/fire/auth';
import { initializeApp } from "firebase/app"
import { getFirestore } from "firebase/firestore"
import { collection, addDoc } from "firebase/firestore"
import { Router } from '@angular/router';
import { AngularFirestore } from '@angular/fire/firestore';
import { User } from '@firebase/auth';

export interface info { food: string; email: string; }

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})

export class AuthComponent implements OnInit {
  public email: string = "";
  public password: string = "";
  public food: string = "";

  constructor(private afa: AngularFireAuth, private router: Router, private afs: AngularFirestore) {}
  
  ngOnInit(): void {
    // this.signin();
  }

  signin() {
    this.afa.signInWithEmailAndPassword(this.email, this.password)
    .then((userCredential) => {
      // Signed in 
      const user = userCredential.user;
      // firestore
      this.afs.collection<info>('Users').add({food: this.food, email: this.email});
      // this.router.navigate(['/secure']);

      // Hint: use .where()
      // ^^
      // Figure out how to match id with the FireStore document id
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
    });

    // try {
    //   const docRef = await addDoc(collection(db, "food"), {
    //     food: this.food,
    //   });
    //   console.log("Document written with ID: ", docRef.id);
    // } catch (e) {
    //   console.error("Error adding document: ", e);
    // }
  }
}