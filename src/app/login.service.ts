import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase';

@Injectable()
export class LoginService {

  constructor(public afAuth: AngularFireAuth) { }

  doLogin(email, senha) {
    return new Promise<any>((resolve, reject) => {
      firebase
        .auth()
        .signInWithEmailAndPassword(email, senha)
        .then(res => {
          resolve(res);
        }, err => reject(err))
    })
  }

}
