import { Component, inject, ViewChild } from '@angular/core';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { Mantenimiento, MantenimientoService } from '../../services/mantenimiento.service';
import { MatPaginator } from '@angular/material/paginator';
import { MatIcon } from '@angular/material/icon';
import { MatSortModule } from '@angular/material/sort';
import { CommonModule } from '@angular/common';
import { MatButton } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatDialog } from '@angular/material/dialog';
import { CreatemantenimientoComponent } from '../createmantenimiento/createmantenimiento.component';
import { EditmantenimientoComponent } from '../editmantenimiento/editmantenimiento.component';

@Component({
  selector: 'app-mantenimiento',
  imports: [MatPaginator, MatIcon, MatTableModule, MatSortModule, CommonModule, MatButton, MatFormFieldModule, MatInputModule],
  templateUrl: './mantenimiento.component.html',
  styleUrl: './mantenimiento.component.scss'
})
export class MantenimientoComponent {
  displayedColumns: string[] = [
    'id_mantenimiento',
    'fecha',
    'descripcion',
    'cliente',
    'tipo_extintor',
    'ubicacion_extintor',
    'usuario',
    'acciones'
  ];

  readonly dialog = inject(MatDialog);

  dataSource = new MatTableDataSource<Mantenimiento>();

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(private mantenimientoService: MantenimientoService) { }

  ngOnInit(): void {
    this.cargarMantenimiento()
  }
  cargarMantenimiento() {
    this.mantenimientoService.getMantenimientos().subscribe(data => {
      this.dataSource.data = data;
      this.dataSource.paginator = this.paginator;
    });
  }

  applyFilter(event: Event): void {
    const filterValue = (event.target as HTMLInputElement).value.trim().toLowerCase();
    this.dataSource.filter = filterValue;
  }

  crearMantenimiento(): void {
    const dialogRef = this.dialog.open(CreatemantenimientoComponent, {
      width: '1500px',
      data: {}
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.mantenimientoService.crearMantenimientos(result).subscribe(() => this.cargarMantenimiento());
      }
    });
  }

  editarMantenimiento(id: number): void {
    this.mantenimientoService.obtenerMantenimientosPorId(id).subscribe(extintor => {
      const dialogRef = this.dialog.open(EditmantenimientoComponent, {
        width: '2000px',
        data: { ...extintor }
      });

      dialogRef.afterClosed().subscribe(result => {
        if (result) {
          this.mantenimientoService.editarMantenimientos(id, result).subscribe(() => this.cargarMantenimiento());
        }
      });
    });
  }

  eliminarMantenimiento(id: number): void {
    if (confirm('¿Estás seguro de eliminar este extintor?')) {
      this.mantenimientoService.eliminarMantenimientos(id).subscribe(() => {
        this.cargarMantenimiento();
      });
    }
  }
}
