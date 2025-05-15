import { Component, ViewChild, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { Extintor, ExtintoresService } from '../../services/extintores.service';
import { CrearextintoresComponent } from '../crearextintores/crearextintores.component';
import { MatDialog } from '@angular/material/dialog';
import { ActualizarextintoresComponent } from '../actualizarextintores/actualizarextintores.component';
@Component({
  selector: 'app-extintores',
  imports: [CommonModule, MatFormFieldModule,
    MatInputModule,
    MatTableModule,
    MatPaginatorModule,
    MatIconModule,
    MatButtonModule,
    MatSortModule],
  templateUrl: './extintores.component.html',
  styleUrl: './extintores.component.scss'
})
export class ExtintoresComponent implements OnInit {
  displayedColumns: string[] = ['id_extintor', 'tipo', 'capacidad', 'ubicacion', 'fecha_instalacion', 'fecha_vencimiento', 'acciones'];
  dataSource = new MatTableDataSource<Extintor>();

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(private extintoresService: ExtintoresService, private dialog: MatDialog) { }

  ngOnInit(): void {
    this.cargarExtintores();
  }

  cargarExtintores() {
    this.extintoresService.obtenerExtintores().subscribe(extintores => {
      this.dataSource.data = extintores;
      this.dataSource.paginator = this.paginator;
    });
  }

  eliminarExtintor(id: number) {
    if (confirm('¿Estás seguro de eliminar este extintor?')) {
      this.extintoresService.eliminarExtintor(id).subscribe(() => {
        this.cargarExtintores();
      });
    }
  }

  crearExtintor() {
    const dialogRef = this.dialog.open(CrearextintoresComponent, {
      width: '1500px',
      data: {}
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.extintoresService.crearExtintor(result).subscribe(() => this.cargarExtintores());
      }
    });
  }

  editarExtintor(id: number) {
    this.extintoresService.obtenerExtintorPorId(id).subscribe(extintor => {
      const dialogRef = this.dialog.open(ActualizarextintoresComponent, {
        width: '2000px',
        data: { ...extintor }
      });

      dialogRef.afterClosed().subscribe(result => {
        if (result) {
          this.extintoresService.editarExtintor(id, result).subscribe(() => this.cargarExtintores());
        }
      });
    });
  }




  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value.trim().toLowerCase();
    this.dataSource.filter = filterValue;
  }

}





