import { Component, OnInit } from '@angular/core';
import { FormularioUsuariosComponent } from '../formulario-usuarios/formulario-usuarios.component';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { PermisosI } from '../interfaces/permisosI';
import { DatosService } from '../datos.service';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.css']
})
export class PrincipalComponent implements OnInit {
  usuario : PermisosI = {
    usuario1: false,
    usuario2: false,
    usuario3: false
  };
  banderaMostrar : boolean = false;
  banderaNuevaTarea : boolean = true;


  constructor ( public dialog: MatDialog, private servicio : DatosService) { }

  ngOnInit(): void {
    this.servicio.inicializar();
    this.openDialog();
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(FormularioUsuariosComponent, {
      width: '300px',
      data: this.usuario,
    });

    dialogRef.afterClosed().subscribe(result => {
      this.banderaMostrar = !this.banderaMostrar;
      this.usuario = result;
      if ( this.usuario.usuario1 == true )
        this.banderaNuevaTarea = false;
    });
  }
}
