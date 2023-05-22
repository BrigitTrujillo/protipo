import { Component } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  // Agrega las propiedades necesarias para los campos del formulario
  name: string;
  email: string;
  password: string;
}
