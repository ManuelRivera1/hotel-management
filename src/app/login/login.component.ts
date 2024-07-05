import { Component } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  username: string = '';
  password: string = '';

  constructor(private authService: AuthService, private router: Router) {}
  onSubmit() {
    const Toast = Swal.mixin({
      toast: true,
      position: "bottom-end",
      showConfirmButton: false,
      timer: 1000,
      timerProgressBar: true,
      didOpen: (toast) => {
        toast.onmouseenter = Swal.stopTimer;
        toast.onmouseleave = Swal.resumeTimer;
      }
    });
    this.authService.login(this.username, this.password).subscribe({
      next: response => {
        Toast.fire({
        text: 'Se incio correctamente la sesión.',
        icon: 'success'
        });
        // Manejar el éxito del inicio de sesión
        // Por ejemplo, guardar el token y redirigir a la página principal
        localStorage.setItem('token', response.token);
        this.router.navigate(['/hotels']);
      },
      error: error => {
        // Manejar el error del inicio de sesión
        Toast.fire({
          text: error.message,
          icon: 'warning'
          });
      }
    });
  }
}
