import { Injectable } from '@angular/core';

import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';

@Injectable()
export class RegisterService {

  constructor(public afAuth: AngularFireAuth) { }

  doRegister(email, senha){
    return new Promise<any>((resolve, reject) => {
      firebase
        .auth()
        .createUserWithEmailAndPassword(email, senha)
        .then(res => {
          resolve(res);
        }, err => reject(err))
    })
  }
}