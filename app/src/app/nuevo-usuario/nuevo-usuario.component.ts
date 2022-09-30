import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FormInput } from '../interfaces/formInput';
import { Usuario } from '../interfaces/Usuario';

@Component({
  selector: 'app-nuevo-usuario',
  templateUrl: './nuevo-usuario.component.html',
  styleUrls: ['./nuevo-usuario.component.css']
})
export class NuevoUsuarioComponent implements OnInit {

  constructor( private fb: FormBuilder) { }

  @Output() onNuevoUsuario: EventEmitter<Usuario|null> = new EventEmitter();
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
      sitioWeb: '',
      calle: ['',Validators.required],
      suite: ['', Validators.required],
      ciudad: ['', Validators.required],
      codigoPostal: ['', Validators.required]
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

  generarUsuario(){
    if(this.formularioUsuario.status === 'VALID'){
      let {calle, ciudad, codigoPostal, email, nombre, sitioWeb, suite, telefono, username} = this.formularioUsuario.value;
      const objetoUsuario:Usuario = {
        name: nombre,
        username: username,
        email: email,
        phone: telefono,
        website: sitioWeb,
        address: {
          street: calle,
          suite: suite,
          city: ciudad,
          zipcode: codigoPostal
        }
      }
      this.onNuevoUsuario.emit(objetoUsuario);
    }
  }

  cancelarRegistro(){
    this.onNuevoUsuario.emit(null);
  }
}
