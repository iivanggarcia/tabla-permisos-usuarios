import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { PermisosI } from '../interfaces/permisosI';
import { PrincipalComponent } from '../principal/principal.component';

@Component({
  selector: 'app-formulario-usuarios',
  templateUrl: './formulario-usuarios.component.html',
  styleUrls: ['./formulario-usuarios.component.css']
})
export class FormularioUsuariosComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<PrincipalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: PermisosI,
  ) { }

  ngOnInit(): void {
  }

  onNoClick(i: number): void {
    switch (i) {
      case 1:
        this.data.usuario1 = true;
        break;
      case 2:
        this.data.usuario2 = true;
        break;
      case 3:
        this.data.usuario3 = true;
        break;
      default:
        break;
    }
    this.dialogRef.close(this.data);
  }

}
