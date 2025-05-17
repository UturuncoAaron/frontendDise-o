import { CommonModule } from '@angular/common';
import { Component, ElementRef, ViewChild } from '@angular/core';
import { Chart, ChartConfiguration } from 'chart.js';


@Component({
  selector: 'app-dashboard',
  imports: [CommonModule ],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {
  //  resumen = [
  //   { titulo: 'Extintores Totales', valor: 120, icon: 'fire_extinguisher' },
  //   { titulo: 'Clientes Registrados', valor: 35, icon: 'groups' },
  //   { titulo: 'Productos en Stock', valor: 250, icon: 'inventory_2' },
  //   { titulo: 'Ventas del Mes', valor: 34, icon: 'attach_money' },
  //   { titulo: 'Extintores por Vencer', valor: 5, icon: 'report_problem' }
  // ];

  // notificaciones = [
  //   'Extintor ID 234 vencerá en 5 días.',
  //   'Cliente nuevo registrado: Fábrica Inca.',
  //   'Revisión pendiente en sede Surco.'
  // ];

  // @ViewChild('ventasChart', { static: false }) ventasChartRef!: ElementRef;

  // ngAfterViewInit() {
  //   new Chart(this.ventasChartRef.nativeElement, {
  //     type: 'bar',
  //     data: {
  //       labels: ['Ene', 'Feb', 'Mar', 'Abr'],
  //       datasets: [{
  //         label: 'Ventas',
  //         data: [10, 20, 15, 30],
  //         backgroundColor: '#007bff'
  //       }]
  //     },
  //     options: {
  //       responsive: true
  //     }
  //   });
  // }
}
