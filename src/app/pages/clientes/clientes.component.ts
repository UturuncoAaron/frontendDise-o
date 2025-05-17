import { Component, ViewChild, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatIconModule } from '@angular/material/icon';
import { Cliente, ClienteService } from '../../services/cliente.service';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { ClienteFormDialogComponent } from '../cliente-form-dialog/cliente-form-dialog.component';
import { inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { ClienteactualizarComponent } from '../clienteactualizar/clienteactualizar.component';

@Component({
  selector: 'app-clientes',
  imports: [CommonModule, MatTableModule, MatPaginatorModule, MatSortModule, MatIconModule, MatButtonModule, MatFormFieldModule, MatInputModule, MatButtonModule, MatDialogModule],
  templateUrl: './clientes.component.html',
  styleUrl: './clientes.component.scss'
})

export class ClientesComponent implements OnInit {
  displayedColumns: any[] = ['id_cliente', 'nombre', 'ruc', 'direccion', 'telefono', 'correo', 'acciones'];
  dataSource = new MatTableDataSource<Cliente>();

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(private clienteService: ClienteService) { }

  ngOnInit(): void {
    this.cargarClientes();
  }

  cargarClientes() {
    this.clienteService.getClientes().subscribe(clientes => {
      this.dataSource.data = clientes;
      this.dataSource.paginator = this.paginator;
    });
  }



  eliminarCliente(id: number) {
    if (confirm('¿Seguro que deseas eliminar este cliente?')) {
      this.clienteService.eliminarCliente(id).subscribe(() => {
        this.cargarClientes();
      });
    }
  }


  readonly dialog = inject(MatDialog);
  editarCliente(id: number) {
  this.clienteService.getClienteById(id).subscribe(cliente => {
    const dialogRef = this.dialog.open(ClienteactualizarComponent, {
      width: '1500px',
      data: { ...cliente }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.clienteService.actualizarCliente(id, result).subscribe(() => this.cargarClientes());
      }
    });
  });
}




  crearCliente() {
    const dialogRef = this.dialog.open(ClienteFormDialogComponent, {
      width: '2500px',
      data: {} // vacío para crear
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.clienteService.crearCliente(result).subscribe(() => this.cargarClientes());
      }
    });
  }


  applyFilter(event: Event) {
    const value = (event.target as HTMLInputElement).value.trim().toLowerCase();
    this.dataSource.filter = value;
  }



}
