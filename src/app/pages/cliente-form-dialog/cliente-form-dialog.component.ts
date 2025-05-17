import { CommonModule } from '@angular/common';
import { Component, Inject, inject } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MAT_DIALOG_DATA, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIcon } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
@Component({
  selector: 'app-cliente-form-dialog',
  imports: [MatDialogModule, MatButtonModule, CommonModule, MatFormFieldModule,
    MatInputModule,
    MatDialogModule,
    ReactiveFormsModule,
    MatButtonModule, MatIcon],
  templateUrl: './cliente-form-dialog.component.html',
  styleUrl: './cliente-form-dialog.component.scss'

})
export class ClienteFormDialogComponent {
  clienteForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    public dialogRef: MatDialogRef<ClienteFormDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) 
  {
    this.clienteForm = this.fb.group({
      nombre: [data?.nombre || '', Validators.required],
      ruc: [data?.ruc || '', Validators.required],
      direccion: [data?.direccion || '', Validators.required],
      telefono: [data?.telefono || '', Validators.required],
      correo: [data?.correo || '', [Validators.required, Validators.email]],
    });
  }

  guardar() {
    if (this.clienteForm.valid) {
      this.dialogRef.close(this.clienteForm.value);
    }
  }

  cancelar() {
    this.dialogRef.close();
  }

}
