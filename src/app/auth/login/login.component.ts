import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { HttpClient } from '@angular/common/http';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [MatCardModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    FormsModule, ReactiveFormsModule, RouterModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  loginForm!: FormGroup;  // ← Solución al error TS2564
  hide = true;

  constructor(
    private fb: FormBuilder,
    private http: HttpClient,
    private router: Router
  ) {
    this.loginForm = this.fb.group({
      correo: ['', [Validators.required, Validators.email]],
      contraseña: ['', Validators.required]
    });
  }

  onLogin() {
   
    if (this.loginForm.valid) {
      const { correo, contraseña } = this.loginForm.value;

      this.http.post('http://localhost:3000/api/auth/login', { correo, contraseña })
        .subscribe({
          next: (response: any) => {
            alert(response.mensaje);
            console.log('Usuario logueado:', response.usuario);

            // 🔄 Redirección al componente Sidebar
            this.router.navigate(['/sidebar']).then(success => {
              console.log('Navegación exitosa:', success);
            }).catch(err => {
              console.error('Error en navegación:', err);
            });
          },
          error: (error) => {
            console.error(error);
            alert(error.error.mensaje || 'Error al iniciar sesión');
          }
        });
    } else {
      alert('Por favor, complete todos los campos.');
    }
  }

}
