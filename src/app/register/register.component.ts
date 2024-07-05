import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
  username: string = '';
  password: string = '';

  constructor(private registerService: AuthService, private router: Router) {}

  onSubmit() {
    const Toast = Swal.mixin({
      toast: true,
      position: "bottom-end",
      showConfirmButton: false,
      timer: 2000,
      timerProgressBar: true,
      didOpen: (toast) => {
        toast.onmouseenter = Swal.stopTimer;
        toast.onmouseleave = Swal.resumeTimer;
      }
    });
    this.registerService.register(this.username, this.password).subscribe(
      response => {
        // Manejar el éxito del registro
        Toast.fire({
          text: 'User registered successfully!',
          icon: 'success'
          });
        localStorage.setItem('token', response.token);
        this.router.navigate(['/hotels']);
      },
      error => {
        // Manejar el error del registro
        Toast.fire({
          text: 'Error registering user',
          icon: 'warning'
          });
      }
    );
  }
}
