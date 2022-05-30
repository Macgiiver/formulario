import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReactiveRoutingModule } from './reactive-routing.module';
import { EmpleadosComponent } from './empleados/empleados.component';
import { RegistroComponent } from './registro/registro.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FechasYhorasComponent } from './fechas-yhoras/fechas-yhoras.component';


@NgModule({
  declarations: [
    EmpleadosComponent,
    RegistroComponent,
    FechasYhorasComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    ReactiveRoutingModule
  ]
})
export class ReactiveModule { }
