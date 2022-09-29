import { Component, OnInit } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { FormNuevaTareaComponent } from '../form-nueva-tarea/form-nueva-tarea.component';
import { DatosService } from '../datos.service';


@Component({
  selector: 'app-agregar-tabla',
  templateUrl: './agregar-tabla.component.html',
  styleUrls: ['./agregar-tabla.component.css']
})
export class AgregarTablaComponent implements OnInit {

  constructor(public dialog: MatDialog, private servicio : DatosService ) { }

  ngOnInit(): void {
  }

  agregarTarea(){
    const dialogRef = this.dialog.open(FormNuevaTareaComponent, {
      width: '300px',
    });

    dialogRef.afterClosed().subscribe(result => {
      this.servicio.setNuevaTarea(result);
    });
  }

}
