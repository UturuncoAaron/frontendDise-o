import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SidebarComponent } from './pages/sidebar/sidebar.component';
import { LoginComponent } from './auth/login/login.component';

@Component({
  selector: 'app-root',
  imports: [LoginComponent,RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'proyectodiseno';
}
