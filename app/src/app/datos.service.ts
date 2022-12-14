import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, elementAt, map, Observable } from 'rxjs';
import { Usuario } from './interfaces/usuarios';

@Injectable({
  providedIn: 'root'
})
export class DatosService {
  urlUsuarios : string = "https://jsonplaceholder.typicode.com/users";
  urlTareas : string = "https://jsonplaceholder.typicode.com/todos";
  usuarios : any;
  tareas : any;
  nuevaTarea : any;

  flag = new BehaviorSubject<boolean>(false);

  constructor(private http: HttpClient) { }


  peticion(url: string) : Observable<any>{
    return this.http.get(url);
  }

  inicializar() : void{
    this.peticion(this.urlUsuarios).subscribe((datos:any) =>{
      this.usuarios = datos;
    });
    this.peticion(this.urlTareas).subscribe((datos:any) =>{
      this.tareas = datos;
    });
  }

  buscarUsername( userId : number) : string{
    let nombreUsuario : string = this.usuarios.find((element: { id: any; }) => element.id == userId).username;
    return nombreUsuario;
  }

  getUsuarios() : Usuario[] {
    return this.usuarios;
  }

  getNuevaTarea( ) {
    return this.nuevaTarea;
  }

  setNuevaTarea(tarea : any) {
    this.nuevaTarea = tarea;
    this.flag.next(true);
  }
  
}
