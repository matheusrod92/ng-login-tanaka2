import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { RegisterComponent } from './register/register.component';

import { RegisterService } from './register.service';
import { LoginComponent } from './login/login.component';

import { LoginService } from './login.service';

export const firebaseConfig = {
  apiKey: "AIzaSyCkfcRqpbFF2xyAIWbie9wn2_cFQX5wIsA",
  authDomain: "angular-bf420.firebaseapp.com",
  databaseURL: "https://angular-bf420.firebaseio.com",
  projectId: "angular-bf420",
  storageBucket: "angular-bf420.appspot.com",
  messagingSenderId: "229553449034"
}

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireAuthModule,
    FormsModule
  ],
  providers: [
    RegisterService,
    LoginService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
