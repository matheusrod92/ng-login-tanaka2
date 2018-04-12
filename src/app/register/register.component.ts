import { Component, OnInit, Input } from '@angular/core';

import { RegisterService } from '../register.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  @Input() email:  string;
  @Input() senha: string;
  mensagem: string;

  constructor(
    private registerService: RegisterService
  ) { }

  ngOnInit() {
    this.mensagem = '';
  }

  tryRegister() {
    this
      .registerService
      .doRegister(this.email, this.senha)
      .then(res => {
        console.log(res);
        this.mensagem = "criou";
      }, err => {
        console.log(err);
        this.mensagem = "erro";
      });
  }

}
