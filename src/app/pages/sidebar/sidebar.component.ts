import { Component } from '@angular/core';
import { ClientesComponent } from '../clientes/clientes.component';
import { ExtintoresComponent } from '../extintores/extintores.component';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-sidebar',
  imports: [ClientesComponent,ExtintoresComponent,CommonModule],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss'
})
export class SidebarComponent {

}
