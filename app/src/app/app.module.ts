import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MaterialModule } from './material/material.module';
import { PrincipalComponent } from './principal/principal.component';
import { TablaComponent } from './tabla/tabla.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormularioUsuariosComponent } from './formulario-usuarios/formulario-usuarios.component';
import { NuevoUsuarioComponent } from './nuevo-usuario/nuevo-usuario.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InputComponent } from './input/input.component';
import { AgregarTablaComponent } from './agregar-tabla/agregar-tabla.component';
import { FormNuevaTareaComponent } from './form-nueva-tarea/form-nueva-tarea.component';


@NgModule({
  declarations: [
    AppComponent,
    PrincipalComponent,
    TablaComponent,
    FormularioUsuariosComponent,
    NuevoUsuarioComponent,
    InputComponent,
    AgregarTablaComponent,
    FormNuevaTareaComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
