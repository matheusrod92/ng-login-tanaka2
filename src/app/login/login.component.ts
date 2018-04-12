import { Component, OnInit, Input } from '@angular/core';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  @Input() email: string;
  @Input() senha: string;
  mensagem: string;

  constructor(
    private loginService: LoginService
  ) { }

  ngOnInit() {
    this.mensagem = '';
  }

  tryLogin() {
    this
      .loginService
      .doLogin(this.email, this.senha)
      .then(res => {
        console.log(res);
        this.mensagem = "fez login, que beleza";
      }, err => {
        console.log(err);
        this.mensagem = "fudeu tudo";
      })
  }

}
