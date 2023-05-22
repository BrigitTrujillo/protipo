import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css', '../../../assets/css/bootstrap.min.css',  
  '../../../assets/font-awesome/css/font-awesome.css', 
  '../../../assets/css/plugins/iCheck/custom.css',
  '../../../assets/css/animate.css',
  '../../../assets/css/style.css'
]
})


export class LoginComponent {
  username: string;
  password: string;

  constructor(private router: Router) {}

  login() {
    // Aquí puedes implementar la lógica de inicio de sesión
    // utilizando this.username y this.password
    // Por ejemplo, puedes realizar una solicitud HTTP al servidor para autenticar al usuario

    // Si la autenticación es exitosa, puedes redirigir al usuario a la página de inicio
    this.router.navigate(['/home']);
  }
}
