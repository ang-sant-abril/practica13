import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from '../servicios/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  formLogin: FormGroup;

  constructor(private loginService: LoginService,
              private router: Router) { }

  ngOnInit(): void {
    this.formLogin = new FormGroup({
      usuario: new FormControl('', [Validators.required]),
      pass: new FormControl('', [Validators.required, Validators.pattern(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?!.*\s).*$/)])
    })
  }

  iniciarSesion() {
    const credenciales = {
      usuario: this.formLogin.get('usuario').value,
      pass: this.formLogin.get('pass').value
    }
    this.loginService.login(credenciales)
                     .subscribe((resp: any) => {
                        localStorage.setItem('fakeToken', resp.fakeToken);
                        this.router.navigate(['/listado-facturas']);
                     }, (err: any) => {
                       console.log(err);
                     })
  }

}
