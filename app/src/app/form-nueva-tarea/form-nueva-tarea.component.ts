import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Usuario } from '../interfaces/usuarios';
import { DatosService } from '../datos.service';
import { MatDialogRef } from '@angular/material/dialog';
import { PrincipalComponent } from '../principal/principal.component';

@Component({
  selector: 'app-form-nueva-tarea',
  templateUrl: './form-nueva-tarea.component.html',
  styleUrls: ['./form-nueva-tarea.component.css']
})
export class FormNuevaTareaComponent implements OnInit {

  usuarios : Usuario [] = [];

  formularioTarea: FormGroup;

  constructor(private fb: FormBuilder, private servicio : DatosService, public dialogRef: MatDialogRef<PrincipalComponent> ) {
    this.formularioTarea = this.fb.group({
      title: ['', [Validators.required /*, Validators.email */]],
      userId: [, [Validators.required]]
    })
  }

  ngOnInit(): void {

    this.usuarios = this.servicio.getUsuarios();
  }

  guardar() : void {
    this.formularioTarea.markAllAsTouched();
    this.formularioTarea.markAsDirty();
    if( this.formularioTarea.valid ){
      this.dialogRef.close(this.formularioTarea.value);
    }

  }

}
