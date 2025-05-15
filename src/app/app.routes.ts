import { Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { SidebarComponent } from './pages/sidebar/sidebar.component';

export const routes: Routes = [
    { path: '', component: LoginComponent },
    { path: 'sidebar', component: SidebarComponent }
];
