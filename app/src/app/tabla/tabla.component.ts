import { Component, Input, OnInit } from '@angular/core';
import { DatosService } from '../datos.service';
import { PermisosI } from '../interfaces/permisosI';

@Component({
  selector: 'app-tabla',
  templateUrl: './tabla.component.html',
  styleUrls: ['./tabla.component.css']
})
export class TablaComponent implements OnInit {
  @Input() permisos : PermisosI = {
    usuario1: false,
    usuario2: false,
    usuario3: false
  };
  tareas : any;
  usuarios : any;
  permisoCheckbox : boolean = false;

  constructor(private servicio : DatosService) { }

  ngOnInit(): void {
    this.inicializarArreglos();
    this.inicializarPermisoCheckbox();
  }

  buscarNombre(userId : number){
    return this.servicio.buscarUsername(userId);
  }

  inicializarArreglos(){
    this.tareas = this.servicio.tareas;
    this.usuarios = this.servicio.usuarios;
  }
  inicializarPermisoCheckbox(){
    if(this.permisos.usuario1 == true) this.permisoCheckbox = true;
  }
}
