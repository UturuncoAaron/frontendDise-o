import { CommonModule } from '@angular/common';
import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MAT_DIALOG_DATA, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { Cliente, ClienteService } from '../../services/cliente.service';
import { MatIcon } from '@angular/material/icon';

@Component({
  selector: 'app-actualizarextintores',
  imports: [CommonModule,
    ReactiveFormsModule,
    MatDialogModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule, MatIcon],
  templateUrl: './actualizarextintores.component.html',
  styleUrl: './actualizarextintores.component.scss'
})
export class ActualizarextintoresComponent implements OnInit {
  extintorForm!: FormGroup;
  clientes: Cliente[] = [];
  formatDate(dateStr: string): string {
    if (!dateStr) return '';
    const date = new Date(dateStr);
    const year = date.getFullYear();
    const month = ('0' + (date.getMonth() + 1)).slice(-2);
    const day = ('0' + date.getDate()).slice(-2);
    return `${year}-${month}-${day}`;
  }
  constructor(
    private fb: FormBuilder,
    private dialogRef: MatDialogRef<ActualizarextintoresComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private clienteService: ClienteService
  ) { }

  ngOnInit(): void {
    console.log('ngOnInit se ejecutó', this.data);

    console.log('DATA RECIBIDA EN MODAL:', this.data); // 👈 DEBE mostrar el objeto completo

    this.extintorForm = this.fb.group({
      tipo: [this.data.tipo || '', Validators.required],
      capacidad: [this.data.capacidad || '', Validators.required],
      ubicacion: [this.data.ubicacion || '', Validators.required],
      fecha_instalacion: [this.formatDate(this.data.fecha_instalacion) || '', Validators.required],
      fecha_vencimiento: [this.formatDate(this.data.fecha_vencimiento) || '', Validators.required],
      cliente_id: ['', Validators.required] // esto se llena luego
    });

    this.clienteService.getClientes().subscribe((clientes: Cliente[]) => {
      this.clientes = clientes;
      this.extintorForm.get('cliente_id')?.setValue(this.data.cliente_id);
    });
  }

  onCancel(): void {
    this.dialogRef.close();
  }

  onUpdate(): void {
    if (this.extintorForm.valid) {
      this.dialogRef.close(this.extintorForm.value);
    }
  }
}
