import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatDialogModule} from '@angular/material/dialog';
import {MatRadioModule} from '@angular/material/radio';
import { FlexLayoutModule } from '@angular/flex-layout';
import {MatCheckboxModule} from '@angular/material/checkbox';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatDialogModule,
    MatRadioModule,
    FlexLayoutModule,
    MatCheckboxModule
  ],
  exports: [
    MatDialogModule,
    MatRadioModule,
    FlexLayoutModule,
    MatCheckboxModule
  ]
})
export class MaterialModule { }
