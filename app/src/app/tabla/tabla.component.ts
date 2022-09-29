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
  permisoBorrar : boolean = false;

  constructor(private servicio : DatosService) { }

  ngOnInit(): void {
    this.inicializarArreglos();
    this.inicializarPermisoCheckbox();
    this.servicio.flag.subscribe((flag : boolean)=>{
      if(flag == true)
      {
        let tareaIncompleta = this.servicio.getNuevaTarea();
        let UltimoId = this.tareas[this.tareas.length - 1].id;
        tareaIncompleta.id = UltimoId + 1;
        tareaIncompleta.completed = false; 
        this.tareas.push( tareaIncompleta );

      }

    })
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

  inicializarPermisoBorrar() {
    if(this.permisos.usuario1 == true || this.permisos.usuario2 == true) this.permisoBorrar = true;
  }

  borrar(idTarea : number) {
    let indexBorrar = this.tareas.findIndex((tarea : any) => { if(tarea.id == idTarea) return true; return false;});
    this.tareas.splice(indexBorrar , 1);
  }
}
