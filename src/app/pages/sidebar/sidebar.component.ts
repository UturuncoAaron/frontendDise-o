import { Component } from '@angular/core';
import { ClientesComponent } from '../clientes/clientes.component';
import { ExtintoresComponent } from '../extintores/extintores.component';
import { CommonModule } from '@angular/common';
import { MatIcon } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatTabsModule } from '@angular/material/tabs';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { MantenimientoComponent } from '../mantenimiento/mantenimiento.component';


@Component({
  selector: 'app-sidebar',
  imports: [ClientesComponent, ExtintoresComponent, CommonModule, MatSidenavModule,DashboardComponent,MantenimientoComponent,
    MatListModule,
    MatIconModule,
    MatButtonModule,
    MatTabsModule],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss'
})
export class SidebarComponent {
  selectedTab = 'dashboard';

  logout() {
    // Lógica de cierre de sesión aquí
    console.log('Sesión cerrada');
  }
}
