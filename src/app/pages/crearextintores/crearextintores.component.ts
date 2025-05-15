import { CommonModule } from '@angular/common';
import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MAT_DIALOG_DATA, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { Cliente, ClienteService } from '../../services/cliente.service';
import { MatSelectModule } from '@angular/material/select';
import { MatIcon } from '@angular/material/icon';


@Component({
  selector: 'app-crearextintores',
  imports: [MatDialogModule, MatButtonModule, CommonModule, MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    MatButtonModule, MatSelectModule,MatIcon],
  templateUrl: './crearextintores.component.html',
  styleUrl: './crearextintores.component.scss'
})
export class CrearextintoresComponent {
  extintorForm!: FormGroup;
  clientes: Cliente[] = [];

  constructor(
    private fb: FormBuilder,
    private dialogRef: MatDialogRef<CrearextintoresComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private ClienteService: ClienteService
  ) { }

  ngOnInit(): void {
    this.extintorForm = this.fb.group({
      tipo: [this.data?.tipo || '', Validators.required],
      capacidad: [this.data?.capacidad || '', Validators.required],
      ubicacion: [this.data?.ubicacion || '', Validators.required],
      fecha_instalacion: [this.data?.fecha_instalacion || '', Validators.required],
      fecha_vencimiento: [this.data?.fecha_vencimiento || '', Validators.required],
      cliente_id: [this.data?.cliente_id || '', Validators.required]
    });

    this.ClienteService.getClientes().subscribe((clientes: Cliente[]) => {
      this.clientes = clientes;
    });
  }

  onSubmit(): void {
    if (this.extintorForm.valid) {
      this.dialogRef.close(this.extintorForm.value);
    }
  }

  onCancel(): void {
    this.dialogRef.close();
  }
}
