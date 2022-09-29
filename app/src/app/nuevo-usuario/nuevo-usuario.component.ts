import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FormInput } from '../interfaces/formInput';

@Component({
  selector: 'app-nuevo-usuario',
  templateUrl: './nuevo-usuario.component.html',
  styleUrls: ['./nuevo-usuario.component.css']
})
export class NuevoUsuarioComponent implements OnInit {

  constructor( private fb: FormBuilder) { }
  formularioUsuario: FormGroup | any;

  //Configuraciones de las entradas
  configuracionInput: FormInput = {
    label: 'Nombre',
    type: 'text',
    required: true,
    placeholder: ''
  }

  ngOnInit(): void {
    this.formularioUsuario = this.fb.group({
      nombre: ['', [Validators.required, Validators.minLength(5)]],
      username: ['', [Validators.required, Validators.maxLength(10)]],
      email: ['', [Validators.required, Validators.email]],
      telefono: ['', [Validators.required, Validators.minLength(10)]],
      sitioWeb: ''
    })
  }

  getConfiguracionInput( label: string, placeholder: string, type: string, required: boolean ){
    let configuracion = {...this.configuracionInput};
    configuracion.label = label,
    configuracion.placeholder = placeholder, 
    configuracion.type = type
    configuracion.required = required
    return configuracion;
  }

}
