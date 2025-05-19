import { CommonModule } from '@angular/common';
import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MAT_DIALOG_DATA, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIcon, MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MantenimientoService } from '../../services/mantenimiento.service';
import { ExtintoresService } from '../../services/extintores.service';
import { UsuarioService } from '../../services/usuario.service';
import {MatDatepickerModule} from '@angular/material/datepicker';


@Component({
  selector: 'app-createmantenimiento',
  imports: [MatDialogModule, MatButtonModule, CommonModule, MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    MatButtonModule, MatSelectModule, MatIcon, MatIconModule,MatDatepickerModule],
  templateUrl: './createmantenimiento.component.html',
  styleUrl: './createmantenimiento.component.scss'
})
export class CreatemantenimientoComponent implements OnInit {

  mantenimientoForm: FormGroup;
  extintores: any[] = [];
  usuarios: any[] = [];

  constructor(
    private fb: FormBuilder,
    private dialogRef: MatDialogRef<CreatemantenimientoComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private mantenimientoService: MantenimientoService,
    private extintorService: ExtintoresService,
    private usuarioService: UsuarioService
  ) {
    this.mantenimientoForm = this.fb.group({
      fecha: ['', Validators.required],
      descripcion: ['', Validators.required],
      extintor_id: ['', Validators.required],
      usuario_id: ['', Validators.required],
      archivo: ['']
    });
  }

  ngOnInit(): void {
    this.cargarExtintores();
    this.cargarUsuarios();
    console.log(this.extintores);
  }

  cargarExtintores(): void {
    this.extintorService.obtenerExtintores().subscribe({
      next: (data: any[]) => {
        console.log('Extintores recibidos:', data);
        this.extintores = data;
      },
      error: (err) => {
        console.error('Error al cargar extintores:', err);
      }
    });
  }

  cargarUsuarios(): void {
    this.usuarioService.getUsuarios().subscribe({
      next: (data: any[]) => {
        console.log('Usuarios recibidos:', data);
        this.usuarios = data;
      },
      error: (err) => {
        console.error('Error al cargar usuarios:', err);
      }
    });
  }


  onSubmit(): void {
    if (this.mantenimientoForm.valid) {
      this.dialogRef.close(this.mantenimientoForm.value);
    }
  }



}
