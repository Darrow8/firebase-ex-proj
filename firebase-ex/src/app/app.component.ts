import { AuthServiceService } from './auth-service.service';
import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'firebase-ex';
  constructor(private afa: AngularFireAuth, private authSerivce: AuthServiceService) {
    
  }

  async ngOnInit() {
    // console.log('we are initializing!')
    // this.authSerivce.coolVar
    await this.someFunc()
    await this.afa.signInWithEmailAndPassword('darrow@doceo.com', '12345').then(() => {
      // * if we are here then the user's account has been created
      // write code to access the firebase database and make a document with the user's favorite food


      // this.afa.authState.subscribe((user) => {
      //   console.log(user)
      // })
    }).catch((err) => {
      console.log(err)
    })

  }

  async someFunc() {
    // do something async
  }

}
